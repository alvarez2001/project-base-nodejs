export interface ReadSaveBaseUseCaseInterface<T> {
    index(data: any): Promise<T>;
}