"use server";

import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import { AgentRegisterSchema } from "@/schemas";
import axios, { AxiosError } from "axios";
import * as z from "zod";

export const createAgent = async (
     values: z.infer<typeof AgentRegisterSchema>,
) => {
     const session = await auth();
     const config = {
          headers: {
               Authorization: `Bearer ${session?.user.access_token}`,
          },
     };
     const apiUrl = `${BASE_URL}${URLS.user.agents.create}`;
     const validatedFields = AgentRegisterSchema.safeParse(values);

     if (!validatedFields.success) {
          return { error: "Invalid Fields" };
     }

     const payload = validatedFields.data;
     try {
          const createAgentRequest = await axios.post(apiUrl, payload, config);
          if (createAgentRequest.data.success) {
               return {
                    success: createAgentRequest.statusText,
                    data: createAgentRequest.data.data,
               };
          } else {
               return { error: createAgentRequest.statusText };
          }
     } catch (error) {
          if (error instanceof AxiosError) {
               console.log(error.message);
               return { error: error.message };
          }
          return { error: `Something went wrong` };
     }
};
