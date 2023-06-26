import { ObjectId, ObjectLiteral, Repository } from "typeorm";
import { injectable, unmanaged } from "inversify";
import { ModelNotFoundException } from "../../../../../exceptions/model.not-found.exception";
import { ReadBaseRepositoryInterface } from "../../../domain/repositories/read/read.base.repository.interface";
import { AppMongoDataSource } from "../../../../../databases/db-read";

@injectable()
export class ReadBaseRepository<T extends ObjectLiteral> implements ReadBaseRepositoryInterface<T> {

  readonly model: T;
  repository: Repository<T>;

  // @ts-ignore
  constructor(@unmanaged() model: { new(): T; }) { // This injection is not managed by inversify!
    this.model = new model();
    this.repository = AppMongoDataSource.getRepository<T>(model);
  }

  async find(): Promise<T[]> {
    return this.repository.find();
  }

  async findOne(field: string, value: any, withDeleted: boolean = false): Promise<T> {
    try {
      const whereCondition: any = { [field]: value };
      return await this.repository.findOneOrFail({ where: whereCondition, withDeleted: withDeleted });
    } catch (e) {
      throw new ModelNotFoundException(`Not found ${field}: ${value} in model ${Object.getPrototypeOf(this.model).constructor.name}`);
    }
  }

  async findOneById(id: ObjectId, withDeleted: boolean = false): Promise<T> {
    return this.findOne("_id", id, withDeleted);
  }

  async update(id: ObjectId, newData: any): Promise<T> {
    const searchById: any = { _id: id };
    await this.repository.update(searchById, newData);
    return this.findOneById(id);
  }

  async delete(id: ObjectId): Promise<T> {
    const whereCondition: any = { _id: id };
    await this.repository.softRemove(whereCondition);
    return this.findOneById(id, true);
  }

  async save(data: any): Promise<T> {
    return this.repository.save(data);
  }

}