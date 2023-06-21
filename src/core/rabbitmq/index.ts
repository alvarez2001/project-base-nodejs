import {connect, Connection, Channel} from 'amqplib';

interface ExchangeWithQueue {
    exchange: string,
    queues: string[]
}

export class RabbitmqHandler {

    connection: Connection;
    channel: Channel;
    declarationsQueuesWithExchanges: ExchangeWithQueue[] = [
        {
            exchange: 'user.fanout',
            queues: [
                'user.created.queue',
                'user.updated.queue',
                'user.deleted.queue',
            ]
        }
    ];


    async connected() {
        this.connection = await connect('amqp://diocesis:Wcny7GhygQJWpj46yk@rabbitmq_event_bus_diocesis/diocesis_vhost');
        this.channel = await this.connection.createChannel();
    }

    async bindingQueueWithExchange() {
        const typeExchange = 'fanout';

        for (const exchangeWithQueue of this.declarationsQueuesWithExchanges) {
            await this.channel.assertExchange(exchangeWithQueue.exchange, typeExchange);

            for (const queue of exchangeWithQueue.queues) {
                await this.channel.assertQueue(queue);
                await this.channel.bindQueue(queue, exchangeWithQueue.exchange, '')
            }
        }

    }




}