import express from "express";
import {injectable} from "inversify";
import {validate, ValidationError} from "class-validator";
import {plainToClass} from "class-transformer";
import {DtoValidationErrorException} from "../exceptions/dto-validation-error.exception";
import {ErrorHandler} from "../exceptions/error-handler";

@injectable()
export class ValidateRequestMiddleware {
    public dtoClass: any = '';

    constructor(dto: any) {
        this.dtoClass = dto;
    }


    async handler(req: express.Request, res: express.Response, next: express.NextFunction) {
        const dataToClass = plainToClass(this.dtoClass, req.body);
        let errors: ValidationError[] = await validate(dataToClass, {
            whitelist: true,
            forbidNonWhitelisted: true,
        });
        if (errors.length > 0) {
            errors = errors.map((validation: ValidationError) => {
                return {
                    property: validation.property,
                    value: validation.value,
                    constraints: validation.constraints,
                }
            });
            const err = new DtoValidationErrorException(errors);

            const errorHandler = new ErrorHandler();
            return errorHandler.handleError(err, res);
        }

        next();
    }

    static with(dto: any) {
        const instance = new ValidateRequestMiddleware(dto);
        return instance.handler.bind(instance);
    }
}
