import {IsEmail, IsInt, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    names: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    last_name: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    identification_type: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    identification: string;

    @IsEmail()
    @IsOptional()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    password: string;

    @IsInt()
    @IsOptional()
    @IsNotEmpty()
    type: number;

    @IsInt()
    @IsOptional()
    @IsNotEmpty()
    status: number;
}