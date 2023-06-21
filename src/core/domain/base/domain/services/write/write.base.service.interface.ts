import {ResponseInterface} from "../../../../../interfaces/response.interface";

export interface WriteBaseServiceInterface<T> {

    delete(id: number): Promise<ResponseInterface<T>>;

    find(): Promise<ResponseInterface<T[]>>;

    findById(id: number): Promise<ResponseInterface<T>>;

    findOne(field: string, value: any): Promise<ResponseInterface<T>>;

    save(data: any): Promise<ResponseInterface<T>>;

    update(id: number, newData: any): Promise<ResponseInterface<T>>;

}