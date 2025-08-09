import { PrismaClient } from "@prisma/client";
const prisma: PrismaClient = new PrismaClient();

export const resolvers = {
  Query: {
    users: async () => {
      return prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: async (_: any, args: { name: string; email: string }) => {
      return prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
        },
      });
    },
  },
};
