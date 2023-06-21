import {
    AfterInsert, AfterSoftRemove,
    AfterUpdate,
    BaseEntity,
    CreateDateColumn, DeleteDateColumn, Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity({name: 'base'})
export class Write extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at?: Date;

    @AfterInsert()
    afterInsertModel() {
        const childInstance = Object.getPrototypeOf(this);
        console.log(`Insert model: ${childInstance.constructor.name}`)
    }

    @AfterUpdate()
    afterUpdateModel() {
        const childInstance = Object.getPrototypeOf(this);
        console.log(`Update model: ${childInstance.constructor.name}`)
    }

    @AfterSoftRemove()
    afterSoftDelete() {
        const childInstance = Object.getPrototypeOf(this);
        console.log(`Soft Delete model: ${childInstance.constructor.name}`)
    }
}