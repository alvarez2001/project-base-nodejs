import {
    WriteBaseRepositoryInterface
} from "../../../../../core/domain/base/domain/repositories/write/write.base.repository.interface";
import {WriteUser} from "../../../../../models/User/Write/WriteUser";

export interface WriteUserRepositoryInterface extends WriteBaseRepositoryInterface<WriteUser> {

}