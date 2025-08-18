import { auth0 } from "@/lib/auth0";
import { prisma } from "@/lib/prisma";

export const GET = async (req: Request) => {
  console.log("login");
  const session = await auth0.getSession();
  const user = session?.user;
  console.log(new Date().toLocaleTimeString());
  if (user?.email) {
    const newUser = await prisma.user.upsert({
      where: { email: user.email },
      update: { lastLogin: new Date() },
      create: {
        email: user.email,
        name: user.name ?? "",
        lastLogin: new Date(Date.now()),
        picture: user.picture ?? "",
      },
    });
    console.log({ user });
  }
  return new Response(null, { status: 204 });
};
