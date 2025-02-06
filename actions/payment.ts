"use server";

import { auth } from "@/auth";
import { BASE_URL } from "@/constants";
import { PaymentOrder } from "@prisma/client";

export async function regeneratePaymentReference(transactionReference: string) {
     // await checkSuperAdminAuth();
     const session = await auth();
     const token = session?.user.access_token;
     const headers: Record<string, string> = {
          "Content-Type": "application/json",
     };

     if (token) {
          headers["Authorization"] = `Bearer ${token}`;
     }
     const request = await fetch(
          `${BASE_URL}/api/payment/regenerate-payment-order`,
          {
               method: "POST",
               headers,
               body: JSON.stringify({ transactionReference }),
          },
     );
     const response = await request.json();
     console.log({ response });

     if (!request.ok) {
          return {
               success: false,
               error: response.message ?? "Failed to regenerate payment order",
          };
     }
     const paymentOrder: PaymentOrder = response.data;
     console.log({ paymentOrder });
     return {
          success: true,
          data: paymentOrder,
     };
}
