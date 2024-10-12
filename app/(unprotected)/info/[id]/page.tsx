import SingleTransaction from "@/components/info/single-transaction";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getVehicleByQRCodes } from "@/data/codes";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Info({ params }: { params: { id: string } }) {
     const scannedVehicle = await getVehicleByQRCodes(params.id);
     return (
          <div className="grid gap-2">
               <Card className="m-2 mb-0 flex justify-between border p-2">
                    <div className="flex w-2/3 flex-col justify-between gap-3 pr-2">
                         <div className="flex h-full flex-col justify-between gap-2">
                              <div className="grid gap-1">
                                   <div className="grid gap-1">
                                        <div className="text-sm font-bold">
                                             Oyeniran Ayobami Paul
                                        </div>
                                        <Badge className="w-min">
                                             Detachable
                                        </Badge>
                                   </div>
                                   <code className="w-24">123-ABC-4D</code>
                              </div>
                              <Button
                                   size={"sm"}
                                   variant={"destructive"}
                                   className="h-6 w-24"
                              >
                                   OWING
                              </Button>
                         </div>
                    </div>
                    <Card className="aspect-square w-1/3 bg-red-200"></Card>
               </Card>
               <div className="flex justify-between gap-2 px-2">
                    <Button variant={"info"}>New Levy</Button>
                    <Button variant={"destructive"} className="grow">
                         5 days Overdue
                    </Button>
               </div>
               <Card className="mx-2 p-2">
                    <div className="flex justify-between text-sm">
                         <div className="">Transaction History</div>
                         <Link
                              href={`/info/${params.id}/transactions`}
                              className="flex items-center gap-1.5 border-b border-black"
                         >
                              View all
                              <ChevronRight className="h-4 w-4" />
                         </Link>
                    </div>
                    <Separator className="my-2" />
                    <div className="grid gap-2">
                         {scannedVehicle
                              .sort(
                                   (a, b) =>
                                        Number(new Date(b.createdAt)) -
                                        Number(new Date(a.createdAt)),
                              )
                              .slice(0, 10)
                              .map((transactions) => (
                                   <SingleTransaction
                                        key={transactions._id}
                                        transaction={transactions}
                                   />
                              ))}
                    </div>
               </Card>
          </div>
     );
}
