"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export interface IVEHICLEDETAILS{
  id: string;
  plate_number: string;
  drivers_license: string;
  detachable: string;
  no_of_tyres: string;
  registration_park: string;
};

export const VEHICLE_DETAILS = [
  {
     id: '1',
    plate_number: "John Doe",
    drivers_license: "Particular drivers_license",
    detachable: "Detachable",
    no_of_tyres: "000000000",
    registration_park: "000000000",
  },
  {
     id: '2',
    plate_number: "John Doe",
    drivers_license: "Particular drivers_license",
    detachable: "Non-Detachable",
    no_of_tyres: "000000000",
    registration_park: "000000000",
  },
  {
     id: '3',
    plate_number: "John Doe",
    drivers_license: "Particular drivers_license",
    detachable: "Detachable",
    no_of_tyres: "000000000",
    registration_park: "000000000",
  },
  {
     id: '4',
    plate_number: "John Doe",
    drivers_license: "Particular drivers_license",
    detachable: "Detachable",
    no_of_tyres: "000000000",
    registration_park: "000000000",
  },
  {
     id: '5',
    plate_number: "John Doe",
    drivers_license: "Particular drivers_license",
    detachable: "Non-Detachable",
    no_of_tyres: "000000000",
    registration_park: "000000000",
  },
  {
     id: '6',
    plate_number: "John Doe",
    drivers_license: "Particular drivers_license",
    detachable: "Non-Detachable",
    no_of_tyres: "000000000",
    registration_park: "000000000",
  },
  {
     id: '7',
    plate_number: "John Doe",
    drivers_license: "Particular drivers_license",
    detachable: "Non-Detachable",
    no_of_tyres: "000000000",
    registration_park: "000000000",
  },
  {
     id: '8',
    plate_number: "John Doe",
    drivers_license: "Particular drivers_license",
    detachable: "Non-Detachable",
    no_of_tyres: "000000000",
    registration_park: "000000000",
  },
  {
     id: '9',
    plate_number: "John Doe",
    drivers_license: "Particular drivers_license",
    detachable: "Non-Detachable",
    no_of_tyres: "000000000",
    registration_park: "000000000",
  },
];

export function VehicleTable({id}: {id:string}) {
  return (
    <>
      <Table className="mt-[20px] w-full">
        <TableHeader className="bg-black text-center text-white">
          <TableRow>
            <TableHead className="text-white ">Plate Number</TableHead>
            <TableHead className="text-white">Drivers Licence</TableHead>
            <TableHead className="text-white">No. Of Tyre</TableHead>
            <TableHead className="text-white text-center ">Registration Park</TableHead>
            <TableHead className="text-white text-center ">Detachable/Non-Detachable</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {VEHICLE_DETAILS.map((singleVehicle, i) => (
            <TableRow key={i}>
              <TableCell className=" text-left font-medium">
                {singleVehicle.plate_number}
              </TableCell>
              <TableCell className=" text-left">{singleVehicle.drivers_license}</TableCell>
              <TableCell className=" text-left">{singleVehicle.no_of_tyres}</TableCell>
              <TableCell className=" text-left">{singleVehicle.registration_park}</TableCell>
              <TableCell className=" flex justify-between items-center text-left">
                <Badge className=" mx-auto rounded-full">{singleVehicle.detachable}</Badge>{" "}
                <DropdownMenu>
                  <DropdownMenuTrigger className=" cursor-pointer" asChild>
                    <div className="flex gap-0.5 flex-col">
                      <div className=" rounded-full bg-black w-[3px] h-[3px]"></div>
                      <div className=" rounded-full bg-black w-[3px] h-[3px]"></div>
                      <div className="rounded-full bg-black w-[3px] h-[3px]"></div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="flex flex-col gap-2 justify-center items-center w-full">
                        <Link href={`/vehicles/${singleVehicle.id}`} className="text-center">
                          View Profile
                        </Link>
                        <Link href={`/vehicles/${singleVehicle.id}/activities`} className="text-center">
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
            <PaginationItem className=" list-none">
              <PaginationPrevious href="/" />
            </PaginationItem>
            <PaginationItem className=" list-none">
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className=" list-none">
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem className=" list-none">
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem className=" list-none">
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem className=" list-none">
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
