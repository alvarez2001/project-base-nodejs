import { ReadUpdateBaseUseCaseInterface } from "../../../domain/use-cases/read/read.update.base.use-case.interface";
import { ReadBaseRepositoryInterface } from "../../../domain/repositories/read/read.base.repository.interface";
import { ObjectId } from "typeorm";

export class ReadUpdateBaseUseCase<T> implements ReadUpdateBaseUseCaseInterface<T> {

  constructor(private baseRepository: ReadBaseRepositoryInterface<T>) {
  }

  index(id: ObjectId, newData: any): Promise<T> {
    return this.baseRepository.update(id, newData);
  }


}