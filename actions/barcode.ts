"use server";

import { auth } from "@/auth";
import { BASE_URL } from "@/constants";
import { db } from "@/lib/db";
import { z } from "zod";

// Define the schema for the request body
const attachBarcodeSchema = z.object({
     code: z.string(),
     vehicleId: z.string(),
});

type AttachBarcodeInput = z.infer<typeof attachBarcodeSchema>;

export async function attachBarcodeToVehicle(input: AttachBarcodeInput) {
     const session = await auth();
     if (!session) {
          return {
               success: false,
               message: "Not authenticated",
          };
     }
     const access_token = session?.user.access_token;
     try {
          // Validate the input
          const validatedInput = attachBarcodeSchema.parse(input);

          // Make the API request
          const response = await fetch(
               `${BASE_URL}/api/barcode/attach-vehicle`,
               {
                    method: "PATCH",
                    headers: {
                         "Content-Type": "application/json",
                         Authorization: `Bearer ${access_token}`,
                    },
                    body: JSON.stringify(validatedInput),
               },
          );

          if (response.ok) {
               return {
                    success: true,
                    message: "Barcode attached to vehicle successfully",
               };
          } else if (response.status === 400) {
               const errorData = await response.json();
               return {
                    success: false,
                    message: "Bad Request",
                    error: errorData,
               };
          } else {
               throw new Error(
                    `Unexpected response status: ${response.status}`,
               );
          }
     } catch (error) {
          console.error("Error attaching barcode to vehicle:", error);
          return {
               success: false,
               message: "An error occurred while attaching the barcode to the vehicle",
          };
     }
}

export const getVehicleByBarcode = async (code: string) => {
     if (!code) {
          return {
               success: false,
               message: "Invalid barcode",
          };
     }
     const session = await auth();
     if (!session) {
          return {
               success: false,
               message: "Not authenticated",
          };
     }
     //  const access_token = session?.user.access_token;
     try {
          const barcode = await db.barCodes.findUnique({
               where: {
                    code,
               },
          });
          if (!barcode) {
               return {
                    success: false,
                    message: "Unoriginal barcode",
               };
          }
          if (!barcode.vehicleId) {
               return {
                    success: false,
                    message: "Barcode not attached to a vehicle",
               };
          }
          const vehicle = await db.vehicle.findUnique({
               where: {
                    id: barcode.vehicleId,
               },
          });
          if (!vehicle) {
               return {
                    success: false,
                    message: "Vehicle not found",
               };
          }
          return {
               success: true,
               data: vehicle,
          };
     } catch (error) {
          console.error("Error getting vehicle by barcode:", error);
          return {
               success: false,
               message: "An error occurred while getting the vehicle by barcode",
          };
     }
};

export const getBarcodeByVehicle = async (vehicleId: string) => {
     if (!vehicleId) {
          return {
               success: false,
               message: "Invalid vehicle",
          };
     }
     const session = await auth();
     if (!session) {
          return {
               success: false,
               message: "Not authenticated",
          };
     }
     //  const access_token = session?.user.access_token;
     try {
          const barcode = await db.barCodes.findFirst({
               where: {
                    vehicleId,
               },
          });
          if (!barcode) {
               return {
                    success: false,
                    message: "Barcode not found",
               };
          }
          return {
               success: true,
               data: barcode,
          };
     } catch (error) {
          console.error("Error getting barcode by vehicle:", error);
          return {
               success: false,
               message: "An error occurred while getting the barcode by vehicle",
          };
     }
};
