import {
     Dialog,
     DialogContent,
     DialogHeader,
     DialogTitle,
     DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { fetchTransactions } from "@/actions/transactions";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import SingleTransaction from "./SingleTransaction";
import { Suspense } from "react";

export default async function StatusTransactions({
     vehicleId,
}: {
     vehicleId: string;
}) {
     const pendingTransactions =
          (await fetchTransactions({ vehicleId, limit: "30" })).data ?? [];
     return (
          <>
               <Dialog>
                    <DialogTrigger asChild>
                         <Button>
                              View all <ArrowRight className="ml-2 h-4 w-4" />
                         </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                         <DialogHeader>
                              <DialogTitle>All Transactions</DialogTitle>
                         </DialogHeader>
                         <ScrollArea className="max-h-[70vh]">
                              <div className="space-y-2">
                                   {pendingTransactions.map((transaction) => (
                                        <Suspense
                                             fallback={<div>Loading...</div>}
                                             key={transaction.id}
                                        >
                                             <SingleTransaction
                                                  transaction={transaction}
                                             />
                                        </Suspense>
                                   ))}
                              </div>
                              <ScrollBar />
                         </ScrollArea>
                    </DialogContent>
               </Dialog>
          </>
     );
}
