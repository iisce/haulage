import { fetchTransactions } from "@/actions/transactions";
import SingleTransaction from "./SingleTransaction";
import { Suspense } from "react";

export default async function TransactionList({
     vehicleId,
}: {
     vehicleId: string;
}) {
     const pendingTransactions =
          (await fetchTransactions({ vehicleId })).data ?? [];
     return (
          <div className="space-y-2">
               {pendingTransactions.slice(0, 5).map((transaction) => (
                    <Suspense
                         fallback={<div>Loading...</div>}
                         key={transaction.id}
                    >
                         <SingleTransaction transaction={transaction} />
                    </Suspense>
               ))}
          </div>
     );
}
