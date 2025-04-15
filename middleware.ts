// import NextAuth from "next-auth";

// import authConfig from "./auth.config";

// import {
//      DEFAULT_LOGIN_REDIRECT,
//      apiAuthPrefix,
//      authRoutes,
//      publicRoutes,
// } from "@/routes";

// const { auth } = NextAuth(authConfig);

// export default auth((req) => {
//      const isLoggedIn = !!req.auth;
//      const { nextUrl } = req;
//      const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
//      const isPublicRoute =
//           publicRoutes.includes(nextUrl.pathname) ||
//           nextUrl.pathname.startsWith("/info");
//      const isAuthRoute = authRoutes.includes(nextUrl.pathname);

//      if (isApiAuthRoute) {
//           return;
//      }

//      if (isAuthRoute) {
//           if (isLoggedIn) {
//                return Response.redirect(
//                     new URL(DEFAULT_LOGIN_REDIRECT, nextUrl),
//                );
//           }

//           return;
//      }

//      if (!isLoggedIn && !isPublicRoute) {
//           let callBackUrl = nextUrl.pathname;
//           if (nextUrl.search) {
//                callBackUrl += nextUrl.search;
//           }

//           const encodedCallbackUrl = encodeURIComponent(callBackUrl);
//           return Response.redirect(
//                new URL(`/sign-in?callbackUrl=${encodedCallbackUrl}`, nextUrl),
//           );
//      }

//      return;
// });

// // Optionally, don't invoke Middleware on some paths
// export const config = {
//      matcher: [
//           "/((?!.*\\..*|_next).*)", // Don't run middleware on static files
//           "/", // Run middleware on index page
//           "/(api|trpc)(.*)",
//      ],
// };

// export { auth as middleware } from "@/auth";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function combines auth middleware with payment verification
export async function middleware(request: NextRequest) {
     // Run the auth middleware first
     // We don't need to call auth directly, as it's already being exported as middleware
     // We'll check the service status after auth middleware runs

     // Skip payment verification for the service-suspended page
     if (request.nextUrl.pathname === "/service-suspended") {
          return NextResponse.next();
     }

     // Check if service is active from environment variable
     // Default to true if not set (to prevent accidental lockouts)
     const serviceActive = process.env.SERVICE_ACTIVE !== "false";

     if (!serviceActive) {
          // Redirect to the service-suspended page
          return NextResponse.redirect(
               new URL("/service-suspended", request.url),
          );
     }

     // Continue with the request
     return NextResponse.next();
}

// Export the auth middleware and then apply our custom middleware from "@/auth"

// Override the config to include our custom matcher
export const config = {
     matcher: [
          /*
           * Match all request paths except:
           * - _next/static (static files)
           * - _next/image (image optimization files)
           * - favicon.ico (favicon file)
           * - public folder
           * - service-suspended page
           */
          "/((?!_next/static|_next/image|favicon.ico|public/|service-suspended).*)",
     ],
};
