export interface WriteFindBaseUseCaseInterface<T> {
    index(): Promise<T[]>;
}