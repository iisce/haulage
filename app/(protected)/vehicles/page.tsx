import Search from "@/components/shared/search-component";
import { Button } from "@/components/ui/button";
import VehicleTable from "@/components/vehicles/vehicleTable";
import Link from "next/link";

export default async function VehiclePage() {
     return (
          <div className="flex w-full flex-col pt-[20px]">
               <div className="flex flex-row gap-12 px-[20px]">
                    <Search />
                    <Link href="/vehicles/new-vehicle">
                         <Button>Add Vehicle</Button>
                    </Link>
               </div>
               <div className="mx-4 my-4">
                    <VehicleTable />
               </div>
          </div>
     );
}
