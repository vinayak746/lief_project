"use client";

import { gql, useQuery } from "@apollo/client";
import { redirect } from "next/navigation";
import Loading from "@/components/loading";
import { Button } from "antd";

const ME_QUERY = gql`
  query Me {
    me {
      id
      email
      name
      createdAt
      lastLogin
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(ME_QUERY, {
    fetchPolicy: "cache-first",
  });

  if (loading) {
    return (
      <main className="p-8 flex items-center justify-center min-h-screen">
        <Loading />
      </main>
    );
  }

  if (error || !data?.me) {
    redirect("/auth/login");
  }

  const user = data.me;

  return (
    <main className="p-8 max-w-4xl mx-auto min-h-screen flex flex-col justify-between w-full">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4 mb-6">
          {user.picture && (
            <img
              src={user.picture}
              alt={user.name || "User"}
              className="w-16 h-16 rounded-full"
            />
          )}
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Your Information</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">User ID</p>
                <p className="font-medium">{user.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="font-medium">
                  {new Date(user.createdAt).toDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Login</p>
                <p className="font-medium">
                  {new Date(user.lastLogin).toDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <a href="/auth/logout">
          <Button danger>Logout</Button>
        </a>
      </div>
    </main>
  );
}
