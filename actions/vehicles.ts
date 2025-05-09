"use server";

import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import { createVehicleFormSchema } from "@/schemas";
import type { Vehicle } from "@prisma/client";
import axios, { AxiosError } from "axios";
import type * as z from "zod";

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
          vendorId,
          make,
          modelName,
          isDetachable,
          firstName,
          lastName,
          customerMobile,
          number_of_tyres,
          plateNumber,
     } = validatedFields.data;

     const payload: Partial<any> = {
          vendorId,
          make,
          modelName,
          isDetachable,
          firstName,
          lastName,
          customerMobile,
          number_of_tyres: Number(number_of_tyres),
          plateNumber,
     };

     try {
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
               console.log(error.response?.data.details);
               return {
                    error:
                         error.response?.data.details[0] ??
                         "Something went wrong",
               };
          }
          return { error: "Something went wrong" };
     }
};

export const updateVehicle = async (
     id: string,
     values: z.infer<typeof createVehicleFormSchema>,
) => {
     const session = await auth();
     const config = {
          headers: {
               Authorization: `Bearer ${session?.user.access_token}`,
          },
     };
     const endpoint = URLS.vehicles.update.replace("{id}", id);
     const apiUrl = new URL(`${BASE_URL}${endpoint}`);
     const validatedFields = createVehicleFormSchema.safeParse(values);

     if (!validatedFields.success) {
          return { error: "Invalid Fields" };
     }

     const {
          vendorId,
          make,
          modelName,
          isDetachable,
          firstName,
          lastName,
          customerMobile,
          number_of_tyres,
     } = validatedFields.data;

     const payload: Partial<Vehicle> = {
          vendorId,
          make,
          modelName,
          isDetachable,
          customerName: `${firstName} ${lastName}`,
          customerMobile,
          number_of_tyres: Number(number_of_tyres),
     };

     try {
          const updateVehicleRequest = await axios.patch(
               apiUrl.toString(),
               payload,
               config,
          );

          console.log(updateVehicleRequest.data.data);
          if (updateVehicleRequest.data.success) {
               return {
                    success: updateVehicleRequest.data.message,
                    data: updateVehicleRequest.data.data,
               };
          } else {
               return { error: updateVehicleRequest.statusText };
          }
     } catch (error: any) {
          if (error instanceof AxiosError) {
               const actualError = error.response?.data.message;
               console.log(actualError);
               return {
                    error: actualError ?? "Something went wrong",
               };
          }
          return { error: "Something went wrong" };
     }
};

export const deleteVehicle = async (id: string) => {
     const session = await auth();
     const config = {
          headers: {
               Authorization: `Bearer ${session?.user.access_token}`,
          },
     };
     const apiUrl = `${BASE_URL}${URLS.vehicles.delete}/${id}`;

     try {
          const deleteVehicleRequest = await axios.delete(apiUrl, config);
          if (deleteVehicleRequest.data.success) {
               return {
                    success: deleteVehicleRequest.statusText,
                    data: deleteVehicleRequest.data.data,
               };
          } else {
               return { error: deleteVehicleRequest.statusText };
          }
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log(error.response?.data.error);
               return {
                    error: error.response?.data.error ?? "Something went wrong",
               };
          }
          return { error: "Something went wrong" };
     }
};
