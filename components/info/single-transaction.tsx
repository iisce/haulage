import { cn, formatToNaira } from "@/lib/utils";
import { format, isAfter, isBefore, subDays } from "date-fns";
import React from "react";

type status = "successful" | "pending" | "overdue";
export default function SingleTransaction({
     transaction,
}: {
     transaction: ITransaction;
}) {
     const { amount, createdAt, reference, status } = transaction;
     const vStatus: status =
          status === "successful"
               ? status
               : isBefore(new Date(createdAt), subDays(new Date(), 3))
                 ? "overdue"
                 : (status as status);
     return (
          <div className="flex gap-2">
               <div
                    className={cn(
                         "aspect-square h-12 shrink-0 rounded-full",
                         vStatus === "successful"
                              ? "bg-emerald-600"
                              : vStatus === "pending"
                                ? "bg-orange-500"
                                : "bg-red-600",
                    )}
               />
               <div className="flex h-12 grow flex-col justify-between border-b">
                    <div className="flex w-full justify-between font-bold">
                         <div className="">{reference}</div>
                         <div className="">{formatToNaira(amount)}</div>
                    </div>
                    <div className="flex w-full justify-between text-xs">
                         <div className="">
                              {format(new Date(createdAt), "LLL dd, HH:mm")}
                         </div>
                         <div
                              className={cn(
                                   "uppercase",
                                   vStatus === "successful"
                                        ? "text-emerald-600"
                                        : vStatus === "pending"
                                          ? "text-orange-500"
                                          : "text-red-600",
                              )}
                         >
                              {vStatus}
                         </div>
                    </div>
               </div>
          </div>
     );
}
