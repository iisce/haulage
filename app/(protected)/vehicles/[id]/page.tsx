import QrCode from "@/components/shared/qr-code";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TYRE_TYPE } from "@/constants";
import { getVehicleById } from "@/data/vehicles";
import { formatToNaira } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, QrCodeIcon, TruckIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function SingleVehiclePage({
     params,
}: {
     params: { id: string };
}) {
     const vehicle = await getVehicleById({ id: params.id });

     if (!vehicle) return notFound();

     return (
          <div className="grid gap-8 px-5">
               <div className="grid gap-4">
                    <div className="flex flex-col items-center justify-between gap-3 py-4 lg:flex-row">
                         <div className="flex items-center justify-between gap-2">
                              <h1 className="text-2xl font-bold text-black dark:text-white">
                                   {vehicle?.name}
                              </h1>
                              <Badge
                                   variant="secondary"
                                   className="bg-gray-500 text-white"
                              >
                                   {vehicle?.category}
                              </Badge>
                         </div>
                         <div className="grid grid-cols-3 gap-3">
                              <Button asChild>
                                   <Link href={`/vehicles/${vehicle._id}/edit`}>
                                        Edit
                                   </Link>
                              </Button>
                              <Button asChild>
                                   <Link href={`/vehicles/${vehicle._id}/edit`}>
                                        Delete
                                   </Link>
                              </Button>
                              <Button asChild>
                                   <Link href={`/vehicles/${vehicle._id}/edit`}>
                                        Add Levy
                                   </Link>
                              </Button>
                         </div>
                    </div>
                    <Separator />
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Plate Number
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {vehicle.platenumber}
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Tyre Type
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {TYRE_TYPE.find(
                                        ({ fee }) =>
                                             Number(fee) === vehicle.fee,
                                   )?.name ?? "UNIDENTIFIED"}
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   NIN
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {vehicle.nin}
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Driver
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {vehicle.driversname}
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Phone
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {vehicle.phonenumber}
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Fee
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {formatToNaira(vehicle.fee)}
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Detachable
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {vehicle.detachable ? "YES" : "NO"}
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
                    <div className="grid gap-4 text-red-500 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                         <div className="">
                              <div className="text-sm">Status</div>
                              <div className="flex items-center gap-2">
                                   <TruckIcon className="h-8 w-8" />
                                   <div className="font-medium">Owing</div>
                              </div>
                         </div>
                         <div className="">
                              <div className="grid gap-1">
                                   <div className="text-sm">Amount Owed</div>
                                   <div className="font-medium">
                                        {formatToNaira(3800)}
                                   </div>
                              </div>
                         </div>
                    </div>
                    <Separator />
               </div>
               <div className="grid gap-8 sm:grid-cols-2">
                    <div className="grid gap-4">
                         <div className="flex items-center gap-2">
                              <QrCodeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                              <div className="font-medium text-black dark:text-white">
                                   Vehicle QR Code
                              </div>
                         </div>
                         <QrCode text={vehicle._id} />
                    </div>
               </div>
               <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                         <TruckIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                         <div className="font-medium text-black dark:text-white">
                              Truck Haulage Levy History
                         </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Levy Date
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   2023-04-15
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Levy Amount
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {formatToNaira(2500)}
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Levy Status
                              </div>
                              <div className="font-medium text-green-500 dark:text-green-500">
                                   Paid
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Levy Date
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   2023-03-01
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Levy Amount
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {formatToNaira(2000)}
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Levy Status
                              </div>
                              <div className="font-medium text-yellow-500 dark:text-yellow-500">
                                   Pending
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Levy Date
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   2023-02-15
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Levy Amount
                              </div>
                              <div className="font-medium text-black dark:text-white">
                                   {formatToNaira(1800)}
                              </div>
                         </div>
                         <div className="grid gap-1">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                   Levy Status
                              </div>
                              <div className="font-medium text-red-500 dark:text-red-500">
                                   Overdue
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
