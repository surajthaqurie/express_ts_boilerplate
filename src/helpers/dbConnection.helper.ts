import { PrismaClient } from "@prisma/client";
import { env } from "src/configs";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: env.dbConfig.DATABASE_URL
    }
  }
});

export { prisma };
export const { users: Users } = prisma;
