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
     const session = await auth();
     const token = session?.user.access_token;
     const headers: Record<string, string> = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
     };

     const requestOptions: RequestInit = {
          method: "POST",
          headers,
     };

     if (num_of_tyres !== undefined) {
          requestOptions.body = JSON.stringify({ num_of_tyres });
     }

     try {
          const request = await fetch(
               `${BASE_URL}/api/payment/${vehicleId}/initiate`,
               requestOptions,
          );
          const response = await request.json();

          console.log({ response });

          if (response.data) {
               return {
                    success: true,
                    message: "Payment Order initialized successfully",
                    data: response.data,
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

export async function verifyTransactions(transactionReference: string) {
     try {
          const request = await fetch(
               `${BASE_URL}/api/payment/verify/${transactionReference}`,
          );
          const response = await request.json();

          console.log({ response });

          if (response.data) {
               return {
                    success: true,
                    message: "Payment verified successfully",
               };
          } else {
               throw new Error("Unexpected response from the server");
          }
     } catch (error) {
          console.error("Error:", error);
          throw new Error("Failed to initialize payment order");
     }
}
