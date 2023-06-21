import {Column, Entity} from "typeorm";
import {Write} from "../../../core/models/Write";

@Entity({name: 'users'})
export class WriteUser extends Write {

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

    @Column({type: "int"})
    type: number;

    @Column({type: "int"})
    status: number;
}