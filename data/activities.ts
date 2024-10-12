import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import axios, { AxiosError } from "axios";

export const revalidate = 0;

export const getActivities = async () => {
     const session = await auth();
     try {
          const activitiesRequest = await axios.get(
               `${BASE_URL}${URLS.activities}`,
               {
                    headers: {
                         Authorization: `Bearer ${session?.user.access_token}`,
                    },
               },
          );
          const activities: IActivity[] = activitiesRequest.data.data;
          console.log({ activities });
          return activities;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log({ error });
               return [];
          }
          return [];
     }
};
