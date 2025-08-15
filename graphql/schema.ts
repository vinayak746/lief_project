import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    name: String!
    picture: String!
    createdAt: DateTime!
  }

  scalar DateTime

  type Query {
    getUsers: [User!]!
    createUser(name: String!, email: String!, picture: String!): User!
  }
`;
