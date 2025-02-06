import { statusColor } from "@/constants";
import { db } from "@/lib/db";
import { type Transaction } from "@prisma/client";
import { format, differenceInHours } from "date-fns";
import PaymentInfoModal from "./PaymentInfoModal";
import RegeneratePaymentOrder from "./RegeneratePaymentOrder";

export default async function SingleTransaction({
     transaction,
}: {
     transaction: Transaction;
}) {
     const paymentOrder = await db.paymentOrder.findFirst({
          where: {
               paymentReference: transaction.reference,
          },
     });

     let isExpired = false;
     if (paymentOrder) {
          isExpired =
               differenceInHours(new Date(), paymentOrder.updatedAt) > 48;
     }
     return (
          <div
               key={transaction.id}
               className="grid gap-1 border-b border-gray-200 pb-1 last:border-b-0"
          >
               <div className="flex items-start justify-between gap-2">
                    <div className="grid">
                         <div>{transaction.vehiclename}</div>
                         <div
                              className={`shrink-0 rounded px-4 py-1 text-xs uppercase ${statusColor[transaction.status]}`}
                         >
                              {transaction.status}
                         </div>
                    </div>
                    <div className="text-right">
                         <div>₦{transaction.amount.toLocaleString()}</div>
                         <div className="text-sm text-gray-500">
                              {format(transaction.createdAt, "MMM dd, yyyy")}
                         </div>
                    </div>
               </div>

               {!!paymentOrder && transaction.status === "PENDING" && (
                    <PaymentInfoModal paymentOrder={paymentOrder} />
               )}
               {isExpired && (
                    <RegeneratePaymentOrder
                         transactionReference={transaction.reference}
                    />
               )}
          </div>
     );
}
