import {HttpCode} from "../enums/http-code.enum";
import {AppErrorException} from "./app-error.exception";

export class ModelNotFoundException extends AppErrorException {

    constructor(description: string) {
        super({
            httpCode: HttpCode.NOT_FOUND,
            description: description
        });
    }


}