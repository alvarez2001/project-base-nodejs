import {Container} from "inversify";
import baseTypes from "./constant/base.types";
import {WriteBaseRepositoryInterface} from "../domain/repositories/write/write.base.repository.interface";
import {WriteBaseRepository} from "./repositories/write/write.base.repository";
import {Write} from "../../../models/Write";

export class BaseContainer {
    private readonly container: Container;

    constructor(container: Container) {
        this.container = container;
    }

    binding() {
        this.container.bind<WriteBaseRepositoryInterface<Write>>(baseTypes.WriteBaseRepository).to(WriteBaseRepository<Write>);
        return this.container;
    }

}