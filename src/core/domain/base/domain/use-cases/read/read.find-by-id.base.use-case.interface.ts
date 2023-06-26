import { ObjectId } from "typeorm";

export interface ReadFindByIdBaseUseCaseInterface<T> {
    index(id: ObjectId): Promise<T>;
}