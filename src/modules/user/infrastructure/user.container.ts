import {Container} from "inversify";
import {UserServiceInterface} from "../domain/services/user.service.interface";
import userTypes from "./constant/user.types";
import {UserService} from "../application/services/user.service";
import {WriteUserRepositoryInterface} from "../domain/repositories/write/write.user.repository.interface";
import {WriteUserRepository} from "./repositories/write/write.user.repository";

export class UserContainer {
    private readonly container: Container;

    constructor(container: Container) {
        this.container = container;
    }

    binding() {
        this.container.bind<UserServiceInterface>(userTypes.UserService).to(UserService);
        this.container.bind<WriteUserRepositoryInterface>(userTypes.WriteUserRepository).to(WriteUserRepository);
        return this.container;
    }

}