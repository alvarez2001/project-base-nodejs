export interface ReadFindOneBaseUseCaseInterface<T> {
    index(field: string, value: any): Promise<T>;
}