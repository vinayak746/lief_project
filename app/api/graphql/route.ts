import { ApolloServer } from "@apollo/server";
import { typeDefs } from "../../../graphql/schema";
import { resolvers } from "../../../graphql/resolver";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { gqlHandler } from "../graphql";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  return gqlHandler(req);
}

export async function GET(req: NextRequest) {
  return gqlHandler(req);
}
