export interface ReadFindByIdBaseUseCaseInterface<T> {
    index(id: string): Promise<T>;
}