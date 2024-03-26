import { IsNumber } from 'class-validator';

export class DelLabDTO {
  @IsNumber()
  id: number;
}
