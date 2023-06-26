import { ReadFindOneBaseUseCaseInterface } from "../../../domain/use-cases/read/read.find-one.base.use-case.interface";
import { ReadBaseRepositoryInterface } from "../../../domain/repositories/read/read.base.repository.interface";

export class ReadFindOneBaseUseCase<T> implements ReadFindOneBaseUseCaseInterface<T> {

  constructor(private baseRepository: ReadBaseRepositoryInterface<T>) {
  }

  index(field: string, value: any): Promise<T> {
    return this.baseRepository.findOne(field, value, false);
  }


}