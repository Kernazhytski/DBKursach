import { IsNumber, IsString } from 'class-validator';

export class CityCreateRequestDTO {
  @IsString()
  name: string;

  @IsNumber()
  country_id: number;
}
