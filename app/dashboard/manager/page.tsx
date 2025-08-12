"use client";
import { useQuery, gql } from "@apollo/client";
import client from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/lib/apollo-client";

const usersQ = gql`
  query GetUsers {
    getUsers {
      id
    }
  }
`;

export default function ManagerDashboard() {
  const { data, loading, error } = useQuery(usersQ, {
    client: apolloClient,
  });
  if (loading) {
    return "loading";
  }
  return <main>{JSON.stringify(data)}</main>;
}
