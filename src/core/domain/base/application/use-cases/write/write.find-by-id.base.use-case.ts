import {WriteBaseRepositoryInterface} from "../../../domain/repositories/write/write.base.repository.interface";
import {
    WriteFindByIdBaseUseCaseInterface
} from "../../../domain/use-cases/write/write.find-by-id.base.use-case.interface";

export class WriteFindByIdBaseUseCase<T> implements WriteFindByIdBaseUseCaseInterface<T> {

    constructor(private baseRepository: WriteBaseRepositoryInterface<T>) {
    }

    index(id: number): Promise<T> {
        return this.baseRepository.findOneById(id, false);
    }


}