"use client";

// import QrCode from "@/components/shared/qr-code";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { TYRE_TYPE } from "@/constants";
// import { getVehicleById } from "@/data/vehicles";
// import { Ban, File, Plus } from "lucide-react";
// import { notFound } from "next/navigation";
// import { FaCheckCircle } from "react-icons/fa";

// export default async function SingleVehiclePage({
//      params,
// }: {
//      params: { id: string };
// }) {
//      const vehicle = await getVehicleById({ id: params.id });
//      if (!vehicle) return notFound();

//      const tyreType =
//           TYRE_TYPE.find(({ fee }) => Number(fee) === vehicle.fee)?.name ??
//           "UNDEFINED";

//      const overdueBalance = vehicle.fee * 3;

//      return (
//           <div className="p-6 sm:p-8">
//                <div className="grid">
//                     <div className="grid place-items-center">
//                          <div className="text-2xl font-bold text-black">
//                               {vehicle?.name}
//                          </div>
//                          <div className="text-xl font-semibold">
//                               {vehicle.platenumber}
//                          </div>
//                          <div className="mb-2 text-xl font-semibold">
//                               {tyreType} {vehicle.detachable && `(Detachable)`}
//                          </div>
//                          <QrCode text={vehicle._id} />
//                          <Separator className="my-4" />
//                          {/* <>
//                               <FaExclamationTriangle className="h-16 w-16 text-destructive" />
//                               <div className="text-sm text-destructive">
//                                    OVERDUE
//                               </div>
//                               <div className="text-3xl font-medium text-destructive">
//                                    {formatToNaira(overdueBalance)}
//                               </div>
//                          </> */}
//                          {/* <>
//                               <FaExclamationCircle className="h-16 w-16 text-orange-500" />
//                               <div className="text-sm text-orange-500">
//                                    PENDING
//                               </div>
//                               <div className="text-3xl font-medium text-orange-500">
//                                    {formatToNaira(overdueBalance)}
//                               </div>
//                          </> */}
//                          <>
//                               <FaCheckCircle className="h-16 w-16 text-emerald-500" />
//                               <div className="text-emerald-500">CLEARED</div>
//                          </>
//                     </div>
//                     <Separator className="my-4" />
//                     <div className="grid grid-cols-3 gap-2 lg:gap-10">
//                          <Button className="w-full gap-1 text-[10px]">
//                               <Plus className="h-4 w-4" /> NEW LEVY
//                          </Button>
//                          <Button className="w-full gap-1 text-[10px]">
//                               <File className="h-4 w-4" /> TRANSACTIONS
//                          </Button>
//                          <Button
//                               variant={"destructive"}
//                               className="w-full gap-1 text-[10px]"
//                          >
//                               <Ban className="h-4 w-4" /> BLACKLIST
//                          </Button>
//                     </div>
//                     {/* <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                          <div className="grid gap-1">
//                               <div className="text-sm text-gray-500 dark:text-gray-400">
//                                    Plate Number
//                               </div>
//                               <div className="font-medium text-black dark:text-white">
//                                    {vehicle.platenumber}
//                               </div>
//                          </div>
//                          <div className="grid gap-1">
//                               <div className="text-sm text-gray-500 dark:text-gray-400">
//                                    Tyre Type
//                               </div>
//                               <div className="font-medium text-black dark:text-white">
//                                    {TYRE_TYPE.find(
//                                         ({ fee }) =>
//                                              Number(fee) === vehicle.fee,
//                                    )?.name ?? "UNIDENTIFIED"}
//                               </div>
//                          </div>
//                          <div className="grid gap-1">
//                               <div className="text-sm text-gray-500 dark:text-gray-400">
//                                    NIN
//                               </div>
//                               <div className="font-medium text-black dark:text-white">
//                                    {vehicle.nin}
//                               </div>
//                          </div>
//                          <div className="grid gap-1">
//                               <div className="text-sm text-gray-500 dark:text-gray-400">
//                                    Driver
//                               </div>
//                               <div className="font-medium text-black dark:text-white">
//                                    {vehicle.driversname}
//                               </div>
//                          </div>
//                          <div className="grid gap-1">
//                               <div className="text-sm text-gray-500 dark:text-gray-400">
//                                    Phone
//                               </div>
//                               <div className="font-medium text-black dark:text-white">
//                                    {vehicle.phonenumber}
//                               </div>
//                          </div>
//                          <div className="grid gap-1">
//                               <div className="text-sm text-gray-500 dark:text-gray-400">
//                                    Fee
//                               </div>
//                               <div className="font-medium text-black dark:text-white">
//                                    {formatToNaira(vehicle.fee)}
//                               </div>
//                          </div>
//                          <div className="grid gap-1">
//                               <div className="text-sm text-gray-500 dark:text-gray-400">
//                                    Detachable
//                               </div>
//                               <div className="font-medium text-black dark:text-white">
//                                    {vehicle.detachable ? "YES" : "NO"}
//                               </div>
//                          </div>
//                          S
//                     </div>
//                     <Separator />
//                     <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                          <div className="flex items-center gap-2">
//                               <CalendarIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
//                               <div className="font-medium text-black dark:text-white">
//                                    Timestamps
//                               </div>
//                          </div>
//                          <div className="grid gap-1">
//                               <div className="text-sm text-gray-500 dark:text-gray-400">
//                                    Created
//                               </div>
//                               <div className="font-medium text-black dark:text-white">
//                                    {format(
//                                         new Date(vehicle.createdAt),
//                                         "yyyy-LL-dd h:mm aa",
//                                    )}
//                               </div>
//                          </div>
//                          <div className="grid gap-1">
//                               <div className="text-sm text-gray-500 dark:text-gray-400">
//                                    Updated
//                               </div>
//                               <div className="font-medium text-black dark:text-white">
//                                    {format(
//                                         new Date(vehicle.updatedAt),
//                                         "yyyy-LL-dd h:mm aa",
//                                    )}
//                               </div>
//                          </div>
//                     </div>

