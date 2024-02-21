import { CreateUserDTO } from './CreateUserDTO';
import { IsString } from 'class-validator';

export class EdituserDTO extends CreateUserDTO {
  @IsString()
  id: string;
}
