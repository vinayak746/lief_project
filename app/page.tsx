import { useEffect } from "react";

import { useUser } from "@auth0/nextjs-auth0"; // make sure you import from /client
import { Typography, Button } from "antd";
import Image from "next/image";
import Loading from "@/components/loading";
import { gql } from "graphql-tag";
import { useQuery } from "@apollo/client";
import apolloClient from "@/lib/apollo-client";
import { GetServerSidePropsContext } from "next";
import { auth0 } from "@/lib/auth0";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth0.getSession();
  const user = session?.user;

  // if (!user) {
  //   return "lol";
  // }

  // if (isLoading) {
  //   return (
  //     <main className="p-8 flex items-center justify-center min-h-screen">
  //       <Loading />
  //     </main>
  //   );
  // }

  if (!session) {
    return redirect("/auth/login");
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
      <div className="flex flex-col items-center gap-4">
        Welcome, {user?.name}!{" "}
        <a href="/auth/logout">
          <Button type="default" danger>
            Logout
          </Button>
        </a>
        <pre className="mt-8 bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </main>
  );
}