//                     <div className="grid gap-4">
//                          <div className="flex items-center gap-2">
//                               <TruckIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
//                               <div className="font-medium text-black dark:text-white">
//                                    Truck Haulage Levy History
//                               </div>
//                          </div>
//                          <div className="grid gap-4 sm:grid-cols-3">
//                               <div className="grid gap-1">
//                                    <div className="text-sm text-gray-500 dark:text-gray-400">
//                                         Levy Date
//                                    </div>
//                                    <div className="font-medium text-black dark:text-white">
//                                         2023-04-15
//                                    </div>
//                               </div>
//                               <div className="grid gap-1">
//                                    <div className="text-sm text-gray-500 dark:text-gray-400">
//                                         Levy Amount
//                                    </div>
//                                    <div className="font-medium text-black dark:text-white">
//                                         {formatToNaira(2500)}
//                                    </div>
//                               </div>
//                               <div className="grid gap-1">
//                                    <div className="text-sm text-gray-500 dark:text-gray-400">
//                                         Levy Status
//                                    </div>
//                                    <div className="font-medium text-green-500 dark:text-green-500">
//                                         Paid
//                                    </div>
//                               </div>
//                               <div className="grid gap-1">
//                                    <div className="text-sm text-gray-500 dark:text-gray-400">
//                                         Levy Date
//                                    </div>
//                                    <div className="font-medium text-black dark:text-white">
//                                         2023-03-01
//                                    </div>
//                               </div>
//                               <div className="grid gap-1">
//                                    <div className="text-sm text-gray-500 dark:text-gray-400">
//                                         Levy Amount
//                                    </div>
//                                    <div className="font-medium text-black dark:text-white">
//                                         {formatToNaira(2000)}
//                                    </div>
//                               </div>
//                               <div className="grid gap-1">
//                                    <div className="text-sm text-gray-500 dark:text-gray-400">
//                                         Levy Status
//                                    </div>
//                                    <div className="font-medium text-yellow-500 dark:text-yellow-500">
//                                         Pending
//                                    </div>
//                               </div>
//                               <div className="grid gap-1">
//                                    <div className="text-sm text-gray-500 dark:text-gray-400">
//                                         Levy Date
//                                    </div>
//                                    <div className="font-medium text-black dark:text-white">
//                                         2023-02-15
//                                    </div>
//                               </div>
//                               <div className="grid gap-1">
//                                    <div className="text-sm text-gray-500 dark:text-gray-400">
//                                         Levy Amount
//                                    </div>
//                                    <div className="font-medium text-black dark:text-white">
//                                         {formatToNaira(1800)}
//                                    </div>
//                               </div>
//                               <div className="grid gap-1">
//                                    <div className="text-sm text-gray-500 dark:text-gray-400">
//                                         Levy Status
//                                    </div>
//                                    <div className="font-medium text-red-500 dark:text-red-500">
//                                         Overdue
//                                    </div>
//                               </div>
//                          </div>
//                     </div> */}
//                </div>
//           </div>
//      );
// }

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
     Card,
     CardContent,
     CardFooter,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";
