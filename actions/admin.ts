"use server";

import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import { AdminRegisterSchema, updateAdminFormSchema } from "@/schemas";
import axios, { AxiosError } from "axios";
import * as z from "zod";

export const updateAdmin = async (
     values: z.infer<typeof updateAdminFormSchema>,
) => {
     const session = await auth();
     const config = {
          headers: {
               Authorization: `Bearer ${session?.user.access_token}`,
          },
     };
     const apiUrl = `${BASE_URL}${URLS.auth.register}`;
     const validatedFields = AdminRegisterSchema.safeParse(values);

     if (!validatedFields.success) {
          return { error: "Invalid Fields" };
     }

     const payload = validatedFields.data;
     try {
          const registerAdminRequest = await axios.post(
               apiUrl,
               payload,
               config,
          );
          if (registerAdminRequest.data.success) {
               return {
                    success: registerAdminRequest.statusText,
                    data: registerAdminRequest.data.data,
               };
          } else {
               return { error: registerAdminRequest.statusText };
          }
     } catch (error) {
          if (error instanceof AxiosError) {
               console.log(error.message);
               return { error: error.message };
          }
          return { error: `Something went wrong` };
     }
};
