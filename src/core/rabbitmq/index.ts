import { connect, Connection, Channel, ConsumeMessage } from "amqplib";
import { config } from "../../config";
import { RabbitmqExchangesInterfaces } from "../interfaces/rabbitmq.exchanges.interfaces";
import { RabbitMQExchange } from "../../rabbitmq.exchange";
import { RabbitMQJobInterface } from "../interfaces/RabbitMQJob.interface";
import { readFileSync } from "fs";

export class RabbitmqHandler {
  connection: Connection;
  channel: Channel;
  declarationsQueuesWithExchanges: RabbitmqExchangesInterfaces[] = RabbitMQExchange;


  async connected() {
    this.connection = await connect(`amqp://${config.RABBITMQ_USERNAME}:${config.RABBITMQ_PASSWORD}@${config.RABBITMQ_HOST}/${config.RABBITMQ_VHOST}`);
    this.channel = await this.connection.createChannel();
  }

  async bindingQueueWithExchange(): Promise<void> {
    for (const exchangeWithQueue of this.declarationsQueuesWithExchanges) {
      await this.channel.assertExchange(exchangeWithQueue.exchange, exchangeWithQueue.type, { durable: true });
      for (const queue of exchangeWithQueue.queues) {
        await this.channel.assertQueue(queue);
        await this.channel.bindQueue(queue, exchangeWithQueue.exchange, "");
      }
    }
  }

  async closeConnection(): Promise<void> {
    await this.connection.close();
  }


  async publishMessages(exchange: string, data: RabbitMQJobInterface) {
    this.channel.publish(exchange, "", Buffer.from(JSON.stringify(data)));
    setTimeout(async () => {
      await this.closeConnection();
    }, 1000);
  }

  async consumeMessage(queue: string) {
    await this.channel.consume(queue, (msg: ConsumeMessage | null) => {
      if (msg == null) return;

      const data: RabbitMQJobInterface = JSON.parse(<string>msg?.content.toString());

      if (data.displayNames?.hasOwnProperty(queue)) {
        const filePath: any = String(data.displayNames[queue as keyof typeof data.displayNames]);
        const classPath = filePath.replace(".ts", "");

        const fileContent = readFileSync(filePath, "utf-8");

        const classDeclarationRegex = /export\s+class\s+(\w+)/;
        const match = fileContent.match(classDeclarationRegex);
        if (match && match[1]) {
          const className = match[1];

          import(classPath).then(async (module) => {
            const MyClass = module[className];
            const instance = new MyClass();
            try {
              const handleData: boolean = await instance.handle(data, this.connection, this.channel);
              if (handleData) {
                this.channel.ack(msg);
              }
            } catch (error) {
              console.log(`Error queue: ${queue}`);
            }
          });
        }
      } else {
        this.channel.ack(msg);
      }


    }, { noAck: false });
  }

  async consumeQueues() {
    for (let index = 0; index < this.declarationsQueuesWithExchanges.length; index++) {
      const data = this.declarationsQueuesWithExchanges[index];
      for (let j = 0; j < data.queues.length; j++) {
        this.consumeMessage(data.queues[j]).then();
      }
    }
  }


}