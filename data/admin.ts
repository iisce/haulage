import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import { axiosWithAuth } from "@/lib/axios.config";
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
          const admins: IAdmin[] = adminsRequest.data.data;
          console.log({ admins });
          return admins;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log({ error });
               return [];
          }
          return [];
     }
};

export const getAdminById = async (options: { id: string }) => {
     const { id } = options;
     try {
          const adminRequest = await axiosWithAuth.get(`/admins/${id}`);

          if (adminRequest.data) {
               const admins: IAdmin = adminRequest.data;

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
