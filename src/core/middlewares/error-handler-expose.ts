import express, {NextFunction, Request, Response} from "express";
import {ErrorHandler} from "../exceptions/error-handler";

export class ErrorHandlerExpose {


    index(app:  express.Application) {
        app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
            const errorHandler = new ErrorHandler();
            errorHandler.handleError(err, res);
        });

        return app;
    }


}