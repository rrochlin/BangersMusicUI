import { z } from "zod";
import { pointerRouter } from "./pointer";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const queueRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ctx}) => {
        return ctx.db.queue.findMany();
    }),
    getQueue: publicProcedure.query(async ({ctx}) => {
      const pointer = await ctx.db.playlistPointer.findFirst()
      return ctx.db.queue.findMany({
        where: {
          id: {
            gte: pointer?.id
          }
        }
      })
    })
});