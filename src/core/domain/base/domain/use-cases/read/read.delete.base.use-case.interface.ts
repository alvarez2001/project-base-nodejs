export interface ReadDeleteBaseUseCaseInterface<T> {
    index(id: string): Promise<T>;
}