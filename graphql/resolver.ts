import { prisma } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";

export const resolvers = {
  Query: {
    me: async (_: unknown, __: unknown, context: any) => {
      // The user is already attached to the context by the Apollo Server
      if (!context.user) {
        throw new Error("Not authenticated");
      }
      return context.user;
    },
    getUsers: async () => {
      return prisma.user.findMany();
    },
  },
  Mutation: {
    login: async (
      _: unknown,
      args: { name: string; email: string; picture: string }
    ) => {
      return prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          picture: args.picture,
        },
      });
    },
  },
};
