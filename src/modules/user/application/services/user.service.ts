import {inject, injectable} from "inversify";
import {WriteUser} from "../../../../models/User/Write/WriteUser";
import {UserServiceInterface} from "../../domain/services/user.service.interface";
import userTypes from "../../infrastructure/constant/user.types";
import {WriteUserRepositoryInterface} from "../../domain/repositories/write/write.user.repository.interface";
import {WriteBaseService} from "../../../../core/domain/base/application/services/write/write.base.service";
import {ReadUser} from "../../../../models/User/Read/ReadUser";

@injectable()
export class UserService extends WriteBaseService<WriteUser> implements UserServiceInterface {

    constructor(@inject(userTypes.WriteUserRepository) public userRepository: WriteUserRepositoryInterface) {
        super(userRepository);
    }

    async getDat( ) {
        return ReadUser.find();
    }

}