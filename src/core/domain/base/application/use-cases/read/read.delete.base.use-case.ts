import { ReadDeleteBaseUseCaseInterface } from "../../../domain/use-cases/read/read.delete.base.use-case.interface";
import { ReadBaseRepositoryInterface } from "../../../domain/repositories/read/read.base.repository.interface";
import { ObjectId } from "typeorm";

export class ReadDeleteBaseUseCase<T> implements ReadDeleteBaseUseCaseInterface<T> {

  constructor(private baseRepository: ReadBaseRepositoryInterface<T>) {
  }

  index(id: ObjectId): Promise<T> {
    return this.baseRepository.delete(id);
  }


}