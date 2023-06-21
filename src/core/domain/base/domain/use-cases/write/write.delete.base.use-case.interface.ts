export interface WriteDeleteBaseUseCaseInterface<T> {
    index(id: number): Promise<T>;
}