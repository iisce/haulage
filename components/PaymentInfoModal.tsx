import type { PaymentOrder } from "@prisma/client";
import { Button } from "@/components/ui/button";
import {
     Dialog,
     DialogContent,
     DialogHeader,
     DialogTitle,
     DialogTrigger,
} from "@/components/ui/dialog";

export default function PaymentInfoModal({
     paymentOrder,
}: {
     paymentOrder: PaymentOrder;
}) {
     return (
          <Dialog>
               <DialogTrigger asChild>
                    <Button variant="outline">View Payment Info</Button>
               </DialogTrigger>
               <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                         <DialogTitle>Payment Details</DialogTitle>
                    </DialogHeader>
                    <div className="mt-2">
                         <p>
                              <strong>Account Name:</strong>{" "}
                              {paymentOrder.accountName}
                         </p>
                         <p>
                              <strong>Account Number:</strong>{" "}
                              {paymentOrder.accountNumber}
                         </p>
                         <p>
                              <strong>Bank:</strong> {paymentOrder.bankName}
                         </p>
                         <p className="mt-2 text-sm text-gray-600">
                              Please make the payment within 48 hours to
                              complete the transaction.
                         </p>
                    </div>
               </DialogContent>
          </Dialog>
     );
}
