import {
  ReadFindByIdBaseUseCaseInterface
} from "../../../domain/use-cases/read/read.find-by-id.base.use-case.interface";
import { ReadBaseRepositoryInterface } from "../../../domain/repositories/read/read.base.repository.interface";
import { ObjectId } from "typeorm";

export class ReadFindByIdBaseUseCase<T> implements ReadFindByIdBaseUseCaseInterface<T> {

  constructor(private baseRepository: ReadBaseRepositoryInterface<T>) {
  }

  index(id: ObjectId): Promise<T> {
    return this.baseRepository.findOneById(id, false);
  }


}