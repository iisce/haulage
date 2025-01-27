import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import { User } from "@prisma/client";
import axios, { AxiosError } from "axios";
export const revalidate = 0;

export const getCurrentUser = async () => {
     const session = await auth();
     if (!session) return null;
     try {
          const url = `${BASE_URL}${URLS.user.self}/${session?.user.id}`;
          const currentUserRequest = await axios.get(url, {
               headers: {
                    Authorization: `Bearer ${session?.user.access_token}`,
               },
          });
          const user: User = currentUserRequest.data.data;
          return user;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               const details = error.response?.data;
               console.log({ error: details });
               return null;
          }
          return null;
     }
};
