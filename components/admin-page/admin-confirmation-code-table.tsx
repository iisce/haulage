"use client";

import {
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { format, isBefore } from "date-fns";
import { AdminEmailCode } from "@prisma/client";

export function AdminCodeTable({ codes }: { codes: AdminEmailCode[] }) {
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
                                   <TableHead className="text-white">
                                        USED
                                   </TableHead>
                                   <TableHead className="text-white">
                                        EXPIRED
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
                                             {format(
                                                  new Date(code.createdAt),
                                                  "dd/LL/yyyy",
                                             )}
                                        </TableCell>
                                        <TableCell>
                                             {code.isUsed
                                                  ? format(
                                                         new Date(
                                                              code.createdAt,
                                                         ),
                                                         "dd/LL/yyyy",
                                                    )
                                                  : "Not Used"}
                                        </TableCell>
                                        <TableCell>
                                             {code.expiresAt &&
                                             isBefore(
                                                  new Date(code.expiresAt),
                                                  new Date(),
                                             )
                                                  ? "EXPIRED"
                                                  : "ACTIVE"}
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
