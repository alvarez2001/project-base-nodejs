import "reflect-metadata";
import app from "./server";
import { AppDataSource } from "./core/databases/db-write";
import { RabbitmqHandler } from "./core/rabbitmq";
import { AppMongoDataSource } from "./core/databases/db-read";
import { config } from "./config";

async function main() {
  try {
    await AppDataSource.initialize();
    await AppMongoDataSource.initialize();
    const PORT = config.PORT;

    app.listen(PORT, async () => {
      console.log(`SERVER ON PORT ${PORT}`);

      const rabbitmq = new RabbitmqHandler();

      setTimeout(async () => {
        await rabbitmq.connected();
        await rabbitmq.bindingQueueWithExchange();
        await rabbitmq.consumeQueues();
      }, 2000);





    });
  } catch (e) {
    console.log(e);
  }

}

main();



