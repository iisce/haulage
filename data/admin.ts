import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import { db } from "@/lib/db";
import { User } from "@prisma/client";
import axios, { AxiosError } from "axios";

export const revalidate = 0;

export const getAdmins = async () => {
     const session = await auth();
     try {
          const adminsRequest = await axios.get(
               `${BASE_URL}${URLS.user.admins.all}`,
               {
                    headers: {
                         Authorization: `Bearer ${session?.user.access_token}`,
                    },
               },
          );
          const admins: User[] = adminsRequest.data.data.admins;
          const count = adminsRequest.data.data.count;
          const limit = adminsRequest.data.data.pagination.limit;
          const offset = adminsRequest.data.data.pagination.offset;

          return { admins, count, limit, offset };
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log({ error });
               return { admins: [], count: 0, limit: 10, offset: 0 };
          }
          return { admins: [], count: 0, limit: 10, offset: 0 };
     }
};

export const getAdminById = async (id: string) => {
     const session = await auth();
     const endpoint = URLS.user.admins.one.replace("{id}", id);
     const apiUrl = new URL(`${BASE_URL}${endpoint}`);
     try {
          const adminRequest = await axios.get(apiUrl.toString(), {
               headers: {
                    Authorization: `Bearer ${session?.user.access_token}`,
               },
          });
          if (adminRequest.data) {
               const admins: User = adminRequest.data.data;
               return admins;
          }

          return null;
     } catch (error) {
          if (error instanceof AxiosError) {
               console.log(error.message);
               return null;
          }
          console.log(error);
          return null;
     }
};

export const getAdminCount = async () => {
     const session = await auth();
     if (!session) return 0;
     try {
          const agentCount = await db.user.count({
               where: {
                    role: "ADMIN",
               },
          });
          return agentCount;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log(error.message);
               return 0;
          }
          return 0;
     }
};
