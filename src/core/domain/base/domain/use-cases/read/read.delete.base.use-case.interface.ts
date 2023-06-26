import { ObjectId } from "typeorm";

export interface ReadDeleteBaseUseCaseInterface<T> {
    index(id: ObjectId): Promise<T>;
}