import { getBarcodeByCode } from "@/actions/barcode";
import { auth } from "@/auth";
import StatusLevy from "@/components/StatusLevy";
import StatusTransactions from "@/components/StatusTransactions";
import TransactionList from "@/components/TransactionList";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NO_USER_ROLE } from "@/constants";
import { getVehicleById, getVehicleFinancialStatus } from "@/data/vehicles";
import { formatCurrency } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function HaulageStatusPage({
     params,
}: {
     params: Promise<{ id: string }>;
}) {
     const session = await auth();
     const role = session?.user.role;
     const id = (await params).id;
     const barcode = (await getBarcodeByCode(id)).data;
     if (!barcode) {
          return (
               <div className="grid min-h-screen place-items-center">
                    Counterfeit Barcode
               </div>
          );
     }
     const vehicleId = barcode.vehicleId;
     if (!vehicleId || vehicleId === "" || vehicleId === null) {
          return (
               <div className="grid min-h-screen place-items-center">
                    Barcode not attached to a vehicle
               </div>
          );
     }
     const vehicle = await getVehicleById({ id: vehicleId });
     const status = await getVehicleFinancialStatus(vehicleId);
     if (!vehicle) {
          return notFound();
     }
     return (
          <div className="container mx-auto p-4">
               <Card className="mb-4 mt-16 space-y-4 p-6">
                    <div className="space-y-2">
                         <div className="flex items-start justify-between">
                              <div>
                                   <p className="text-sm text-muted-foreground">
                                        Vehicle Owner:
                                   </p>
                                   <h2 className="text-xl font-semibold">
                                        {vehicle.customerName}
                                   </h2>
                              </div>
                         </div>
                         <div className="space-y-1">
                              <p className="text-sm text-muted-foreground">
                                   Detachable:
                              </p>
                              <Badge variant="outline" className="rounded-md">
                                   {vehicle.isDetachable
                                        ? "Detachable"
                                        : "Non-Detachable"}
                              </Badge>
                         </div>
                         <div className="space-y-1">
                              <p className="text-sm text-muted-foreground">
                                   Plate Number:
                              </p>
                              <p className="font-medium">
                                   {vehicle.plateNumber}
                              </p>
                         </div>
                    </div>
                    <div className="flex gap-3">
                         {role && NO_USER_ROLE.includes(role as any) && (
                              <StatusLevy vehicle={vehicle} />
                         )}
                         {status.amountOwed > 0 && (
                              <Badge variant="destructive" className="rounded-md">
                              6 Days Overdue
                         </Badge>
                         )}
                    </div>
               </Card>

               {status.amountOwed > 0 && (
                    <div className="mb-4 rounded-lg border border-red-100 bg-red-50 p-4">
                         <p className="mb-1 text-sm text-red-600">
                              Amount Owed:
                         </p>
                         <p className="text-2xl font-bold text-red-700">
                              {formatCurrency(status.amountOwed)}
                         </p>
                    </div>
               )}

               <Card className="mb-4">
                    <CardHeader>
                         <CardTitle className="flex items-end justify-between border-b pb-1 text-xl">
                              Transaction History
                              <Suspense fallback={<div>Loading...</div>}>
                                   <StatusTransactions vehicleId={vehicleId} />
                              </Suspense>
                         </CardTitle>
                    </CardHeader>
                    <CardContent>
                         <Suspense fallback={<div>Loading...</div>}>
                              <TransactionList vehicleId={vehicleId} />
                         </Suspense>
                    </CardContent>
               </Card>
          </div>
     );
}
