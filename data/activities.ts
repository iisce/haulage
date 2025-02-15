import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import { Activities } from "@prisma/client";
import axios, { AxiosError } from "axios";

export const revalidate = 0;

export const getActivities = async () => {
     const session = await auth();
     try {
          const activitiesRequest = await axios.get(
               `${BASE_URL}${URLS.activities.all}`,
               {
                    headers: {
                         Authorization: `Bearer ${session?.user.access_token}`,
                    },
               },
          );
          const activities: Activities[] = activitiesRequest.data.data;
          return activities;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log({ error });
               return [];
          }
          return [];
     }
};

export const getActivitiesById = async (id: string) => {
     const session = await auth();
     const endpoint = URLS.activities.one.replace("{id}", id);
     const apiUrl = new URL(`${BASE_URL}${endpoint}`);
     try {
          const activitiesRequest = await axios.get(apiUrl.toString(), {
               headers: {
                    Authorization: `Bearer ${session?.user.access_token}`,
               },
          });
          const activities: Activities[] = activitiesRequest.data.data;
          return activities;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log({ error });
               return [];
          }
          return [];
     }
};
