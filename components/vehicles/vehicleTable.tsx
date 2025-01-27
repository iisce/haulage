import {
     Pagination,
     PaginationContent,
     PaginationEllipsis,
     PaginationItem,
     PaginationLink,
     PaginationNext,
     PaginationPrevious,
} from "@/components/ui/pagination";
import {
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
} from "@/components/ui/table";
import { getVehicles } from "@/data/vehicles";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuGroup,
     DropdownMenuItem,
     DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export interface IVEHICLEDETAILS {
     id: string;
     plate_number: string;
     drivers_license: string;
     detachable: string;
     no_of_tyres: string;
     registration_park: string;
}

export default async function VehicleTable() {
     const vehicles = await getVehicles();
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
                                   <TableCell className="text-left font-medium">
                                        {vehicle.plateNumber}
                                   </TableCell>
                                   <TableCell className="text-left">
                                        {vehicle.customerName}
                                   </TableCell>
                                   <TableCell className="text-left">
                                        {/* {
                                             TYRE_TYPE.find(
                                                  ({ fee }) =>
                                                       Number(fee) ===
                                                       vehicle.number_of_tyres,
                                             )?.name
                                        } */}
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
                                        <DropdownMenu>
                                             <DropdownMenuTrigger className="cursor-pointer">
                                                  <Menu className="h-4 w-4" />
                                             </DropdownMenuTrigger>
                                             <DropdownMenuContent>
                                                  <DropdownMenuGroup>
                                                       <DropdownMenuItem className="flex w-full flex-col items-center justify-center gap-2">
                                                            <Link
                                                                 href={`/vehicles/${vehicle.id}`}
                                                                 className="text-center"
                                                            >
                                                                 View Profile
                                                            </Link>
                                                            <Link
                                                                 href={`/vehicles/${vehicle.id}/edit`}
                                                                 className="text-center"
                                                            >
                                                                 View Activity
                                                            </Link>
                                                       </DropdownMenuItem>
                                                  </DropdownMenuGroup>
                                             </DropdownMenuContent>
                                        </DropdownMenu>
                                   </TableCell>
                              </TableRow>
                         ))}
                    </TableBody>
               </Table>
               <div className="">
                    <Pagination>
                         <PaginationContent>
                              <PaginationItem className="list-none">
                                   <PaginationPrevious href="/" />
                              </PaginationItem>
                              <PaginationItem className="list-none">
                                   <PaginationLink href="#" isActive>
                                        1
                                   </PaginationLink>
                              </PaginationItem>
                              <PaginationItem className="list-none">
                                   <PaginationLink href="#">2</PaginationLink>
                              </PaginationItem>
                              <PaginationItem className="list-none">
                                   <PaginationLink href="#">3</PaginationLink>
                              </PaginationItem>
                              <PaginationItem className="list-none">
                                   <PaginationEllipsis />
                              </PaginationItem>
                              <PaginationItem className="list-none">
                                   <PaginationNext href="#" />
                              </PaginationItem>
                         </PaginationContent>
                    </Pagination>
               </div>
          </>
     );
}
