import VehicleLevyTransactions from "@/components/VehicleLevyTransactions";
import { TruckIcon } from "lucide-react";

export default async function Transactions({
     params,
}: {
     params: Promise<{ id: string }>;
}) {
     const id = await (await params).id;
     return (
          <div className="grid gap-4 p-4">
               <div className="flex justify-between gap-3">
                    <div className="flex items-center gap-2">
                         <TruckIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                         <div className="font-medium text-black dark:text-white">
                              Truck Haulage Levy History
                         </div>
                    </div>
                    {/* TODO: Add pagination */}
               </div>
               <VehicleLevyTransactions id={id} />
          </div>
     );
}
