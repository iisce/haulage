import { fetchTransactions } from "@/actions/transactions";
import TransactionsList from "@/components/TransactionsList";
import { Button } from "@/components/ui/button";
import {
     DropdownMenu,
     DropdownMenuCheckboxItem,
     DropdownMenuContent,
     DropdownMenuLabel,
     DropdownMenuRadioGroup,
     DropdownMenuRadioItem,
     DropdownMenuSeparator,
     DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
     Pagination,
     PaginationContent,
     PaginationEllipsis,
     PaginationItem,
     PaginationLink,
     PaginationNext,
     PaginationPrevious,
} from "@/components/ui/pagination";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Filter, ListOrdered } from "lucide-react";

export default async function TransactionPage(props: {
     searchParams?: SearchParams;
}) {
     const searchParams = await props.searchParams;
     const transactions = (await fetchTransactions()).data;
     return (
          <div className="flex h-full w-full">
               <div className="flex-1 bg-muted/40 p-6">
                    <div className="grid gap-6">
                         <div className="flex items-center gap-4">
                              <Input
                                   type="search"
                                   placeholder="Search"
                                   // value={searchTerm}
                                   // onChange={handleSearch}
                                   className="flex-1"
                              />
                              <DropdownMenu>
                                   <DropdownMenuTrigger asChild>
                                        <Button
                                             variant="outline"
                                             className="h-9 gap-1"
                                        >
                                             <Filter className="h-4 w-4" />
                                             <span className="sr-only lg:not-sr-only">
                                                  Filters
                                             </span>
                                        </Button>
                                   </DropdownMenuTrigger>
                                   <DropdownMenuContent
                                        align="end"
                                        className="w-[300px]"
                                   >
                                        <DropdownMenuLabel>
                                             Filters
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <div className="grid gap-4">
                                             <div>
                                                  <DropdownMenuCheckboxItem>
                                                       Matatu
                                                  </DropdownMenuCheckboxItem>
                                                  <DropdownMenuCheckboxItem>
                                                       Truck
                                                  </DropdownMenuCheckboxItem>
                                                  <DropdownMenuCheckboxItem>
                                                       Bus
                                                  </DropdownMenuCheckboxItem>
                                             </div>
                                        </div>
                                   </DropdownMenuContent>
                              </DropdownMenu>
                              <DropdownMenu>
                                   <DropdownMenuTrigger asChild>
                                        <Button
                                             variant="outline"
                                             className="h-9 gap-1"
                                        >
                                             <ListOrdered className="h-4 w-4" />
                                             <span className="sr-only lg:not-sr-only">
                                                  Sort
                                             </span>
                                        </Button>
                                   </DropdownMenuTrigger>
                                   <DropdownMenuContent
                                        align="end"
                                        className="w-[200px]"
                                   >
                                        <DropdownMenuLabel>
                                             Sort by
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuRadioGroup>
                                             <DropdownMenuRadioItem value="dateTime">
                                                  Date/Time
                                             </DropdownMenuRadioItem>
                                        </DropdownMenuRadioGroup>
                                   </DropdownMenuContent>
                              </DropdownMenu>
                              <Button variant="outline" className="h-9 gap-1">
                                   <Download className="h-4 w-4" />
                                   <span className="sr-only lg:not-sr-only">
                                        Download
                                   </span>
                              </Button>
                         </div>
                         <Table>
                              <TableHeader>
                                   <TableRow>
                                        <TableHead>DATE/TIME</TableHead>
                                        <TableHead>STATUS</TableHead>
                                        <TableHead>AMOUNT</TableHead>
                                   </TableRow>
                              </TableHeader>
                              <TransactionsList transactions={transactions} />
                         </Table>
                         <div className="flex items-center justify-center">
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
                                             <PaginationLink href="#">
                                                  2
                                             </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem className="list-none">
                                             <PaginationLink href="#">
                                                  3
                                             </PaginationLink>
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
                    </div>
               </div>
          </div>
     );
}
