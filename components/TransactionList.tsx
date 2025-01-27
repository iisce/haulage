import { statusColor } from "@/constants";

export default function TransactionList({
     transactions,
}: {
     transactions: any;
}) {
     return (
          <ul className="space-y-2">
               {transactions.slice(0, 5).map((transaction: any) => (
                    <li
                         key={transaction.id}
                         className="flex items-center justify-between"
                    >
                         <div className="flex items-center">
                              <span
                                   //@ts-expect-error
                                   className={`mr-2 h-3 w-3 rounded-full ${statusColor[transaction.status]}`}
                              ></span>
                              <span>
                                   {transaction.from} - {transaction.to}
                              </span>
                         </div>
                         <div className="text-right">
                              <div>₦{transaction.amount.toLocaleString()}</div>
                              <div className="text-sm text-gray-500">
                                   {transaction.date}
                              </div>
                         </div>
                    </li>
               ))}
          </ul>
     );
}
