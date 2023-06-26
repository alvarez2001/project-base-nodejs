import {
  BaseEntity, Column,
  CreateDateColumn, DeleteDateColumn, Entity, ObjectId, ObjectIdColumn,
  UpdateDateColumn
} from "typeorm";

@Entity({ name: "base" })
export class Read extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

}