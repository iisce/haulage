import { Transaction } from "@prisma/client";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";

export default function TransactionsList({
     transactions,
}: {
     transactions?: Transaction[];
}) {
     return (
          <TableBody>
               {transactions ? (
                    transactions.map((item) => (
                         <TableRow key={item.id}>
                              <TableCell>
                                   {format(
                                        item.createdAt,
                                        "yyyy-LL-dd hh:mm aa",
                                   )}
                              </TableCell>
                              <TableCell>{item.status}</TableCell>
                              <TableCell className="text-right">
                                   {item.amount}
                              </TableCell>
                         </TableRow>
                    ))
               ) : (
                    <TableRow>
                         <TableCell colSpan={4}>No transactions.</TableCell>
                    </TableRow>
               )}
          </TableBody>
     );
}
