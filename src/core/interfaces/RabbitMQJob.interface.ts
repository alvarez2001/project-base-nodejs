export interface RabbitMQJobInterface {
  displayNames: Object;
  writeModel: string;
  timestamp: number;
  message: any;
  topic: string;
  queue: string;

}