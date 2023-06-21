export interface WriteFindByIdBaseUseCaseInterface<T> {
    index(id: number): Promise<T>;
}