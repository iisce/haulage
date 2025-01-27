import { axiosWithAuth } from '@/lib/axios.config';
import { User } from "@prisma/client";
import { AxiosError } from "axios";

export const revalidate = 0;

export const getSuperAdmins = async () => {
     try {
          const superAdminsRequest = await axiosWithAuth.get("/superadmin");

          if (superAdminsRequest.data) {
               const superAdmins: User[] = superAdminsRequest.data;

               return superAdmins;
          }

          return [];
     } catch (error) {
          if (error instanceof AxiosError) {
               console.log(error.message);
               return [];
          }
          console.log(error);
          return [];
     }
};

export const getSuperadminById = async (options: { id: string }) => {
     const { id } = options;
     try {
          const superAdminRequest = await axiosWithAuth.get(
               `/superAdmins/${id}`,
          );

          if (superAdminRequest.data) {
               const superAdmins: User = superAdminRequest.data;

               return superAdmins;
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
