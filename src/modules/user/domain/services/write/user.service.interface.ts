import {WriteUser} from "../../../../../models/User/Write/WriteUser";
import {
    WriteBaseServiceInterface
} from "../../../../../core/domain/base/domain/services/write/write.base.service.interface";

export interface UserServiceInterface extends WriteBaseServiceInterface<WriteUser> {
}