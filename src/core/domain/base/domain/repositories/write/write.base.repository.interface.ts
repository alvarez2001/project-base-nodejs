export interface WriteBaseRepositoryInterface<T> {
    find(): Promise<T[]>;

    findOne(field: string, value: any, withDeleted?: boolean): Promise<T>;

    findOneById(id: number, withDeleted?: boolean): Promise<T>;

    save(data: any): Promise<T>;

    update(id: number, newData: any): Promise<T>;

    delete(id: number): Promise<T>;
}