import { ReadDeleteBaseUseCaseInterface } from "../../../domain/use-cases/read/read.delete.base.use-case.interface";
import { ReadBaseRepositoryInterface } from "../../../domain/repositories/read/read.base.repository.interface";

export class ReadDeleteBaseUseCase<T> implements ReadDeleteBaseUseCaseInterface<T> {

  constructor(private baseRepository: ReadBaseRepositoryInterface<T>) {
  }

  index(id: string): Promise<T> {
    return this.baseRepository.delete(id);
  }


}