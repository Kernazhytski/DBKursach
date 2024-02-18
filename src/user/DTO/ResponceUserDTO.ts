import {Gender} from "@prisma/client";
import {IsEnum, IsISO8601, IsString} from "class-validator";

export class ResponceUserDTO{
    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsEnum(Gender)
    gender: Gender;

    @IsString()
    email: string;

    @IsISO8601()
    birthDay: Date;
}