import { injectable } from "inversify";
import { ResponseInterface } from "../../../../../interfaces/response.interface";
import { ReadBaseServiceInterface } from "../../../domain/services/read/read.base.service.interface";
import { ReadDeleteBaseUseCaseInterface } from "../../../domain/use-cases/read/read.delete.base.use-case.interface";
import { ReadSaveBaseUseCaseInterface } from "../../../domain/use-cases/read/read.save.base.use-case.interface";
import { ReadUpdateBaseUseCaseInterface } from "../../../domain/use-cases/read/read.update.base.use-case.interface";
import { ReadFindBaseUseCaseInterface } from "../../../domain/use-cases/read/read.find.base.use-case.interface";
import { ReadFindOneBaseUseCaseInterface } from "../../../domain/use-cases/read/read.find-one.base.use-case.interface";
import {
  ReadFindByIdBaseUseCaseInterface
} from "../../../domain/use-cases/read/read.find-by-id.base.use-case.interface";
import { ReadBaseRepositoryInterface } from "../../../domain/repositories/read/read.base.repository.interface";
import { ReadDeleteBaseUseCase } from "../../use-cases/read/read.delete.base.use-case";
import { ReadSaveBaseUseCase } from "../../use-cases/read/read.save.base.use-case";
import { ReadUpdateBaseUseCase } from "../../use-cases/read/read.update.base.use-case";
import { ReadFindBaseUseCase } from "../../use-cases/read/read.find.base.use-case";
import { ReadFindOneBaseUseCase } from "../../use-cases/read/read.find-one.base.use-case";
import { ReadFindByIdBaseUseCase } from "../../use-cases/read/read.find-by-id.base.use-case";
import { ObjectId } from "typeorm";

@injectable()
export abstract class ReadBaseService<T> implements ReadBaseServiceInterface<T> {

  public readDeleteUseCase: ReadDeleteBaseUseCaseInterface<T>;
  public readSaveUseCase: ReadSaveBaseUseCaseInterface<T>;
  public readUpdateUseCase: ReadUpdateBaseUseCaseInterface<T>;
  public readFindUseCase: ReadFindBaseUseCaseInterface<T>;
  public readFindOneUseCase: ReadFindOneBaseUseCaseInterface<T>;
  public readFindByIdUseCase: ReadFindByIdBaseUseCaseInterface<T>;

  constructor(baseRepository: ReadBaseRepositoryInterface<T>) {
    this.readDeleteUseCase = new ReadDeleteBaseUseCase<T>(baseRepository);
    this.readSaveUseCase = new ReadSaveBaseUseCase<T>(baseRepository);
    this.readUpdateUseCase = new ReadUpdateBaseUseCase<T>(baseRepository);
    this.readFindUseCase = new ReadFindBaseUseCase<T>(baseRepository);
    this.readFindOneUseCase = new ReadFindOneBaseUseCase<T>(baseRepository);
    this.readFindByIdUseCase = new ReadFindByIdBaseUseCase<T>(baseRepository);
  }

  async delete(id: ObjectId): Promise<ResponseInterface<T>> {
    return {
      data: await this.readDeleteUseCase.index(id),
      code: 200
    };
  }

  async find(): Promise<ResponseInterface<T[]>> {
    return {
      data: await this.readFindUseCase.index(),
      code: 200
    };
  }

  async findById(id: ObjectId): Promise<ResponseInterface<T>> {
    return {
      data: await this.readFindByIdUseCase.index(id),
      code: 200
    };
  }

  async findOne(field: string, value: any): Promise<ResponseInterface<T>> {
    return {
      data: await this.readFindOneUseCase.index(field, value),
      code: 200
    };
  }

  async save(data: any): Promise<ResponseInterface<T>> {
    return {
      data: await this.readSaveUseCase.index(data),
      code: 201
    };
  }

  async update(id: ObjectId, newData: any): Promise<ResponseInterface<T>> {
    return {
      data: await this.readUpdateUseCase.index(id, newData),
      code: 200
    };
  }


}