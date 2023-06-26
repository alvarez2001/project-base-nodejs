import { Container } from "inversify";
import { UserServiceInterface } from "../domain/services/write/user.service.interface";
import userTypes from "./constant/user.types";
import { WriteUserService } from "../application/services/write/write.user.service";
import { WriteUserRepositoryInterface } from "../domain/repositories/write/write.user.repository.interface";
import { WriteUserRepository } from "./repositories/write/write.user.repository";
import { ReadUserService } from "../application/services/read/read.user.service";
import { ReadUserServiceInterface } from "../domain/services/read/read.user.service.interface";
import { ReadUserRepositoryInterface } from "../domain/repositories/read/read.user.repository.interface";
import { ReadUserRepository } from "./repositories/read/read.user.repository";

export class UserContainer {
  private readonly container: Container;

  constructor(container: Container) {
    this.container = container;
  }

  binding() {
    this.container.bind<UserServiceInterface>(userTypes.WriteUserService).to(WriteUserService);
    this.container.bind<WriteUserRepositoryInterface>(userTypes.WriteUserRepository).to(WriteUserRepository);

    this.container.bind<ReadUserServiceInterface>(userTypes.ReadUserService).to(ReadUserService);
    this.container.bind<ReadUserRepositoryInterface>(userTypes.ReadUserRepository).to(ReadUserRepository);
    return this.container;
  }

}