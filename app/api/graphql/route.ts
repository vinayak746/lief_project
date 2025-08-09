import { ApolloServer } from "@apollo/server";
import { typeDefs } from "../../../graphql/schema";
import { resolvers } from "../../../graphql/resolver";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export const GET = startServerAndCreateNextHandler(apolloServer);
export const POST = startServerAndCreateNextHandler(apolloServer);
