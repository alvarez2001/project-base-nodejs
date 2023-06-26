import {ResponseInterface} from "../../../../../interfaces/response.interface";

export interface ReadBaseServiceInterface<T> {

    delete(id: string): Promise<ResponseInterface<T>>;

    find(): Promise<ResponseInterface<T[]>>;

    findById(id: string): Promise<ResponseInterface<T>>;

    findOne(field: string, value: any): Promise<ResponseInterface<T>>;

    save(data: any): Promise<ResponseInterface<T>>;

    update(id: string, newData: any): Promise<ResponseInterface<T>>;

}