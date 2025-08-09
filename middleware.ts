import { NextRequest, NextResponse } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const session = await auth0.getSession(request);
  // console.log({ session });

  // if (!session) {
  //   return NextResponse.redirect(new URL("/auth/login", request.url));
  // }

  return await auth0.middleware(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
