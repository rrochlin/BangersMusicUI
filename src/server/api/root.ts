import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { songRouter } from "./routers/song";
import { queueRouter } from "./routers/queue";
import { pointerRouter } from "./routers/pointer";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  song: songRouter,
  queue: queueRouter,
  pointer: pointerRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
