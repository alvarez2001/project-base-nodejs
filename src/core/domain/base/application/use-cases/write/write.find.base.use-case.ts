import {WriteFindBaseUseCaseInterface} from "../../../domain/use-cases/write/write.find.base.use-case.interface";
import {WriteBaseRepositoryInterface} from "../../../domain/repositories/write/write.base.repository.interface";

export class WriteFindBaseUseCase<T> implements WriteFindBaseUseCaseInterface<T> {

    constructor(private baseRepository: WriteBaseRepositoryInterface<T>) {
    }

    index(): Promise<T[]> {
        return this.baseRepository.find();
    }


}