import { RabbitMQJobInterface } from "../interfaces/RabbitMQJob.interface";

export class RabbitMQJob {

  private _displayNames: Object;
  private _writeModel: string;
  private _timestamp: number;
  private _message: any;
  private _topic: string;
  private _queue: string;


  get timestamp(): number {
    return this._timestamp;
  }

  set timestamp(value: number) {
    this._timestamp = value;
  }

  get queue(): string {
    return this._queue;
  }

  set queue(value: string) {
    this._queue = value;
  }

  get topic(): string {
    return this._topic;
  }

  set topic(value: string) {
    this._topic = value;
  }

  get writeModel(): string {
    return this._writeModel;
  }

  set writeModel(value: string) {
    this._writeModel = value;
  }

  get displayNames(): Object {
    return this._displayNames;
  }

  set displayNames(value: Object) {
    this._displayNames = value;
  }

  get message(): any {
    return this._message;
  }

  set message(value: any) {
    this._message = value;
  }

  toJson(): RabbitMQJobInterface {
    return {
      displayNames: this.displayNames,
      writeModel: this.writeModel,
      timestamp: this.timestamp,
      message: this.message,
      topic: this.topic,
      queue: this.queue,
    }
  }

}