// import { ApolloServer, } from "apollo-server-micro";
import { BaseContext, ApolloServer } from "@apollo/server";
import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolver";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { auth0 } from "@/lib/auth0";
import { prisma } from "@/lib/prisma";

const apolloServer: ApolloServer<BaseContext> = new ApolloServer({
  typeDefs,
  resolvers,
});

export const gqlHandler = startServerAndCreateNextHandler(apolloServer, {
  context: async () => {
    const session = await auth0.getSession();

    if (!session?.user) {
      return { prisma, user: null };
    }

    const { name, email, picture } = session.user;

    if (!(name && email && picture))
      return {
        prisma,
        user: null,
      };

    const newUser = prisma.user.upsert({
      where: { email },
      update: { email, name, picture },
      create: {
        name,
        email,
        picture,
      },
    });
    return {
      prisma,
      user: newUser,
    };
  },
});
