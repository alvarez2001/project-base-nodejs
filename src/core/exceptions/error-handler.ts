import {AppErrorException} from "./app-error.exception";
import {HttpCode} from "../enums/http-code.enum";
import {Response} from "express";

export class ErrorHandler {
    private isTrustedError(error: Error): boolean {
        if (error instanceof AppErrorException) {
            return error.isOperational;
        }


        return false;
    }

    public handleError(error: Error | AppErrorException, response?: Response): void {
        if (this.isTrustedError(error) && response) {
            this.handleTrustedError(error as AppErrorException, response);
        } else {
            this.handleCriticalError(error, response);
        }
    }

    private handleCriticalError(error: Error | AppErrorException, response?: Response): void {
        if (response) {
            response
                .status(HttpCode.INTERNAL_SERVER_ERROR)
                .json({message: error.message, code: HttpCode.INTERNAL_SERVER_ERROR});
        }

        // console.log('Application encountered a critical error. Exiting');
        // process.exit(1);
    }

    private handleTrustedError(error: AppErrorException, response: Response): void {
        response.status(error.httpCode).json({
            code: error.httpCode,
            message: error.message,
            errors: error.errors
        });
    }
}