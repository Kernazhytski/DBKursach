import { IsArray } from 'class-validator';

export class GetUserInfoDTO {
  @IsArray()
  id: string[];
}
