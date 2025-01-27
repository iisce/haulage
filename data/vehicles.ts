import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import { db } from "@/lib/db";
import { Vehicle } from "@prisma/client";
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
          const vehicles: Vehicle[] = vehiclesRequest.data.data;
          return vehicles;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log({ error: error.response?.data.details[0] });
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
               `${BASE_URL}${URLS.vehicles.one}/${id}`,
               {
                    headers: {
                         Authorization: `Bearer ${session?.user.access_token}`,
                    },
               },
          );
          const vehicle: Vehicle = vehicleRequest.data.data;
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

export const getVehicleCount = async () => {
     const session = await auth();
     if (!session) return 0;
     try {
          const vehicleCount = await db.vehicle.count();
          return vehicleCount;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log(error.message);
               return 0;
          }
          return 0;
     }
};
