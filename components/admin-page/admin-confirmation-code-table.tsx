"use client";

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
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function AdminCodeTable({ codes }: { codes: ICode[] }) {
     return (
          <>
               <ScrollArea className="px-5">
                    <Table className="mt-[20px] min-w-[300px]">
                         <TableHeader className="bg-black text-center text-white">
                              <TableRow>
                                   <TableHead className="text-white">
                                        CODE
                                   </TableHead>
                                   <TableHead className="text-white">
                                        EMAIL
                                   </TableHead>
                                   <TableHead className="text-white">
                                        DATE CREATED
                                   </TableHead>
                              </TableRow>
                         </TableHeader>
                         <TableBody>
                              {codes.map((code, k) => (
                                   <TableRow key={k}>
                                        <TableCell className="text-left font-medium uppercase">
                                             {code.code}
                                        </TableCell>
                                        <TableCell className="text-left">
                                             {code.email}
                                        </TableCell>
                                        <TableCell className="text-left">
                                             {new Date(
                                                  code.createdAt,
                                             ).toLocaleDateString()}
                                        </TableCell>
                                   </TableRow>
                              ))}
                         </TableBody>
                    </Table>
                    <ScrollBar orientation="horizontal" />
               </ScrollArea>
          </>
     );
}
