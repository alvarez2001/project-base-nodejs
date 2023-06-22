import {IsEmail, IsInt, IsNotEmpty, IsString} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    names: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsString()
    @IsNotEmpty()
    identification_type: string;

    @IsString()
    @IsNotEmpty()
    identification: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsInt()
    @IsNotEmpty()
    type: number;

    @IsInt()
    @IsNotEmpty()
    status: number;
}