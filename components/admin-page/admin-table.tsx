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

export type ADMINTYPE = {
  id: string;
  lga: string;
  status: string;
  nin?: string;
  admin_phone_number: string;
  admin_email_address: string;
  residential_address?: string;
  admin_name: string;
};

export const ADMINLIST = [
  {
    id: "0",
    admin_name: "John Doe",
    lga: "Particular LGA",
    status: "active",
    admin_phone_number: "+2348064150715",
    admin_email_address: "jondoe@gmail.com",
    residential_address: "A place, LGA",
    nin: "12123643245",
  },
  {
    id: "1",
    admin_name: "Divine Leo",
    lga: "Particular LGA",
    status: "inactive",
    admin_phone_number: "+2348067150715",
    admin_email_address: "jondoe@gmail.com",
    residential_address: "A place, LGA",
    nin: "12123643245",
  },
  {
    id: "2",
    admin_name: "John Doe",
    lga: "Particular LGA",
    status: "active",
    admin_phone_number: "000000000",
    admin_email_address: "divineleo@gmail.com",
    residential_address: "A place, LGA",
    nin: "12123643245",
  },
  {
    id: "3",
    admin_name: "John Doe",
    lga: "Particular LGA",
    status: "active",
    admin_phone_number: "000000000",
    admin_email_address: "jondoe@gmail.com",
    residential_address: "A place, LGA",
    nin: "12123643245",
  },
  {
    id: "4",
    admin_name: "John Doe",
    lga: "Particular LGA",
    status: "inactive",
    admin_phone_number: "000000000",
    admin_email_address: "jondoe@gmail.com",
    residential_address: "A place, LGA",
    nin: "12123643245",
  },
  {
    id: "5",
    admin_name: "John Doe",
    lga: "Particular LGA",
    status: "inactive",
    admin_phone_number: "000000000",
    admin_email_address: "jondoe@gmail.com",
    residential_address: "A place, LGA",
    nin: "12123643245",
  },
  {
    id: "6",
    admin_name: "John Doe",
    lga: "Particular LGA",
    status: "inactive",
    admin_phone_number: "000000000",
    admin_email_address: "jondoe@gmail.com",
    residential_address: "A place, LGA",
    nin: "12123643245",
  },
  {
    id: "7",
    admin_name: "John Doe",
    lga: "Particular LGA",
    status: "inactive",
    admin_phone_number: "000000000",
    admin_email_address: "jondoe@gmail.com",
    residential_address: "A place, LGA",
    nin: "12123643245",
  },
  {
    id: "8",
    admin_name: "John Doe",
    lga: "Particular LGA",
    status: "inactive",
    admin_phone_number: "000000000",
    admin_email_address: "jondoe@gmail.com",
    residential_address: "A place, LGA",
    nin: "12123643245",
  },
];

export function AdminTable({ id }: { id: string }) {
  return (
    <>
      <Table className="mt-[20px] w-full">
        <TableHeader className="bg-black text-center text-white">
          <TableRow>
            <TableHead className="text-white ">Full Name</TableHead>
            <TableHead className="text-white">Residential Address</TableHead>
            <TableHead className="text-white">Phone Number</TableHead>
            <TableHead className="text-white text-center ">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ADMINLIST.map((value, k) => (
            <TableRow key={k}>
              <TableCell className=" text-left font-medium">
                {value.admin_name}
              </TableCell>
              <TableCell className=" text-left">{value.lga}</TableCell>
              <TableCell className=" text-left">
                {value.admin_phone_number}
              </TableCell>
              <TableCell className=" flex justify-between items-center text-left">
                <Badge className=" mx-auto rounded-full">{value.status}</Badge>{" "}
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
                      <DropdownMenuItem>
                        <Link href={`/admins/${value.id}`}>View Profile</Link>
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
