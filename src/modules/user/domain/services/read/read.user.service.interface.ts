import {
  ReadBaseServiceInterface
} from "../../../../../core/domain/base/domain/services/read/read.base.service.interface";
import { ReadUser } from "../../../../../models/User/Read/ReadUser";

export interface ReadUserServiceInterface extends ReadBaseServiceInterface<ReadUser> {
}