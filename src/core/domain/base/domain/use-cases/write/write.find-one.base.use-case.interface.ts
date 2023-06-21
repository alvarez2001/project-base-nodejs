export interface WriteFindOneBaseUseCaseInterface<T> {
    index(field: string, value: any): Promise<T>;
}