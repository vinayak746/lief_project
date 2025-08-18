import { gql } from "@apollo/client";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    name: String!
    picture: String!
    createdAt: DateTime!
    lastLogin: DateTime
  }

  scalar DateTime

  type Query {
    me: User
    getUsers: [User!]!
    createUser(name: String!, email: String!, picture: String!): User!
  }

  type Mutation {
    login: User!
  }
`;
