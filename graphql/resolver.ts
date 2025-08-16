import { prisma } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";

export const resolvers = {
  Query: {
    getUsers: async () => {
      return prisma.user.findMany();
    },
    createUser: async (
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
