import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const { nextUrl } = req;

  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log("TOKEN: ", token);

  // console.log("PATHS: ", path);

  if (path === "/" || path === "/login" || path === "/register") {
    // console.log("PULIC PATH : ", publicPaths);
    // console.log("TOKEN      : ", Boolean(token));

    if (token) {
      // console.log("LOGGED IN BUT IN PUBLIC PATH");
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }
  }

  if (path === "/dashboard") {
    if (!token) {
      // console.log("NOT LOGGED IN BUT IN PROTECTED ROUTES!");
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
  }
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
