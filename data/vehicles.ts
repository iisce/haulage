import { auth } from "@/auth";
import { BASE_URL, ITEMS_PER_PAGE, URLS } from "@/constants";
import { db } from "@/lib/db";
import { Vehicle } from "@prisma/client";
import axios, { AxiosError } from "axios";

export const revalidate = 0;

export const getVehicles = async (offset: number) => {
     const session = await auth();
     try {
          const vehiclesRequest = await axios.get(
               `${BASE_URL}${URLS.vehicles.all}?offset=${offset}&limit=${ITEMS_PER_PAGE}`,
               {
                    headers: {
                         Authorization: `Bearer ${session?.user.access_token}`,
                    },
               },
          );
          const vehicles: Vehicle[] = vehiclesRequest?.data?.data ?? [];
          const count: number = vehiclesRequest.data.count ?? 0;
          const newLimit: number = vehiclesRequest.data.meta.limit ?? 10;
          const newOffset: number = vehiclesRequest.data.meta.offset ?? 0;
          return { vehicles, count, offset: newOffset, limit: newLimit };
     } catch (error: any) {
          if (error instanceof AxiosError) {
               // console.log({ error: error?.response?.data.message });
               return { vehicles: [], count: 0, offset: 0, limit: 10 };
          }
          return { vehicles: [], count: 0, offset: 0, limit: 10 };
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
export const getVehicleFinancialStatus = async (vehicleId: string) => {
     // const session = await auth();
     try {
          const financialStatus = await axios.get(
               `${BASE_URL}/api/transactions/vehicle/${vehicleId}/amount-owed`,
               // {
               //      headers: {
               //           Authorization: `Bearer ${session?.user.access_token}`,
               //      },
               // },
          );
          const status = financialStatus.data.data;
          return status;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log({ error: error.response?.data.details[0] });
               return [];
          }
          return [];
     }
};