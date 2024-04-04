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
  DropdownMenuSeparator,
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
} from "../ui/pagination";

const ADMINLIST = [
  {
    fullname: "John Doe",
    lga: "Particular LGA",
    status: "active",
    phoneno: "000000000",
  },
  {
    fullname: "John Doe",
    lga: "Particular LGA",
    status: "inactive",
    phoneno: "000000000",
  },
  {
    fullname: "John Doe",
    lga: "Particular LGA",
    status: "blacklisted",
    phoneno: "000000000",
  },
  {
    fullname: "John Doe",
    lga: "Particular LGA",
    status: "active",
    phoneno: "000000000",
  },
  {
    fullname: "John Doe",
    lga: "Particular LGA",
    status: "inactive",
    phoneno: "000000000",
  },
  {
    fullname: "John Doe",
    lga: "Particular LGA",
    status: "inactive",
    phoneno: "000000000",
  },
  {
    fullname: "John Doe",
    lga: "Particular LGA",
    status: "inactive",
    phoneno: "000000000",
  },
  {
    fullname: "John Doe",
    lga: "Particular LGA",
    status: "inactive",
    phoneno: "000000000",
  },
  {
    fullname: "John Doe",
    lga: "Particular LGA",
    status: "inactive",
    phoneno: "000000000",
  },
];

export function AdminTable() {
  return (
    <>
      <Table className="mt-[20px] w-full">
        <TableHeader className="bg-black text-center text-white">
          <TableRow>
            <TableHead className="text-white ">Full Name</TableHead>
            <TableHead className="text-white">L.G.A.</TableHead>
            <TableHead className="text-white">
              Phone Number
            </TableHead>
            <TableHead className="text-white text-center ">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ADMINLIST.map((value, k) => (
            <TableRow key={k}>
              <TableCell className=" text-left font-medium">
                {value.fullname}
              </TableCell>
              <TableCell className=" text-left">{value.lga}</TableCell>
              <TableCell className=" text-left">{value.phoneno}</TableCell>
              <TableCell className=" flex justify-between items-left text-left">
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
                        <Link href="" className="text-center">
                          View Profile
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
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
