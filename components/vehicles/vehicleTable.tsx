import {
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
} from "@/components/ui/table";
import { getVehicles } from "@/data/vehicles";
import { Eye } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { PaginationControls } from "./pagination";
import { ITEMS_PER_PAGE } from "@/constants";

export interface IVEHICLEDETAILS {
     id: string;
     plate_number: string;
     drivers_license: string;
     detachable: string;
     no_of_tyres: string;
     registration_park: string;
}

export default async function VehicleTable({ page }: { page: number }) {
     const offset = (page - 1) * ITEMS_PER_PAGE;
     const vehiclesData = await getVehicles(offset);
     const vehicles = vehiclesData.vehicles;
     return (
          <>
               <Table className="mt-[20px] w-[900px] overflow-x-scroll md:w-full">
                    <TableHeader className="bg-black text-center text-white">
                         <TableRow>
                              <TableHead className="text-white">
                                   Plate Number
                              </TableHead>
                              <TableHead className="text-white">
                                   Drivers
                              </TableHead>
                              <TableHead className="text-white">
                                   No. Of Tyre
                              </TableHead>
                              <TableHead className="text-center text-white">
                                   Maker
                              </TableHead>
                              <TableHead className="text-center text-white">
                                   Detachable
                              </TableHead>
                              <TableHead className="w-10 text-center text-white"></TableHead>
                         </TableRow>
                    </TableHeader>
                    <TableBody>
                         {vehicles.map((vehicle, i) => (
                              <TableRow key={i}>
                                   <TableCell className="grid text-left font-medium">
                                        <Link href={`/vehicles/${vehicle.id}`}>
                                             {vehicle.plateNumber}
                                        </Link>
                                   </TableCell>
                                   <TableCell className="text-left">
                                        {vehicle.customerName}
                                   </TableCell>
                                   <TableCell className="text-left">
                                        {vehicle.number_of_tyres}
                                   </TableCell>
                                   <TableCell className="text-left">
                                        {vehicle.modelName}
                                   </TableCell>
                                   <TableCell className="text-left">
                                        <Badge className="mx-auto rounded-full uppercase">
                                             {vehicle.isDetachable
                                                  ? "yes"
                                                  : "No"}
                                        </Badge>
                                   </TableCell>
                                   <TableCell className="">
                                        <Link
                                             href={`/vehicles/${vehicle.id}`}
                                             className="text-center"
                                        >
                                             <Eye className="h-3.5 w-3.5" />
                                        </Link>
                                   </TableCell>
                              </TableRow>
                         ))}
                    </TableBody>
               </Table>
               <PaginationControls
                    itemsPerPage={vehiclesData.limit}
                    totalItems={vehiclesData.count}
               />
          </>
     );
}
