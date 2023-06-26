import { ReadBaseRepositoryInterface } from "../../../domain/repositories/read/read.base.repository.interface";
import { ReadFindBaseUseCaseInterface } from "../../../domain/use-cases/read/read.find.base.use-case.interface";

export class ReadFindBaseUseCase<T> implements ReadFindBaseUseCaseInterface<T> {

  constructor(private baseRepository: ReadBaseRepositoryInterface<T>) {
  }

  index(): Promise<T[]> {
    return this.baseRepository.find();
  }


}