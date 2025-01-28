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
import { QrCode } from "lucide-react";
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
                    Invalid Barcode
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
                         <div className="grid grid-cols-2 gap-4">
                              <div>
                                   <p>
                                        <strong>Vehicle Owner:</strong>{" "}
                                        {vehicle?.modelName}
                                   </p>
                                   <p>
                                        <strong>Detachable:</strong>{" "}
                                        {vehicle?.isDetachable}
                                   </p>
                                   <p>
                                        <strong>Plate Number:</strong>{" "}
                                        {vehicle.plateNumber}
                                   </p>
                                   {/* <Badge
                                        variant={
                                             vehicleInfo.status === "Active"
                                                  ? "secondary"
                                                  : "destructive"
                                        }
                                   >
                                        {vehicleInfo.status}
                                   </Badge> */}
                              </div>
                              <div className="flex justify-end">
                                   <QrCode size={100} />
                              </div>
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
                         <CardTitle className="flex items-center justify-between">
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
