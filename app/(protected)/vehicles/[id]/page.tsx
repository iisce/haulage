import { getBarcodeByVehicle } from "@/actions/barcode";
import { getAllTyreSettings } from "@/actions/settings/tyre";
import { fetchVehicleTransactionsStatus } from "@/actions/transactions";
import StatusLevy from "@/components/StatusLevy";
import VehicleLevyTransactions from "@/components/VehicleLevyTransactions";
import ScanToAddSticker from "@/components/scan-to-add-sticker";
import QrCode from "@/components/shared/qr-code";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getVehicleById } from "@/data/vehicles";
import { formatToNaira } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, QrCodeIcon, TruckIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function SingleVehiclePage({
     params,
}: {
     params: Promise<{ id: string }>;
}) {
     const id = (await params).id;
     const vehicle = await getVehicleById({ id });
     const barcode = (await getBarcodeByVehicle(id)).data;
     const tyreSettings = (await getAllTyreSettings()).data ?? [];
     const tyreSetting = tyreSettings.find(
          (tyre) => tyre.number_of_tyres === vehicle?.number_of_tyres,
     );
     const vehicleTransactionStatus = (await fetchVehicleTransactionsStatus(id))
          .data;

     if (!vehicle) return notFound();
     const isOwing = vehicleTransactionStatus.amountOwed > 0;

     return (
          <div className="grid gap-8 px-5">
               <div className="grid gap-4">
                    <div className="flex flex-col items-center justify-between gap-3 py-4 lg:flex-row">
                         <div className="flex items-center justify-between gap-2">
                              <h1 className="text-2xl font-bold text-black dark:text-white">
                                   {vehicle?.modelName}
                              </h1>
                              <Badge
                                   variant="secondary"
                                   className="bg-gray-500 text-white"
                              >
                                   {vehicle?.isDetachable
                                        ? "Detachable"
                                        : "Not Detachable"}
                              </Badge>
                         </div>
                         <div className="grid grid-cols-2 gap-3">
                              <Button asChild>
                                   <Link href={`/vehicles/${vehicle.id}/edit`}>
                                        Edit
                                   </Link>
                              </Button>
                              {/* <Button asChild>
                                   <Link href={`/vehicles/${vehicle.id}/edit`}>
                                        Delete
                                   </Link>
                              </Button> */}
                              <StatusLevy vehicle={vehicle} />
                         </div>
                    </div>
                    <Separator />
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Plate Number
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {vehicle.plateNumber}
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Tyre Type
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {vehicle.number_of_tyres} Tyres
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   NIN
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {vehicle.hauleFeeId}
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Driver
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {vehicle.customerName}
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Phone
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {vehicle.customerMobile}
                              </div>
                         </div>
                         {tyreSetting && (
                              <div className="grid gap-1">
                                   <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Fee
                                   </div>
                                   <div className="font-medium text-black dark:text-white">
                                        {formatToNaira(tyreSetting.fee)}
                                   </div>
                              </div>
                         )}
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Detachable
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {vehicle.isDetachable ? "YES" : "NO"}
                              </div>
                         </div>
                    </div>
                    <Separator />
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                         <div className="flex items-center gap-2">
                              <CalendarIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                              <div className="font-medium text-black dark:text-white">
                                   Timestamps
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Created
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {format(
                                        new Date(vehicle.createdAt),
                                        "yyyy-LL-dd h:mm aa",
                                   )}
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Updated
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {format(
                                        new Date(vehicle.updatedAt),
                                        "yyyy-LL-dd h:mm aa",
                                   )}
                              </div>
                         </div>
                    </div>
                    <Separator />
                    <div
                         className={`grid gap-4 ${isOwing ? "text-red-500" : "text-emerald-500"} sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
                    >
                         <div className="">
                              <div className="text-sm">Status</div>
                              <div className="flex items-center gap-2">
                                   <TruckIcon className="h-8 w-8" />
                                   <div className="font-medium">
                                        {isOwing ? "OWING" : "CLEAR"}
                                   </div>
                              </div>
                         </div>
                         <div className="">
                              <div className="grid gap-1">
                                   <div className="text-sm">Amount Owed</div>
                                   <div className="font-medium">
                                        {formatToNaira(
                                             isOwing
                                                  ? vehicleTransactionStatus.amountOwed
                                                  : 0,
                                        )}
                                   </div>
                              </div>
                         </div>
                         <div className="">
                              <div className="grid gap-1 text-primary">
                                   <div className="text-sm">Total</div>
                                   <div className="font-medium">
                                        {formatToNaira(
                                             vehicleTransactionStatus.pendingAmount +
                                                  vehicleTransactionStatus.successAmount,
                                        )}
                                   </div>
                              </div>
                         </div>
                    </div>
                    <Separator />
               </div>
               <div className="grid gap-8 sm:grid-cols-2">
                    {barcode ? (
                         <div className="grid gap-4">
                              <div className="flex items-center gap-2">
                                   <QrCodeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                                   <div className="font-medium text-black dark:text-white">
                                        Vehicle QR Code
                                   </div>
                              </div>
                              <QrCode
                                   text={`https://haulefee.com/s/${barcode.code}`}
                              />
                         </div>
                    ) : (
                         <ScanToAddSticker id={vehicle.id} />
                    )}
               </div>
               <Separator />
               <div className="mb-10 grid gap-4">
                    <div className="flex justify-between gap-3">
                         <div className="flex items-center gap-2">
                              <TruckIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                              <div className="font-medium text-black dark:text-white">
                                   Truck Haulage Levy History
                              </div>
                         </div>
                         <Link href={`/vehicles/${id}/transactions`}>
                              view all
                         </Link>
                    </div>
                    <Suspense fallback={<div>...loading</div>}>
                         <VehicleLevyTransactions id={id} />
                    </Suspense>
               </div>
          </div>
     );
}
