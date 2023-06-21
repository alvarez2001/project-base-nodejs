import {
    controller,
    httpDelete,
    httpGet,
    httpPost,
    httpPut,
    interfaces,
    request,
    requestParam
} from "inversify-express-utils";
import express from "express";
import {inject} from "inversify";
import userTypes from "../constant/user.types";
import {WriteUser} from "../../../../models/User/Write/WriteUser";
import {UserServiceInterface} from "../../domain/services/user.service.interface";
import {ResponseInterface} from "../../../../core/interfaces/response.interface";
import {ValidateRequestMiddleware} from "../../../../core/middlewares/validate-request.middleware";
import {CreateUserDto} from "../../domain/dto/create-user.dto";
import {UpdateUserDto} from "../../domain/dto/update-user.dto";

@controller('/users')
export class UserController implements interfaces.Controller {

    constructor(@inject(userTypes.UserService) private userService: UserServiceInterface) {
    }


    @httpGet('/')
    async index(): Promise<ResponseInterface<WriteUser[]>> {
        return await this.userService.find();
    }


    @httpGet('/:id')
    async findById(@requestParam('id') id: string): Promise<ResponseInterface<WriteUser>> {
        return await this.userService.findById(parseInt(id));
    }

    @httpPost('/', ValidateRequestMiddleware.with(CreateUserDto))
    async save(@request() req: express.Request): Promise<ResponseInterface<WriteUser>> {
        return await this.userService.save(req.body);
    }

    @httpPut('/:id', ValidateRequestMiddleware.with(UpdateUserDto))
    async update(@request() req: express.Request): Promise<ResponseInterface<WriteUser>> {
        return await this.userService.update(parseInt(req.params.id), req.body);
    }

    @httpDelete('/:id')
    async delete(@requestParam('id') id: string): Promise<ResponseInterface<WriteUser>> {
        return await this.userService.delete(parseInt(id));
    }

}