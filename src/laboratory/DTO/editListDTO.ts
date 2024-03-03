import { IsArray } from 'class-validator';

export class EditListDTO {
  @IsArray()
  laboratories: Laboratory[];
}

export class Laboratory {
  id: number;
  constructedYear: number;
  constructedMounth: number;
  constructedDay: number;
  city_id: number;
  name: string;
}
