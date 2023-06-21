import {WriteBaseRepositoryInterface} from "../../../domain/repositories/write/write.base.repository.interface";
import {AppDataSource} from "../../../../../databases/db-write";
import {ObjectLiteral, Repository} from "typeorm";
import {injectable, unmanaged} from "inversify";
import {ModelNotFoundException} from "../../../../../exceptions/model.not-found.exception";

@injectable()
export class WriteBaseRepository<T extends ObjectLiteral> implements WriteBaseRepositoryInterface<T> {

    readonly model: T;
    repository: Repository<T>;

    // @ts-ignore
    constructor(@unmanaged() model: { new(): T; }) { // This injection is not managed by inversify!
        this.model = new model();
        this.repository = AppDataSource.getRepository<T>(model);
    }

    async find(): Promise<T[]> {
        return this.repository.find();
    }

    async findOne(field: string, value: any, withDeleted: boolean = false): Promise<T> {
        try {
            const whereCondition: any = {[field]: value};
            return await this.repository.findOneOrFail({where: whereCondition, withDeleted: withDeleted});
        } catch (e) {
            throw new ModelNotFoundException(`Not found ${field}: ${value} in model ${Object.getPrototypeOf(this.model).constructor.name}`)
        }
    }

    async findOneById(id: number, withDeleted: boolean = false): Promise<T> {
        return this.findOne('id', id, withDeleted);
    }

    async update(id: number, newData: any): Promise<T> {
        const searchById: any = {id};
        await this.repository.update(searchById, newData);
        return this.findOneById(id);
    }

    async delete(id: number): Promise<T> {
        const whereCondition: any = {id: id};
        await this.repository.softDelete(whereCondition);
        return this.findOneById(id, true);
    }

    async save(data: any): Promise<T> {
        return this.repository.save(data);
    }

}