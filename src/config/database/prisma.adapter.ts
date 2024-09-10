import { PrismaClient } from "@prisma/client";

export class PrismaService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
}
