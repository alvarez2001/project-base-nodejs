import { ObjectId } from "typeorm";

export interface ReadBaseRepositoryInterface<T> {
  find(): Promise<T[]>;

  findOne(field: string, value: any, withDeleted?: boolean): Promise<T>;

  findOneById(idMongo: ObjectId, withDeleted?: boolean): Promise<T>;

  save(data: any): Promise<T>;

  update(idMongo: ObjectId, newData: any): Promise<T>;

  delete(idMongo: ObjectId): Promise<T>;
}