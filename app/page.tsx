"use client";
import Image from "next/image";
import { Button, Typography } from "antd";

import { useUser } from "@auth0/nextjs-auth0";

const { Text } = Typography;

export default function Home() {
  const { user, isLoading } = useUser();
  if (isLoading) {
    return (
      <main className="p-8 flex items-center justify-center min-h-screen">
        <Typography.Text>Loading...</Typography.Text>
      </main>
    );
  }

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
      {user ? (
        <div className="flex flex-col items-center gap-4">
          <Text>Welcome, {user?.name}!</Text>
          <a href="/auth/logout">
            <Button type="default" danger>
              <Text>Logout</Text>
            </Button>
          </a>
          {/* Display user JSON for debugging purposes */}
          <pre className="mt-8 bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <a href="/auth/login">
            <Button type="primary">
              <Text style={{ color: "white" }}>Login</Text>
            </Button>
          </a>
        </div>
      )}
      {/* <a href="/auth/login">
        <Button type="primary">Login</Button>
      </a>
      <a href="/auth/logout">
        <button>Logout</button>
      </a>
      <pre>{JSON.stringify(user, null, 2)}</pre> */}
    </main>
  );
}
