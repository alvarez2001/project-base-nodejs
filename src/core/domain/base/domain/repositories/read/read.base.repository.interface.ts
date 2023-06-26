export interface ReadBaseRepositoryInterface<T> {
  find(): Promise<T[]>;

  findOne(field: string, value: any, withDeleted?: boolean): Promise<T>;

  findOneById(idMongo: string, withDeleted?: boolean): Promise<T>;

  save(data: any): Promise<T>;

  update(idMongo: string, newData: any): Promise<T>;

  delete(idMongo: string): Promise<T>;
}