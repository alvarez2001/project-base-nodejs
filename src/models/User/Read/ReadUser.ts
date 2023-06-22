import {Read} from "../../../core/models/Read";
import {getModelForClass, modelOptions, prop} from "@typegoose/typegoose";

@modelOptions({schemaOptions: {collection: "users", timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}}})
class ReadUserClass extends Read{

    @prop()
    names: string;

    @prop()
    last_name: string;

    @prop()
    identification_type: string;

    @prop()
    identification: string;

    @prop()
    email: string;

    @prop()
    username: string;

    @prop()
    password: string;

    @prop({type: "int"})
    type: number;

    @prop({type: "int"})
    status: number;

}
export const ReadUser = getModelForClass(ReadUserClass);
