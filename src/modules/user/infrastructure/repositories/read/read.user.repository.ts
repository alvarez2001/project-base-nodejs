import { injectable } from "inversify";
import {
  ReadBaseRepository
} from "../../../../../core/domain/base/infrastructure/repositories/read/read.base.repository";
import { ReadUser } from "../../../../../models/User/Read/ReadUser";
import { ReadUserRepositoryInterface } from "../../../domain/repositories/read/read.user.repository.interface";

@injectable()
export class ReadUserRepository extends ReadBaseRepository<ReadUser> implements ReadUserRepositoryInterface {
  constructor() {
    super(ReadUser);
  }

}