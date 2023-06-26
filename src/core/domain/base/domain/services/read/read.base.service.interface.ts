import {ResponseInterface} from "../../../../../interfaces/response.interface";
import { ObjectId } from "typeorm";

export interface ReadBaseServiceInterface<T> {

    delete(id: ObjectId): Promise<ResponseInterface<T>>;

    find(): Promise<ResponseInterface<T[]>>;

    findById(id: ObjectId): Promise<ResponseInterface<T>>;

    findOne(field: string, value: any): Promise<ResponseInterface<T>>;

    save(data: any): Promise<ResponseInterface<T>>;

    update(id: ObjectId, newData: any): Promise<ResponseInterface<T>>;

}