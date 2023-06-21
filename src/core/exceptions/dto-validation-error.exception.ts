import {ValidationError} from "class-validator";
import {AppErrorException} from "./app-error.exception";
import {HttpCode} from "../enums/http-code.enum";

export class DtoValidationErrorException extends AppErrorException {
    errors: ValidationError[];

    constructor(errors: ValidationError[]) {
        const message = 'Error de validación del DTO';
        super({description: message, httpCode: HttpCode.NOT_ACCEPTABLE, errors});
    }
}