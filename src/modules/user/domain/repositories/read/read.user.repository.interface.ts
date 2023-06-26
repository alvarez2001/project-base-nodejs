import {
  ReadBaseRepositoryInterface
} from "../../../../../core/domain/base/domain/repositories/read/read.base.repository.interface";
import { ReadUser } from "../../../../../models/User/Read/ReadUser";

export interface ReadUserRepositoryInterface extends ReadBaseRepositoryInterface<ReadUser> {

}