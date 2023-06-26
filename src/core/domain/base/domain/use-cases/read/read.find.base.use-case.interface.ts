export interface ReadFindBaseUseCaseInterface<T> {
    index(): Promise<T[]>;
}