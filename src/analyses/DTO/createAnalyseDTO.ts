import { TestType, TestUnits } from '@prisma/client';
import { IsEnum, IsNumber } from 'class-validator';

export class CreateAnalyseDTO {
  @IsEnum(TestType)
  type: TestType;

  @IsNumber()
  value: number;

  @IsEnum(TestUnits)
  unit: TestUnits;
}
