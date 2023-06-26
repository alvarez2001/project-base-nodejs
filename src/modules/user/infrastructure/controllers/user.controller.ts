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
import { inject } from "inversify";
import userTypes from "../constant/user.types";
import { WriteUser } from "../../../../models/User/Write/WriteUser";
import { UserServiceInterface } from "../../domain/services/write/user.service.interface";
import { ResponseInterface } from "../../../../core/interfaces/response.interface";
import { ValidateRequestMiddleware } from "../../../../core/middlewares/validate-request.middleware";
import { CreateUserDto } from "../../application/dtos/create-user.dto";
import { UpdateUserDto } from "../../application/dtos/update-user.dto";
import { ReadUserServiceInterface } from "../../domain/services/read/read.user.service.interface";
import { ReadUser } from "../../../../models/User/Read/ReadUser";
import { ObjectId } from "typeorm";

@controller("/users")
export class UserController implements interfaces.Controller {

  constructor(
    @inject(userTypes.WriteUserService) private writeUserService: UserServiceInterface,
    @inject(userTypes.ReadUserRepository) private readUserService: ReadUserServiceInterface
  ) {
  }


  @httpGet("/")
  async index(): Promise<ResponseInterface<ReadUser[]>> {
    return await this.readUserService.find();
  }


  @httpGet("/:id")
  async findById(@requestParam("id") id: ObjectId): Promise<ResponseInterface<ReadUser>> {
    return await this.readUserService.findById(id);
  }

  @httpPost("/", ValidateRequestMiddleware.with(CreateUserDto))
  async save(@request() req: express.Request): Promise<ResponseInterface<WriteUser>> {
    return await this.writeUserService.save(req.body);
  }

  @httpPut("/:id", ValidateRequestMiddleware.with(UpdateUserDto))
  async update(@request() req: express.Request): Promise<ResponseInterface<WriteUser>> {
    return await this.writeUserService.update(parseInt(req.params.id), req.body);
  }

  @httpDelete("/:id")
  async delete(@requestParam("id") id: string): Promise<ResponseInterface<WriteUser>> {
    return await this.writeUserService.delete(parseInt(id));
  }

}