import {
     Dialog,
     DialogContent,
     DialogDescription,
     DialogFooter,
     DialogHeader,
     DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, QrCode } from "lucide-react";
import { useState } from "react";

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

export default function HaulageStatusPage() {
     const [showConfirmation, setShowConfirmation] = useState(false);
     const [showNewLevy, setShowNewLevy] = useState(false);
     const [showAllTransactions, setShowAllTransactions] = useState(false);

     const statusColor = {
          Pending: "bg-orange-500",
          Successful: "bg-green-500",
          Overdue: "bg-red-500",
     };

     return (
          <div className="container mx-auto p-4">
               <Card className="mb-4">
                    <CardHeader>
                         <CardTitle>Vehicle Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <div className="grid grid-cols-2 gap-4">
                              <div>
                                   <p>
                                        <strong>Vehicle Owner:</strong>{" "}
                                        {vehicleInfo.owner}
                                   </p>
                                   <p>
                                        <strong>Detachable:</strong>{" "}
                                        {vehicleInfo.detachable}
                                   </p>
                                   <p>
                                        <strong>Plate Number:</strong>{" "}
                                        {vehicleInfo.plateNumber}
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
                         <Button onClick={() => setShowNewLevy(true)}>
                              New Levy
                         </Button>
                         <Badge variant="destructive" className="text-sm">
                              {vehicleInfo.daysOverdue} Days Overdue
                         </Badge>
                    </CardFooter>
               </Card>

               <Card className="mb-4">
                    <CardHeader>
                         <CardTitle className="flex items-center justify-between">
                              Transaction History
                              <Button
                                   variant="link"
                                   onClick={() => setShowAllTransactions(true)}
                              >
                                   View all{" "}
                                   <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                         </CardTitle>
                    </CardHeader>
                    <CardContent>
                         <ul className="space-y-2">
                              {transactions.slice(0, 5).map((transaction) => (
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
                    </CardContent>
               </Card>

               <Dialog
                    open={showConfirmation}
                    onOpenChange={setShowConfirmation}
               >
                    <DialogContent>
                         <DialogHeader>
                              <DialogTitle>Are you sure?</DialogTitle>
                              <DialogDescription>
                                   This action cannot be undone. This will
                                   permanently charge the new levy to the
                                   vehicle.
                              </DialogDescription>
                         </DialogHeader>
                         <DialogFooter>
                              <Button
                                   variant="outline"
                                   onClick={() => setShowConfirmation(false)}
                              >
                                   No
                              </Button>
                              <Button
                                   onClick={() => setShowConfirmation(false)}
                              >
                                   Yes
                              </Button>
                         </DialogFooter>
                    </DialogContent>
               </Dialog>

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
               <Dialog open={showNewLevy} onOpenChange={setShowNewLevy}>
                    <DialogContent className="max-w-3xl">
                         <DialogHeader>
                              <DialogTitle>New Levy</DialogTitle>
                              <DialogDescription>
                                   Create new levy
                              </DialogDescription>
                         </DialogHeader>
                         <div className="max-h-[60vh] overflow-y-auto">
                              <div className="space-y-4">
                                   <div className="flex items-center justify-between">
                                        <Label htmlFor="tyreNumber">
                                             Tyre Number
                                        </Label>
                                        <Badge variant="secondary">
                                             10 Tyres
                                        </Badge>
                                   </div>
                                   <Input
                                        id="tyreNumber"
                                        placeholder="Enter tyre number"
                                   />
                                   <div className="flex items-center justify-between">
                                        <Label htmlFor="amount">Amount</Label>
                                        <div className="text-2xl font-bold">
                                             $30
                                        </div>
                                   </div>
                                   <Input
                                        id="amount"
                                        placeholder="Enter amount"
                                   />
                              </div>
                              <div className="mt-5 grid grid-cols-2 gap-2">
                                   <Button variant="destructive">Cancel</Button>
                                   <Button
                                        onClick={() =>
                                             setShowConfirmation(true)
                                        }
                                   >
                                        Charge
                                   </Button>
                              </div>
                         </div>
                    </DialogContent>
               </Dialog>
          </div>
     );
}
