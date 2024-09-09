import { Prisma } from "@prisma/client";
import { PrismaService } from "./prisma_adapter";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class AppContext {
  public todo: Prisma.TodoDelegate<DefaultArgs>;
  constructor(private readonly prismaService: PrismaService) {
    this.todo = prismaService.prisma.todo;
  }
}

export const appContext = new AppContext(new PrismaService());