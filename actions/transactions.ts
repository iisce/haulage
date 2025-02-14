"use server";

import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import { Transaction } from "@prisma/client";
import { revalidatePath } from "next/cache";

async function checkSuperAdminAuth() {
     const session = await auth();
     if (session?.user?.role !== "SUPER_ADMIN") {
          throw new Error(
               "Unauthorized: Only SUPER_ADMIN can perform this action",
          );
     }
}

interface FetchTransactionsParams {
     offset?: string;
     limit?: string;
     type?: string;
     status?: string;
     vehicleId?: string;
}

export async function fetchTransactions({
     offset,
     limit,
     type,
     status,
     vehicleId,
}: FetchTransactionsParams = {}) {
     const apiUrl = new URL(`${BASE_URL}${URLS.transactions.all}`);

     if (offset) apiUrl.searchParams.append("offset", offset);
     if (limit) apiUrl.searchParams.append("limit", limit);
     if (type) apiUrl.searchParams.append("type", type);
     if (status) apiUrl.searchParams.append("status", status);
     if (vehicleId) apiUrl.searchParams.append("vehicleId", vehicleId);

     try {
          const response = await fetch(apiUrl.toString(), {
               method: "GET",
               headers: {
                    "Content-Type": "application/json",
                    // Add any necessary authentication headers here
               },
          });

          if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
          }

          const transactionData: Transaction[] = (await response.json()).data;

          // Revalidate the transactions page to reflect new data
          revalidatePath("/transactions");

          return { success: true, data: transactionData };
     } catch (error) {
          console.error("Error fetching transactions:", error);
          return { success: false, error: "Failed to fetch transactions" };
     }
}

export async function fetchVehicleTransactionsStatus(vehicleId: string) {
     const endpoint = URLS.transactions.status.replace(
          "{vehicleId}",
          vehicleId,
     );
     const apiUrl = new URL(`${BASE_URL}${endpoint}`);

     try {
          const response = await fetch(apiUrl.toString(), {
               method: "GET",
               headers: {
                    "Content-Type": "application/json",
                    // Add any necessary authentication headers here
               },
          });

          if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
          }

          const transactionData: {
               vehicleId: string;
               pendingAmount: number;
               successAmount: number;
               amountOwed: number;
          } = (await response.json()).data;

          // Revalidate the transactions page to reflect new data
          revalidatePath("/transactions");

          return { success: true, data: transactionData };
     } catch (error) {
          // console.error("Error fetching transactions:", error);
          return {
               success: false,
               data: {
                    vehicleId: vehicleId,
                    pendingAmount: 0,
                    successAmount: 0,
                    amountOwed: 0,
               },
          };
     }
}
