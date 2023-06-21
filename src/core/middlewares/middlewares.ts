import {Application} from "express";
import {ErrorHandlerExpose} from "./error-handler-expose";

export class Middlewares {
    private app: Application

    constructor(app: Application) {
        this.app = app;

        this.setErrorHandleExpose();
    }

    setErrorHandleExpose() {
        const errorHandlerExpose = new ErrorHandlerExpose();
        this.setApp(errorHandlerExpose.index(this.app));
    }

    getApp() {
        return this.app;
    }

    setApp(app: Application) {
        this.app = app;
    }
}