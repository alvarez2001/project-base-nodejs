import {HttpCode} from "../enums/http-code.enum";
import {AppErrorArgInterface} from "../interfaces/app.error.arg.interface";

export class AppErrorException extends Error {
    public readonly name: string;
    public readonly httpCode: HttpCode;
    public readonly isOperational: boolean = true;
    public readonly errors: any = null;

    constructor(args: AppErrorArgInterface) {
        super(args.description);

        Object.setPrototypeOf(this, new.target.prototype);

        this.name = args.name || 'Error';
        this.httpCode = args.httpCode;
        this.errors = args?.errors;

        if (args.isOperational !== undefined) {
            this.isOperational = args.isOperational;
        }

        Error.captureStackTrace(this);
    }


}