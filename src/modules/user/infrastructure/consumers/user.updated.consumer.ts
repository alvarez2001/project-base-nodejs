import { RabbitMQJobInterface } from "../../../../core/interfaces/RabbitMQJob.interface";
import { injectable, Container } from "inversify";
import userTypes from "../constant/user.types";
import { ReadUserRepositoryInterface } from "../../domain/repositories/read/read.user.repository.interface";
import { UserContainer } from "../user.container";

@injectable()
export class UserUpdatedConsumer {
  static fileName: string = __filename;
  private container = new UserContainer(new Container()).binding();
  repository: ReadUserRepositoryInterface;

  constructor() {
    this.repository = this.container.get<ReadUserRepositoryInterface>(userTypes.ReadUserRepository);
  }

  async handle(data: RabbitMQJobInterface): Promise<boolean> {
    try {
      const user = await this.repository.findOne('id', data.message.id);
      await this.repository.update(user._id, data.message);
      return true;
    } catch (e) {
      return false;
    }
  }

}