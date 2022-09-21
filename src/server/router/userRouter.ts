import { createProtectedRouter } from "./context";

// Example router with queries that can only be hit if the user requesting is signed in
export const userRouter = createProtectedRouter().query("getCurrentUser", {
  resolve({ ctx }) {
    const user = ctx.prisma.user.findFirst({
      where: {
        id: ctx.session.user.id,
      },
      include: { lists: true },
    });
    return user;
  },
});
