"use client";

import { useState } from "react";
import {
     Dialog,
     DialogContent,
     DialogDescription,
     DialogHeader,
     DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { statusColor } from "@/constants";

export default function StatusTransactions({
     transactions,
}: {
     transactions: any[];
}) {
     const [showAllTransactions, setShowAllTransactions] = useState(false);
     return (
          <>
               <Button
                    variant="link"
                    onClick={() => setShowAllTransactions(true)}
               >
                    View all <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
               <Dialog
                    open={showAllTransactions}
                    onOpenChange={setShowAllTransactions}
               >
                    <DialogContent className="max-w-3xl">
                         <DialogHeader>
                              <DialogTitle>All Transactions</DialogTitle>
                              <DialogDescription>
                                   Jul 15, 2024 - Jul 22, 2024
                              </DialogDescription>
                         </DialogHeader>
                         <div className="max-h-[60vh] overflow-y-auto">
                              <ul className="space-y-2">
                                   {transactions.map((transaction) => (
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
                                                       {transaction.from} -{" "}
                                                       {transaction.to}
                                                  </span>
                                             </div>
                                             <div className="text-right">
                                                  <div>
                                                       ₦
                                                       {transaction.amount.toLocaleString()}
                                                  </div>
                                                  <div className="text-sm text-gray-500">
                                                       {transaction.date}
                                                  </div>
                                             </div>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </DialogContent>
               </Dialog>
          </>
     );
}
