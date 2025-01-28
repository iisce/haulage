"use server";

import { auth } from "@/auth";
import { BASE_URL } from "@/constants";
import { Role } from "@prisma/client";
import axios from "axios";

const ROLES: Role[] = ["SUPER_ADMIN", "ADMIN", "AGENT"] as const;

async function hasPermission() {
     const session = await auth();
     if (ROLES.includes(session?.user?.role as Role)) {
          throw new Error(
               "Unauthorized: Only authorized users can perform this action",
          );
     }
}

export async function chargeLevy(vehicleId: string, num_of_tyres?: number) {
     //  await hasPermission();

     try {
          const response = await axios.post(
               `${BASE_URL}/api/payment/${vehicleId}/initiate`,
               {
                    num_of_tyres,
               },
          );

          if (response.status === 201) {
               return {
                    success: true,
                    message: "Payment Order initialized successfully",
                    data: response.data.data,
               };
          } else {
               throw new Error("Unexpected response from the server");
          }
     } catch (error) {
          if (axios.isAxiosError(error)) {
               console.error(
                    "Axios error:",
                    error.response?.data || error.message,
               );
               throw new Error(
                    error.response?.data?.message ||
                         "Failed to initialize payment order",
               );
          } else {
               console.error("Error:", error);
               throw new Error("Failed to initialize payment order");
          }
     }
}
