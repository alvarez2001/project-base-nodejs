import {WriteBaseRepositoryInterface} from "../../../domain/repositories/write/write.base.repository.interface";
import {WriteFindOneBaseUseCaseInterface} from "../../../domain/use-cases/write/write.find-one.base.use-case.interface";

export class WriteFindOneBaseUseCase<T> implements WriteFindOneBaseUseCaseInterface<T> {

    constructor(private baseRepository: WriteBaseRepositoryInterface<T>) {
    }

    index(field: string, value: any): Promise<T> {
        return this.baseRepository.findOne(field, value, false);
    }


}