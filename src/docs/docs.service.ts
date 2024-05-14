import { Injectable } from '@nestjs/common';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DocsService {
  constructor(private readonly prismaService: PrismaService) {}

  async generateWordDocument(): Promise<string> {
    const users = await this.prismaService.user.findMany({
      where: {
        role: {
          not: 'ADMIN',
        },
      },
      include: {
        Metrics: true,
      },
    });

    // Создаем новый документ
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: users.map(
            (user, index) =>
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${index}. ${user.name}\n`,
                    bold: true,
                  }),
                  new TextRun({
                    text: `Metrics: ${user.Metrics.map((metric) => `${metric.type} - ${metric.value}`)}`,
                    bold: false,
                  }),
                ],
              }),
          ),
        },
      ],
    });

    const b64string = await Packer.toBase64String(doc);

    return b64string;
  }

  async getUserDoc(id: string) {
    console.log(id);
    const user = await this.prismaService.user.findUnique({
      where: {
        id: id,
      },
      include: {
        Metrics: true,
        TestResults: true,
      },
    });

    // Создаем новый документ
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: `${user.name}\n`,
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Metrics: ${user.Metrics.map((metric) => `${metric.type} - ${metric.value}`)}\n`,
                  bold: false,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Analyses:\n ${user.TestResults.map((tests) => `${tests.type} - ${tests.value}\n`)}`,
                  bold: false,
                }),
              ],
            }),
          ],
        },
      ],
    });

    const b64string = await Packer.toBase64String(doc);

    return b64string;
  }
}
