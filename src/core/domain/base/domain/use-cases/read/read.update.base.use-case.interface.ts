import { ObjectId } from "typeorm";

export interface ReadUpdateBaseUseCaseInterface<T> {
    index(id: ObjectId, newData: any): Promise<T>;
}