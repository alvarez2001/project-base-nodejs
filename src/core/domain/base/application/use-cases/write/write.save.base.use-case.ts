import {WriteBaseRepositoryInterface} from "../../../domain/repositories/write/write.base.repository.interface";
import {WriteSaveBaseUseCaseInterface} from "../../../domain/use-cases/write/write.save.base.use-case.interface";

export class WriteSaveBaseUseCase<T> implements WriteSaveBaseUseCaseInterface<T> {

    constructor(private baseRepository: WriteBaseRepositoryInterface<T>) {
    }

    index(data: any): Promise<T> {
        return this.baseRepository.save(data);
    }


}