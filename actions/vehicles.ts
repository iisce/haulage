"use server";

import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import { getVehicleById } from "@/data/vehicles";
import { createVehicleFormSchema } from "@/schemas";
import axios, { AxiosError } from "axios";
import * as z from "zod";

export const createVehicle = async (
     values: z.infer<typeof createVehicleFormSchema>,
) => {
     const session = await auth();
     const config = {
          headers: {
               Authorization: `Bearer ${session?.user.access_token}`,
          },
     };
     const apiUrl = `${BASE_URL}${URLS.vehicles.create}`;
     const validatedFields = createVehicleFormSchema.safeParse(values);

     if (!validatedFields.success) {
          return { error: "Invalid Fields" };
     }

     const {
          category,
          driversname,
          fee,
          name,
          nin,
          phonenumber,
          platenumber,
          detachable,
     } = validatedFields.data;
     const payload = {
          category,
          driversname,
          fee: Number(fee),
          name,
          nin,
          phonenumber,
          platenumber,
     };
     try {
          console.log({ payload });
          const createVehicleRequest = await axios.post(
               apiUrl,
               payload,
               config,
          );
          if (createVehicleRequest.data.success) {
               return {
                    success: createVehicleRequest.statusText,
                    data: createVehicleRequest.data.data,
               };
          } else {
               return { error: createVehicleRequest.statusText };
          }
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log(error.response?.data.error);
               return {
                    error: error.response?.data.error ?? "Something went wrong",
               };
          }
          return { error: `Something went wrong` };
     }
};

export const updateVehicle = async (
     values: z.infer<typeof createVehicleFormSchema>,
) => {
     const session = await auth();
     const config = {
          headers: {
               Authorization: `Bearer ${session?.user.access_token}`,
          },
     };
     const apiUrl = `${BASE_URL}${URLS.vehicles.create}`;
     const validatedFields = createVehicleFormSchema.safeParse(values);

     if (!validatedFields.success) {
          return { error: "Invalid Fields" };
     }

     const {
          category,
          driversname,
          fee,
          name,
          nin,
          phonenumber,
          platenumber,
          detachable,
     } = validatedFields.data;
     const payload = {
          category,
          driversname,
          fee: Number(fee),
          name,
          nin,
          phonenumber,
          platenumber,
     };
     try {
          console.log({ payload });
          const createVehicleRequest = await axios.post(
               apiUrl,
               payload,
               config,
          );
          if (createVehicleRequest.data.success) {
               return {
                    success: createVehicleRequest.statusText,
                    data: createVehicleRequest.data.data,
               };
          } else {
               return { error: createVehicleRequest.statusText };
          }
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log(error.response?.data.error);
               return {
                    error: error.response?.data.error ?? "Something went wrong",
               };
          }
          return { error: `Something went wrong` };
     }
};

export const deleteVehicle = async (id: string) => {
     const vehicle = await getVehicleById({ id });
     console.log(
          `Vehicle with of driver ${vehicle?.driversname} has been deleted`,
     );
     return true;
};
