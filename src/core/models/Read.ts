import {Base} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";
import {Types} from 'mongoose';

export class Read implements Base {

    @prop()
    _id: Types.ObjectId;

    @prop()
    id: string;

    @prop({default: Date.now()})
    created_at: Date

    @prop({default: Date.now()})
    updated_at: Date

    @prop({default: null})
    deleted_at?: Date
}