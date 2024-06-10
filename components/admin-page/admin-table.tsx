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
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { EyeIcon, Menu } from "lucide-react";

export function AdminTable({ admins }: { admins: IAdmin[] }) {
     return (
          <>
               <ScrollArea className="">
                    <Table className="mt-[20px] min-w-[600px]">
                         <TableHeader className="bg-black text-center text-white">
                              <TableRow>
                                   <TableHead className="text-white">
                                        Full Name
                                   </TableHead>
                                   <TableHead className="text-white">
                                        Email
                                   </TableHead>
                                   <TableHead className="text-white">
                                        Phone Number
                                   </TableHead>
                                   <TableHead className="text-center text-white">
                                        Status
                                   </TableHead>
                                   <TableHead className="w-fit text-center text-white"></TableHead>
                              </TableRow>
                         </TableHeader>
                         <TableBody>
                              {admins.map((admin, k) => (
                                   <TableRow key={k}>
                                        <TableCell className="text-left font-medium">
                                             <Link
                                                  className="w-full"
                                                  href={`/admins/${admin._id}`}
                                             >
                                                  {admin.fullname}
                                             </Link>
                                        </TableCell>
                                        <TableCell className="text-left">
                                             {admin.email}
                                        </TableCell>
                                        <TableCell className="text-left">
                                             {admin.phonenumber}
                                        </TableCell>
                                        <TableCell className="text-left">
                                             {admin.lga}
                                        </TableCell>
                                        <TableCell className="w-14">
                                             <Link
                                                  className="flex items-center justify-center gap-2"
                                                  href={`/admins/${admin._id}`}
                                             >
                                                  <EyeIcon />
                                             </Link>
                                        </TableCell>
                                   </TableRow>
                              ))}
                         </TableBody>
                    </Table>
                    <ScrollBar orientation="horizontal" />
               </ScrollArea>
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
