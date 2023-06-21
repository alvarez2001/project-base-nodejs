import {WriteBaseRepositoryInterface} from "../../../domain/repositories/write/write.base.repository.interface";
import {WriteUpdateBaseUseCaseInterface} from "../../../domain/use-cases/write/write.update.base.use-case.interface";

export class WriteUpdateBaseUseCase<T> implements WriteUpdateBaseUseCaseInterface<T> {

    constructor(private baseRepository: WriteBaseRepositoryInterface<T>) {
    }

    index(id: number, newData: any): Promise<T> {
        return this.baseRepository.update(id, newData);
    }


}