import { Injectable } from '@nestjs/common';
import { GetLaboratoryDTO } from './DTO/GetLaboratoryDTO';
import { Laboratory } from './DTO/editListDTO';
import { PrismaService } from '../prisma.service';

@Injectable()
export class LaboratoryService {
  constructor(private readonly prismaSerive: PrismaService) {}

  async getLaboratoryinfo(request: GetLaboratoryDTO) {
    const lab_info = await this.prismaSerive.labaratory.findUnique({
      where: { id: parseInt(request.id) },
      include: {
        city: {
          include: {
            country: true,
          },
        },
      },
    });

    return lab_info;
  }

  async getAllLaboratoryInfo() {
    return this.prismaSerive.labaratory.findMany();
  }

  async del(id: number) {
    await this.prismaSerive.labaratory.delete({
      where: { id },
    });
  }

  async editAll(laboratories: Laboratory[]) {
    // Использование Prisma для массового обновления данных
    await this.prismaSerive.$transaction(async (prisma) => {
      for (const lab of laboratories) {
        const { id, ...data } = lab;

        if (id) {
          // Обновление существующей записи
          await prisma.labaratory.update({
            where: { id },
            data,
          });
        } else {
          // Вставка новой записи
          console.log(data);
          await prisma.labaratory.create({
            data: {
              ...data,
              id: Math.floor(Math.random() * (99999 - 5 + 1) + 5),
            },
          });
        }
      }
    });
  }
}
