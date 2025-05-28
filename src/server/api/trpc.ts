import { initTRPC, type inferAsyncReturnType } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

import { db } from "~/server/db";

export const createTRPCContext = async (opts: { headers: Headers }) => {
  return {
    db,
    ...opts,
  };
};

export type Context = inferAsyncReturnType<typeof createTRPCContext>;

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createTRPCRouter = t.router;
export const mergeRouters = t.mergeRouters;

// Todos los procedimientos son públicos ahora (sin autenticación)
export const publicProcedure = t.procedure;

// Mantenemos estos para compatibilidad, pero ahora son equivalentes a publicProcedure
export const protectedProcedure = t.procedure;
export const adminProcedure = t.procedure;