"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/constants";

export default function RegeneratePaymentOrder({
     transactionReference,
}: {
     transactionReference: string;
}) {
     const router = useRouter();
     const [isLoading, setIsLoading] = useState(false);

     const handleRegenerate = async () => {
          setIsLoading(true);
          try {
               // TODO: Implement the API call to regenerate the payment order
               const response = await fetch(
                    `${BASE_URL}/api/payment/regenerate-payment-order`,
                    {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json",
                         },
                         body: JSON.stringify({ transactionReference }),
                    },
               );

               if (!response.ok) {
                    throw new Error("Failed to regenerate payment order");
               }
               toast.success("Successful", {
                    description: "Payment order regenerated successfully",
               });
               router.refresh();
          } catch (error) {
               console.error("Error regenerating payment order:", error);
               toast.error("Failed", {
                    description: "Error regenerating payment order",
               });
          } finally {
               setIsLoading(false);
          }
     };

     return (
          <Button onClick={handleRegenerate} disabled={isLoading}>
               {isLoading ? "Regenerating..." : "Regenerate Payment Order"}
          </Button>
     );
}
