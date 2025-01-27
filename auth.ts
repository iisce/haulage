import NextAuth from "next-auth";

import authConfig from "./auth.config";
import { jwtDecode } from "jwt-decode";

export const { auth, handlers, signIn, signOut, unstable_update } = NextAuth({
     pages: {
          signIn: "/sign-in",
          error: "/error",
     },
     callbacks: {
          async session({ session, token }) {
               session.user.access_token = token.access_token as string;
               session.user.role = token.role as string;
               session.user.id = token.id as string;
               session.expired = token.expired as boolean;
               return session;
          },
          async jwt({ token, user, session }) {
               if (user) {
                    token.access_token = user.access_token;
                    token.role = user.role;
                    token.id = user.id;
               }

               // Check token expiration
               if (token.access_token) {
                    const decodedToken: any = jwtDecode(
                         token.access_token as string,
                    );
                    token.role = decodedToken.role;
                    token.id = decodedToken.sub;
                    token.sub = decodedToken.sub;
                    const tokenExpiry = decodedToken.exp;
                    const currentTime = Math.floor(Date.now() / 1000);

                    if (tokenExpiry && tokenExpiry < currentTime) {
                         // Token has expired, mark the session as expired
                         return { ...token, expired: true };
                    }
               }
               return token;
          },
     },
     session: { strategy: "jwt", maxAge: 60 * 30 },
     ...authConfig,
});
