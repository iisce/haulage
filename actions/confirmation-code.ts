"use server";

import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import axios, { AxiosError } from "axios";

export const generate = async (values: { emails: string }) => {
     const session = await auth();
     const config = {
          headers: {
               Authorization: `Bearer ${session?.user.access_token}`,
          },
     };
     const apiUrl = `${BASE_URL}${URLS.user.admins.generate}`;
     let successful: number = 0;
     let failed: number = 0;

     try {
          const emailArray = values.emails.split(",");
          console.log({ values, emailArray });
          await Promise.all(
               emailArray.map(async (a: string, k: number) => {
                    if (a.trim() === "") {
                         failed += 1;
                         console.log(`email number ${k + 1} is not valid`);
                    } else {
                         const generateCodeRequest = await axios.post(
                              apiUrl,
                              { email: a.trim() },
                              config,
                         );
                         if (generateCodeRequest.data) {
                              successful += 1;
                              console.log(a.trim(), generateCodeRequest.data);
                         } else {
                              failed += 1;
                         }
                    }
               }),
          );
          return {
               success: `code generated successfully for ${successful} admins out of ${emailArray.length}, ${failed} failed`,
          };
     } catch (error) {
          if (error instanceof AxiosError) {
               console.log(error.message);
               return { error: error.message };
          }
          return { error: `Something went wrong` };
     }
};
