import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import axios, { AxiosError } from "axios";

export const revalidate = 0;

export const getVehicles = async () => {
     const session = await auth();
     try {
          const vehiclesRequest = await axios.get(
               `${BASE_URL}${URLS.vehicles.all}`,
               {
                    headers: {
                         Authorization: `Bearer ${session?.user.access_token}`,
                    },
               },
          );
          const vehicles: IVehicle[] = vehiclesRequest.data.data;
          console.log({ vehicles });
          return vehicles;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log({ error });
               return [];
          }
          return [];
     }
};
export const getVehicleById = async (options: { id: string }) => {
     const session = await auth();
     const { id } = options;
     try {
          const vehicleRequest = await axios.get(
               `${BASE_URL}${URLS.vehicles.all}/${id}`,
               {
                    headers: {
                         Authorization: `Bearer ${session?.user.access_token}`,
                    },
               },
          );
          const vehicle: IVehicle = vehicleRequest.data.data;
          console.log({ vehicle });
          return vehicle;
     } catch (error) {
          if (error instanceof AxiosError) {
               console.log(error.message);
               return null;
          }
          console.log(error);
          return null;
     }
};
