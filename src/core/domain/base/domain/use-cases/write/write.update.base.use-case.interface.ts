export interface WriteUpdateBaseUseCaseInterface<T> {
    index(id: number, newData: any): Promise<T>;
}