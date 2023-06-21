import {WriteBaseRepositoryInterface} from "../../../domain/repositories/write/write.base.repository.interface";
import {WriteDeleteBaseUseCaseInterface} from "../../../domain/use-cases/write/write.delete.base.use-case.interface";

export class WriteDeleteBaseUseCase<T> implements WriteDeleteBaseUseCaseInterface<T> {

    constructor(private baseRepository: WriteBaseRepositoryInterface<T>) {
    }

    index(id: number): Promise<T> {
        return this.baseRepository.delete(id);
    }


}