import {HttpCode} from "../enums/http-code.enum";

export interface AppErrorArgInterface {
    name?: string;
    httpCode: HttpCode;
    description: string;
    isOperational?: boolean;
    errors?: any,
}