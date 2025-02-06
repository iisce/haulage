import { fetchTransactions } from "@/actions/transactions";
import SingleTransaction from "./SingleTransaction";
import { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";

export default async function TransactionList({
     vehicleId,
}: {
     vehicleId: string;
}) {
     const transactions = (await fetchTransactions({ vehicleId })).data ?? [];

     return (
          <div className="space-y-2">
               {transactions.slice(0, 5).map((transaction) => (
                    <Suspense
                         fallback={<Skeleton className="h-10 w-full" />}
                         key={transaction.id}
                    >
                         <SingleTransaction transaction={transaction} />
                    </Suspense>
               ))}
          </div>
     );
}
