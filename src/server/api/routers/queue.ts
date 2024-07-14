import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const queueRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ctx}) => {
        return ctx.db.queue.findMany();
    })
});