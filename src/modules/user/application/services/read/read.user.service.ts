import { inject, injectable } from "inversify";
import userTypes from "../../../infrastructure/constant/user.types";
import { ReadUser } from "../../../../../models/User/Read/ReadUser";
import { ReadBaseService } from "../../../../../core/domain/base/application/services/read/read.base.service";
import { ReadUserServiceInterface } from "../../../domain/services/read/read.user.service.interface";
import { ReadUserRepositoryInterface } from "../../../domain/repositories/read/read.user.repository.interface";

@injectable()
export class ReadUserService extends ReadBaseService<ReadUser> implements ReadUserServiceInterface {

  constructor(@inject(userTypes.ReadUserRepository) public userRepository: ReadUserRepositoryInterface) {
    super(userRepository);
  }


}