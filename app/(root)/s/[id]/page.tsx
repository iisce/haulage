import { getBarcodeByCode } from "@/actions/barcode";
import StatusLevy from "@/components/StatusLevy";
import StatusTransactions from "@/components/StatusTransactions";
import TransactionList from "@/components/TransactionList";
import { Badge } from "@/components/ui/badge";
import {
     Card,
     CardContent,
     CardFooter,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";
import { getVehicleById } from "@/data/vehicles";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function HaulageStatusPage({
     params,
}: {
     params: Promise<{ id: string }>;
}) {
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
     if (!vehicle) {
          return notFound();
     }

     return (
          <div className="container mx-auto p-4">
               <Card className="mb-4 mt-16">
                    <CardHeader>
                         <CardTitle>Vehicle Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <div className="grid">
                              <div>
                                   <p>
                                        <strong>Vehicle Owner:</strong>{" "}
                                        {vehicle?.customerName}
                                   </p>
                                   <p>
                                        <strong>Detachable:</strong>{" "}
                                        <Badge
                                             variant={
                                                  vehicle.isDetachable
                                                       ? "default"
                                                       : "secondary"
                                             }
                                        >
                                             {vehicle.isDetachable
                                                  ? "Detachable"
                                                  : "Not Detachable"}
                                        </Badge>
                                   </p>
                                   <p>
                                        <strong>Plate Number:</strong>{" "}
                                        {vehicle.plateNumber}
                                   </p>
                              </div>
                              {/* <div className="flex justify-end">
                                   <QrCode size={50} />
                              </div> */}
                         </div>
                    </CardContent>
                    <CardFooter className="justify-between">
                         <StatusLevy vehicle={vehicle} />
                         <Badge variant="destructive" className="text-sm">
                              {6} Days Overdue
                         </Badge>
                    </CardFooter>
               </Card>

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
