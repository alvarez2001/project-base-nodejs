export interface WriteSaveBaseUseCaseInterface<T> {
    index(data: any): Promise<T>;
}