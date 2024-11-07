import axios from "axios";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { URLS } from "./constants";
import { LoginSchema } from "./schemas";

export default {
     providers: [
          Credentials({
               async authorize(credentials) {
                    const validatedFields = LoginSchema.safeParse(credentials);

                    if (validatedFields.success) {
                         const { email, password } = validatedFields.data;
                         // TODO: make API request to get user

                         try {
                              const loginRequest = await axios.post(
                                   `https://haulage-api-latest.onrender.com${URLS.auth.login}`,
                                   {
                                        email,
                                        password,
                                   },
                              );
                              if (!loginRequest.data.success) {
                                   return null;
                              }
                              const user = loginRequest.data.data;
                              if (!user) return null;
                              return user;
                         } catch (error) {
                              console.log({ error });
                              return null;
                         }
                    }

                    return null;
               },
          }),
     ],
} satisfies NextAuthConfig;
