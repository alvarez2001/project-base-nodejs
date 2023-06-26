import { RabbitmqExchangesInterfaces } from "./core/interfaces/rabbitmq.exchanges.interfaces";

export const RabbitMQExchange: RabbitmqExchangesInterfaces[] = [
  {
    exchange: "user.fanout",
    type: "fanout",
    queues: [
      "user.created.queue",
      "user.updated.queue",
      "user.deleted.queue"
    ]
  }
];
