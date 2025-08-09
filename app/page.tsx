"use client";
import Image from "next/image";

import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, isLoading } = useUser();
  return (
    <main>
      <a href="/auth/login">
        <button>Login</button>
      </a>
      <a href="/auth/logout">
        <button>Logout</button>
      </a>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </main>
  );
}
