import SingleTransaction from "@/components/info/single-transaction";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function TransactionsPage({
     params,
}: {
     params: { id: string };
}) {
     return (
          <div className="grid gap-2">
               <Card className="m-2 p-2">
                    <div className="relative flex justify-center text-sm">
                         <div className="font-bold">Transactions</div>
                         <Link
                              href={`/info/${params.id}`}
                              className="top=0 absolute left-0"
                         >
                              <ChevronLeft />
                         </Link>
                    </div>
                    <Separator className="my-2 bg-black" />
                    <div className="grid gap-2">
                         {/* <SingleTransaction
                              description="Point A - Point B"
                              status="overdue"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={2000}
                              description="Point A - Point B"
                              status="pending"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={5000}
                              description="Point A - Point B"
                              status="successful"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={10000}
                              description="Point A - Point B"
                              status="overdue"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={2000}
                              description="Point A - Point B"
                              status="pending"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={5000}
                              description="Point A - Point B"
                              status="successful"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={10000}
                              description="Point A - Point B"
                              status="overdue"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={2000}
                              description="Point A - Point B"
                              status="pending"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={10000}
                              description="Point A - Point B"
                              status="overdue"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={2000}
                              description="Point A - Point B"
                              status="pending"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={5000}
                              description="Point A - Point B"
                              status="successful"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={10000}
                              description="Point A - Point B"
                              status="overdue"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={2000}
                              description="Point A - Point B"
                              status="pending"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={5000}
                              description="Point A - Point B"
                              status="successful"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={10000}
                              description="Point A - Point B"
                              status="overdue"
                              time="Jul 22, 18:52"
                         />
                         <SingleTransaction
                              amount={2000}
                              description="Point A - Point B"
                              status="pending"
                              time="Jul 22, 18:52"
                         /> */}
                    </div>
               </Card>
          </div>
     );
}
