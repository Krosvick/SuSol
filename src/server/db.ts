import { PrismaClient } from "@prisma/client";
import { createSoftDeleteExtension } from "prisma-extension-soft-delete";

import { env } from "~/env";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const extendedDB = db.$extends(
  createSoftDeleteExtension({
    models:{
      Clients: true,
      Addresses: true,
    },
    defaultConfig:{
      field: "deletedAt",
      createValue: (deleted: boolean) => {
        if (deleted) return new Date();
        return null;
      }
    }
  })
) as PrismaClient;

if (env.NODE_ENV !== "production") globalForPrisma.prisma = extendedDB;
