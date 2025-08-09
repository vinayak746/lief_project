"use client";
import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0"; // make sure you import from /client
import { Typography, Button } from "antd";
import Image from "next/image";

const { Text } = Typography;

export default function Home() {
  const { user, isLoading } = useUser();

  // useEffect(() => {
  //   if (!isLoading && !user) {
  //     window.location.href = "/auth/login";
  //   }
  // }, [isLoading, user]);

  if (isLoading) {
    return (
      <main className="p-8 flex items-center justify-center min-h-screen">
        <Text>Loading...</Text>
      </main>
    );
  }

  // if (!user) {
  //   return "user not found";
  // }

  return (
    <main className="p-8 flex items-center justify-center min-h-screen">
      <Image
        className="dark:invert mb-8"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <div className="flex flex-col items-center gap-4">
        <Text>Welcome, {user?.name}!</Text>
        <a href="/auth/login">
          <Button type="default">
            <Text>Login</Text>
          </Button>
        </a>
        <a href="/auth/logout">
          <Button type="default" danger>
            <Text>Logout</Text>
          </Button>
        </a>
        <pre className="mt-8 bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </main>
  );
}
