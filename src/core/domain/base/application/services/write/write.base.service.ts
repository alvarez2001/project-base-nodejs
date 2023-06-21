import {WriteBaseServiceInterface} from "../../../domain/services/write/write.base.service.interface";
import {WriteDeleteBaseUseCaseInterface} from "../../../domain/use-cases/write/write.delete.base.use-case.interface";
import {WriteSaveBaseUseCaseInterface} from "../../../domain/use-cases/write/write.save.base.use-case.interface";
import {WriteFindBaseUseCaseInterface} from "../../../domain/use-cases/write/write.find.base.use-case.interface";
import {WriteFindOneBaseUseCaseInterface} from "../../../domain/use-cases/write/write.find-one.base.use-case.interface";
import {
    WriteFindByIdBaseUseCaseInterface
} from "../../../domain/use-cases/write/write.find-by-id.base.use-case.interface";
import {WriteUpdateBaseUseCaseInterface} from "../../../domain/use-cases/write/write.update.base.use-case.interface";
import {injectable} from "inversify";
import {WriteBaseRepositoryInterface} from "../../../domain/repositories/write/write.base.repository.interface";
import {WriteDeleteBaseUseCase} from "../../use-cases/write/write.delete.base.use-case";
import {WriteSaveBaseUseCase} from "../../use-cases/write/write.save.base.use-case";
import {WriteUpdateBaseUseCase} from "../../use-cases/write/write.update.base.use-case";
import {WriteFindBaseUseCase} from "../../use-cases/write/write.find.base.use-case";
import {WriteFindOneBaseUseCase} from "../../use-cases/write/write.find-one.base.use-case";
import {WriteFindByIdBaseUseCase} from "../../use-cases/write/write.find-by-id.base.use-case";
import {ResponseInterface} from "../../../../../interfaces/response.interface";

@injectable()
export abstract class WriteBaseService<T> implements WriteBaseServiceInterface<T> {

    public writeDeleteUseCase: WriteDeleteBaseUseCaseInterface<T>;
    public writeSaveUseCase: WriteSaveBaseUseCaseInterface<T>;
    public writeUpdateUseCase: WriteUpdateBaseUseCaseInterface<T>;
    public writeFindUseCase: WriteFindBaseUseCaseInterface<T>;
    public writeFindOneUseCase: WriteFindOneBaseUseCaseInterface<T>;
    public writeFindByIdUseCase: WriteFindByIdBaseUseCaseInterface<T>;

    constructor(baseRepository: WriteBaseRepositoryInterface<T>) {
        this.writeDeleteUseCase = new WriteDeleteBaseUseCase<T>(baseRepository)
        this.writeSaveUseCase = new WriteSaveBaseUseCase<T>(baseRepository)
        this.writeUpdateUseCase = new WriteUpdateBaseUseCase<T>(baseRepository)
        this.writeFindUseCase = new WriteFindBaseUseCase<T>(baseRepository)
        this.writeFindOneUseCase = new WriteFindOneBaseUseCase<T>(baseRepository)
        this.writeFindByIdUseCase = new WriteFindByIdBaseUseCase<T>(baseRepository)
    }

    async delete(id: number): Promise<ResponseInterface<T>> {
        return {
            data: await this.writeDeleteUseCase.index(id),
            code: 200
        };
    }

    async find(): Promise<ResponseInterface<T[]>> {
        return {
            data: await this.writeFindUseCase.index(),
            code: 200
        };
    }

    async findById(id: number): Promise<ResponseInterface<T>> {
        return {
            data: await this.writeFindByIdUseCase.index(id),
            code: 200
        };
    }

    async findOne(field: string, value: any): Promise<ResponseInterface<T>> {
        return {
            data: await this.writeFindOneUseCase.index(field, value),
            code: 200
        };
    }

    async save(data: any): Promise<ResponseInterface<T>> {
        return {
            data: await this.writeSaveUseCase.index(data),
            code: 201
        };
    }

    async update(id: number, newData: any): Promise<ResponseInterface<T>> {
        return {
            data: await this.writeUpdateUseCase.index(id, newData),
            code: 200
        };
    }


}