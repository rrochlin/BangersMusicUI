import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const pointerRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ctx}) => {
        return ctx.db.playlistPointer.findMany();
    })
});