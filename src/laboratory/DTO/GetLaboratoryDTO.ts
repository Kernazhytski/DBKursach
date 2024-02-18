import { IsString } from 'class-validator';

export class GetLaboratoryDTO {
  @IsString()
  id: string;
}
