import {
    WriteBaseRepository
} from "../../../../../core/domain/base/infrastructure/repositories/write/write.base.repository";
import {WriteUser} from "../../../../../models/User/Write/WriteUser";
import {injectable} from "inversify";
import {WriteUserRepositoryInterface} from "../../../domain/repositories/write/write.user.repository.interface";

@injectable()
export class WriteUserRepository extends WriteBaseRepository<WriteUser> implements  WriteUserRepositoryInterface{
    constructor() {
        super(WriteUser);
    }

}