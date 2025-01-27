import { getVehicleByBarcode } from "@/actions/barcode";
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
import { QrCode } from "lucide-react";
import { notFound } from "next/navigation";

// Mock data
const vehicleInfo = {
     owner: "John Doe",
     detachable: "Yes",
     plateNumber: "ABC-123-XYZ",
     qrCode: "QR12345",
     status: "Active",
     daysOverdue: 5,
};

const transactions = [
     {
          id: 1,
          from: "Park A",
          to: "Park B",
          date: "Jul 22, 08:51",
          amount: 20000,
          status: "Pending",
     },
     {
          id: 2,
          from: "Park A",
          to: "Park B",
          date: "Jul 22, 08:51",
          amount: 20000,
          status: "Successful",
     },
     {
          id: 3,
          from: "Park A",
          to: "Park B",
          date: "Jul 22, 08:51",
          amount: 20000,
          status: "Overdue",
     },
     {
          id: 4,
          from: "Park A",
          to: "Park B",
          date: "Jul 22, 08:51",
          amount: 20000,
          status: "Pending",
     },
     {
          id: 5,
          from: "Park A",
          to: "Park B",
          date: "Jul 22, 08:51",
          amount: 20000,
          status: "Successful",
     },
     {
          id: 6,
          from: "Park A",
          to: "Park B",
          date: "Jul 22, 08:51",
          amount: 20000,
          status: "Overdue",
     },
     {
          id: 7,
          from: "Park A",
          to: "Park B",
          date: "Jul 22, 08:51",
          amount: 20000,
          status: "Pending",
     },
];

export default async function HaulageStatusPage({
     params,
}: {
     params: Promise<{ id: string }>;
}) {
     const id = (await params).id;
     const vehicleRequest = await getVehicleByBarcode(id);
     const vehicle = vehicleRequest.data;
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
                                   <Badge
                                        variant={
                                             vehicleInfo.status === "Active"
                                                  ? "secondary"
                                                  : "destructive"
                                        }
                                   >
                                        {vehicleInfo.status}
                                   </Badge>
                              </div>
                              <div className="flex justify-end">
                                   <QrCode size={100} />
                              </div>
                         </div>
                    </CardContent>
                    <CardFooter className="justify-between">
                         <StatusLevy />
                         <Badge variant="destructive" className="text-sm">
                              {vehicleInfo.daysOverdue} Days Overdue
                         </Badge>
                    </CardFooter>
               </Card>

               <Card className="mb-4">
                    <CardHeader>
                         <CardTitle className="flex items-center justify-between">
                              Transaction History
                              <StatusTransactions transactions={transactions} />
                         </CardTitle>
                    </CardHeader>
                    <CardContent>
                         <TransactionList transactions={transactions} />
                    </CardContent>
               </Card>
          </div>
     );
}
