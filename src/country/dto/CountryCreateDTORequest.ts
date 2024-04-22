import { IsString } from 'class-validator';

export class CountryCreateDTORequest {
  @IsString()
  name: string;
}
