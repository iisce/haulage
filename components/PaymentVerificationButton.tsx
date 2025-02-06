"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { verifyTransactions } from "@/actions/levy";

interface PaymentVerificationButtonProps {
     paymentReference: string;
}

export function PaymentVerificationButton({
     paymentReference,
}: PaymentVerificationButtonProps) {
     const [isVerifying, setIsVerifying] = useState(false);
     const [verificationResult, setVerificationResult] = useState<{
          success: boolean;
          message: string;
     } | null>(null);

     const handleVerification = async () => {
          setIsVerifying(true);
          setVerificationResult(null);

          try {
               const result = await verifyTransactions(paymentReference);
               setVerificationResult({
                    success: true,
                    message: "Payment verified successfully",
               });
          } catch (error) {
               setVerificationResult({
                    success: false,
                    message: "Failed to verify payment. Please try again.",
               });
          } finally {
               setIsVerifying(false);
          }
     };

     return (
          <div className="grid space-y-4">
               <Button
                    onClick={handleVerification}
                    disabled={isVerifying}
                    variant="awesome"
               >
                    {isVerifying ? "Verifying..." : "I have made the payment"}
               </Button>

               {verificationResult && (
                    <Alert
                         variant={
                              verificationResult.success
                                   ? "default"
                                   : "destructive"
                         }
                    >
                         <AlertCircle className="h-4 w-4" />
                         <AlertTitle>
                              {verificationResult.success ? "Success" : "Error"}
                         </AlertTitle>
                         <AlertDescription>
                              {verificationResult.message}
                         </AlertDescription>
                    </Alert>
               )}
          </div>
     );
}
