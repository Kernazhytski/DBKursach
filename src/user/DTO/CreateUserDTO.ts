import { Gender } from '@prisma/client';
import { IsEnum, IsISO8601, IsNumber, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  email: string;

  @IsISO8601()
  birthDay: Date;

  @IsString()
  phone: string;

  @IsNumber()
  labaratory: number;

  @IsString()
  password: string;
}
