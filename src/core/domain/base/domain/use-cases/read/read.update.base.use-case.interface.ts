export interface ReadUpdateBaseUseCaseInterface<T> {
    index(id: string, newData: any): Promise<T>;
}