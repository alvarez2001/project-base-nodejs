import { ReadSaveBaseUseCaseInterface } from "../../../domain/use-cases/read/read.save.base.use-case.interface";
import { ReadBaseRepositoryInterface } from "../../../domain/repositories/read/read.base.repository.interface";

export class ReadSaveBaseUseCase<T> implements ReadSaveBaseUseCaseInterface<T> {

  constructor(private baseRepository: ReadBaseRepositoryInterface<T>) {
  }

  index(data: any): Promise<T> {
    return this.baseRepository.save(data);
  }


}