import { fetchTransactions } from "@/actions/transactions";
import { formatToNaira } from "@/lib/utils";
import { format } from "date-fns";

export default async function VehicleLevyTransactions({ id }: { id?: string }) {
     const transactions = (
          await fetchTransactions({ vehicleId: id, limit: "10" })
     ).data;
     return (
          <div className="grid gap-4">
               {transactions ? (
                    transactions?.map((transaction, k) => (
                         <div className="grid grid-cols-3" key={k}>
                              <div className="grid gap-1">
                                   <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Levy Date
                                   </div>
                                   <div className="font-medium text-black dark:text-white">
                                        {format(
                                             transaction.createdAt,
                                             "yyyy-LL-dd h:mm aa",
                                        )}
                                   </div>
                              </div>
                              <div className="grid gap-1">
                                   <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Levy Amount
                                   </div>
                                   <div className="font-medium text-black dark:text-white">
                                        {formatToNaira(transaction.amount)}
                                   </div>
                              </div>
                              <div className="grid gap-1">
                                   <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Levy Status
                                   </div>
                                   <div
                                        className={`font-medium ${transaction.status === "PENDING" && "text-yellow-500 dark:text-yellow-500"} ${transaction.status === "SUCCESS" && "text-green-500 dark:text-green-500"} ${transaction.status === "FAILED" && "text-red-500 dark:text-red-500"}`}
                                   >
                                        {transaction.status}
                                   </div>
                              </div>
                         </div>
                    ))
               ) : (
                    <div className="grid h-12 place-items-center">
                         No Transactions
                    </div>
               )}
          </div>
     );
}
