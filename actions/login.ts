"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (
     values: z.infer<typeof LoginSchema>,
     callBackUrl?: string,
) => {
     const validatedFields = LoginSchema.safeParse(values);

     if (!validatedFields.success) {
          return { error: "Invalid Fields" };
     }

     const { email, password, code } = validatedFields.data;
     try {
          await signIn("credentials", {
               email,
               password,
               redirectTo: callBackUrl || DEFAULT_LOGIN_REDIRECT,
          });
     } catch (error) {
          if (error instanceof AuthError) {
               console.log({ error: error.type });
               switch (error.type) {
                    case "CredentialsSignin":
                         return { error: "Invalid credentials!!!" };
                    case "AccessDenied":
                         return { error: "You are not authorized!!!" };
                    case "CallbackRouteError":
                         return { error: "Email or Password is Wrong" };
                    default:
                         return { error: "Something went wrong!!!" };
               }
          }

          throw error;
     }
};
