import {
  Column,
  Entity
} from "typeorm";
import { Read } from "../../../core/models/Read";

@Entity({ name: "users" })
export class ReadUser extends Read {

  @Column()
  names: string;

  @Column()
  last_name: string;

  @Column()
  identification_type: string;

  @Column()
  identification: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ type: "int" })
  type: number;

  @Column({ type: "int" })
  status: number;
}