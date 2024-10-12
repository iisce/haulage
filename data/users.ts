import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import axios, { AxiosError } from "axios";
export const revalidate = 0;

export const getAllUsers = async () => {
     try {
          const usersRequest = await fetch("http://localhost:5766/users");

          const users: IUser[] = await usersRequest.json();

          if (users) {
               return users;
          }

          return [];
     } catch (error: any) {
          console.log({ error });
          return [];
     }
};

export const getAllUsersByRole = async (options: { role: IRole }) => {
     const { role } = options;
     try {
          const usersRequestAxios = await axios.get(
               "http://localhost:5766/users",
          );

          if (usersRequestAxios.data) {
               const users: IUser[] = usersRequestAxios.data;

               const admins = users.filter((admin) => admin.role === role);
               if (admins) {
                    return admins;
               }
          }
          return [];
     } catch (error: any) {
          console.log({ error });
          return [];
     }
};

export const getUserById = async (options: { id: string }) => {
     const { id } = options;
     try {
          const userRequest = await fetch(`http://localhost:5766/users/${id}`);

          const user: IUser = await userRequest.json();

          if (user) {
               return user;
          }
          return null;
     } catch (error: any) {
          console.log({ error });
          return null;
     }
};

export const getCurrentUser = async () => {
     const session = await auth();
     console.log({ session });
     try {
          const currentUserRequest = await axios.get(
               `${BASE_URL}${URLS.user.self}`,
               {
                    headers: {
                         Authorization: `Bearer ${session?.user.access_token}`,
                    },
               },
          );
          const user: IUser = currentUserRequest.data.data;
          return user;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log({ error: error.message });
               return null;
          }
          return null;
     }
};
