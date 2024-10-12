"use client";

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
import { Pagination } from "@/components/ui/pagination";
import {
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
} from "@/components/ui/table";
import { DownloadIcon, FilterIcon, ListOrderedIcon } from "lucide-react";
import { useMemo, useState } from "react";

export interface ILevyData {
     id: number;
     dateTime: string;
     vehicleRegNo: string;
     category: string;
     route: string;
     levyAmount: number;
     isceAgent: string;
}

interface IFilterData {
     category: string[];
     route: string[];
     agent: string[];
}
export default function RevenueTable({ levyData }: { levyData: ILevyData[] }) {
     const [searchTerm, setSearchTerm] = useState<string>("");
     const [selectedFilters, setSelectedFilters] = useState<IFilterData>({
          category: [],
          route: [],
          agent: [],
     });
     const [sortBy, setSortBy] = useState({ key: "date", order: "desc" });
     const [currentPage, setCurrentPage] = useState(1);
     const filteredData = useMemo(() => {
          return levyData
               .filter((item) => {
                    const searchRegex = new RegExp(searchTerm, "i");
                    return (
                         searchRegex.test(item.vehicleRegNo) ||
                         searchRegex.test(item.category) ||
                         searchRegex.test(item.route) ||
                         searchRegex.test(item.isceAgent)
                    );
               })
               .filter((item) => {
                    if (selectedFilters.category.length > 0) {
                         return selectedFilters.category.includes(
                              item.category,
                         );
                    }
                    if (selectedFilters.route.length > 0) {
                         return selectedFilters.route.includes(item.route);
                    }
                    if (selectedFilters.agent.length > 0) {
                         return selectedFilters.agent.includes(item.isceAgent);
                    }
                    return true;
               })
               .sort((a, b) => {
                    if (sortBy.order === "asc") {
                         // @ts-ignore
                         return a[sortBy.key] > b[sortBy.key] ? 1 : -1;
                    } else {
                         // @ts-ignore
                         return a[sortBy.key] < b[sortBy.key] ? 1 : -1;
                    }
               });
     }, [levyData, searchTerm, selectedFilters, sortBy]);
     const itemsPerPage = 10;
     const totalPages = Math.ceil(filteredData.length / itemsPerPage);
     const startIndex = (currentPage - 1) * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;
     const currentPageData = filteredData.slice(startIndex, endIndex);
     const handleSearch = (e: any) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
     };
     const handleFilterChange = (type: string, value: string) => {
          setSelectedFilters((prevFilters) => ({
               ...prevFilters,
               // @ts-ignore
               [type]: prevFilters[type].includes(value)
                    ? // @ts-ignore
                      prevFilters[type].filter((item) => item !== value)
                    : // @ts-ignore
                      [...prevFilters[type], value],
          }));
          setCurrentPage(1);
     };
     const handleSort = (key: string) => {
          if (sortBy.key === key) {
               setSortBy({
                    key,
                    order: sortBy.order === "asc" ? "desc" : "asc",
               });
          } else {
               setSortBy({ key, order: "asc" });
          }
          setCurrentPage(1);
     };
     const handleDownload = () => {
          console.log("Downloading data...");
     };
     return (
          <div className="flex h-full w-full">
               <div className="flex-1 bg-muted/40 p-6">
                    <div className="grid gap-6">
                         <div className="flex items-center gap-4">
                              <Input
                                   type="search"
                                   placeholder="Search"
                                   value={searchTerm}
                                   onChange={handleSearch}
                                   className="flex-1"
                              />
                              <DropdownMenu>
                                   <DropdownMenuTrigger asChild>
                                        <Button
                                             variant="outline"
                                             className="h-9 gap-1"
                                        >
                                             <FilterIcon className="h-4 w-4" />
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
                                                  <DropdownMenuCheckboxItem
                                                       checked={selectedFilters.category.includes(
                                                            "Matatu",
                                                       )}
                                                       onCheckedChange={() =>
                                                            handleFilterChange(
                                                                 "category",
                                                                 "Matatu",
                                                            )
                                                       }
                                                  >
                                                       Matatu
                                                  </DropdownMenuCheckboxItem>
                                                  <DropdownMenuCheckboxItem
                                                       checked={selectedFilters.category.includes(
                                                            "Truck",
                                                       )}
                                                       onCheckedChange={() =>
                                                            handleFilterChange(
                                                                 "category",
                                                                 "Truck",
                                                            )
                                                       }
                                                  >
                                                       Truck
                                                  </DropdownMenuCheckboxItem>
                                                  <DropdownMenuCheckboxItem
                                                       checked={selectedFilters.category.includes(
                                                            "Bus",
                                                       )}
                                                       onCheckedChange={() =>
                                                            handleFilterChange(
                                                                 "category",
                                                                 "Bus",
                                                            )
                                                       }
                                                  >
                                                       Bus
                                                  </DropdownMenuCheckboxItem>
                                             </div>
                                             <div>
                                                  <DropdownMenuCheckboxItem
                                                       checked={selectedFilters.route.includes(
                                                            "Nairobi - Nakuru",
                                                       )}
                                                       onCheckedChange={() =>
                                                            handleFilterChange(
                                                                 "route",
                                                                 "Nairobi - Nakuru",
                                                            )
                                                       }
                                                  >
                                                       Nairobi - Nakuru
                                                  </DropdownMenuCheckboxItem>
                                                  <DropdownMenuCheckboxItem
                                                       checked={selectedFilters.route.includes(
                                                            "Mombasa - Nairobi",
                                                       )}
                                                       onCheckedChange={() =>
                                                            handleFilterChange(
                                                                 "route",
                                                                 "Mombasa - Nairobi",
                                                            )
                                                       }
                                                  >
                                                       Mombasa - Nairobi
                                                  </DropdownMenuCheckboxItem>
                                                  <DropdownMenuCheckboxItem
                                                       checked={selectedFilters.route.includes(
                                                            "Kisumu - Nairobi",
                                                       )}
                                                       onCheckedChange={() =>
                                                            handleFilterChange(
                                                                 "route",
                                                                 "Kisumu - Nairobi",
                                                            )
                                                       }
                                                  >
                                                       Kisumu - Nairobi
                                                  </DropdownMenuCheckboxItem>
                                             </div>
                                             <div>
                                                  <DropdownMenuCheckboxItem
                                                       checked={selectedFilters.agent.includes(
                                                            "John Doe",
                                                       )}
                                                       onCheckedChange={() =>
                                                            handleFilterChange(
                                                                 "agent",
                                                                 "John Doe",
                                                            )
                                                       }
                                                  >
                                                       John Doe
                                                  </DropdownMenuCheckboxItem>
                                                  <DropdownMenuCheckboxItem
                                                       checked={selectedFilters.agent.includes(
                                                            "Jane Smith",
                                                       )}
                                                       onCheckedChange={() =>
                                                            handleFilterChange(
                                                                 "agent",
                                                                 "Jane Smith",
                                                            )
                                                       }
                                                  >
                                                       Jane Smith
                                                  </DropdownMenuCheckboxItem>
                                                  <DropdownMenuCheckboxItem
                                                       checked={selectedFilters.agent.includes(
                                                            "Bob Johnson",
                                                       )}
                                                       onCheckedChange={() =>
                                                            handleFilterChange(
                                                                 "agent",
                                                                 "Bob Johnson",
                                                            )
                                                       }
                                                  >
                                                       Bob Johnson
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
                                             <ListOrderedIcon className="h-4 w-4" />
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
                                        <DropdownMenuRadioGroup
                                             value={sortBy.key}
                                             onValueChange={handleSort}
                                        >
                                             <DropdownMenuRadioItem value="dateTime">
                                                  Date/Time
                                             </DropdownMenuRadioItem>
                                             <DropdownMenuRadioItem value="vehicleRegNo">
                                                  Vehicle Reg. No.
                                             </DropdownMenuRadioItem>
                                             <DropdownMenuRadioItem value="category">
                                                  Category
                                             </DropdownMenuRadioItem>
                                             <DropdownMenuRadioItem value="route">
                                                  Route
                                             </DropdownMenuRadioItem>
                                             <DropdownMenuRadioItem value="levyAmount">
                                                  Levy Amount
                                             </DropdownMenuRadioItem>
                                             <DropdownMenuRadioItem value="isceAgent">
                                                  ISCE Agent
                                             </DropdownMenuRadioItem>
                                        </DropdownMenuRadioGroup>
                                   </DropdownMenuContent>
                              </DropdownMenu>
                              <Button
                                   variant="outline"
                                   onClick={handleDownload}
                                   className="h-9 gap-1"
                              >
                                   <DownloadIcon className="h-4 w-4" />
                                   <span className="sr-only lg:not-sr-only">
                                        Download
                                   </span>
                              </Button>
                         </div>
                         <Table>
                              <TableHeader>
                                   <TableRow>
                                        <TableHead
                                             onClick={() =>
                                                  handleSort("dateTime")
                                             }
                                        >
                                             Date/Time
                                             {sortBy.key === "dateTime" && (
                                                  <span className="ml-2">
                                                       {sortBy.order === "asc"
                                                            ? "\u2191"
                                                            : "\u2193"}
                                                  </span>
                                             )}
                                        </TableHead>
                                        <TableHead
                                             onClick={() =>
                                                  handleSort("vehicleRegNo")
                                             }
                                        >
                                             Vehicle Reg. No.
                                             {sortBy.key === "vehicleRegNo" && (
                                                  <span className="ml-2">
                                                       {sortBy.order === "asc"
                                                            ? "\u2191"
                                                            : "\u2193"}
                                                  </span>
                                             )}
                                        </TableHead>
                                        <TableHead
                                             onClick={() =>
                                                  handleSort("category")
                                             }
                                        >
                                             Category
                                             {sortBy.key === "category" && (
                                                  <span className="ml-2">
                                                       {sortBy.order === "asc"
                                                            ? "\u2191"
                                                            : "\u2193"}
                                                  </span>
                                             )}
                                        </TableHead>
                                        <TableHead
                                             onClick={() => handleSort("route")}
                                        >
                                             Route
                                             {sortBy.key === "route" && (
                                                  <span className="ml-2">
                                                       {sortBy.order === "asc"
                                                            ? "\u2191"
                                                            : "\u2193"}
                                                  </span>
                                             )}
                                        </TableHead>
                                        <TableHead
                                             onClick={() =>
                                                  handleSort("levyAmount")
                                             }
                                        >
                                             Levy Amount
                                             {sortBy.key === "levyAmount" && (
                                                  <span className="ml-2">
                                                       {sortBy.order === "asc"
                                                            ? "\u2191"
                                                            : "\u2193"}
                                                  </span>
                                             )}
                                        </TableHead>
                                        <TableHead
                                             onClick={() =>
                                                  handleSort("isceAgent")
                                             }
                                        >
                                             ISCE Agent
                                             {sortBy.key === "isceAgent" && (
                                                  <span className="ml-2">
                                                       {sortBy.order === "asc"
                                                            ? "\u2191"
                                                            : "\u2193"}
                                                  </span>
                                             )}
                                        </TableHead>
                                   </TableRow>
                              </TableHeader>
                              <TableBody>
                                   {currentPageData.map((item) => (
                                        <TableRow key={item.id}>
                                             <TableCell>
                                                  {item.dateTime}
                                             </TableCell>
                                             <TableCell>
                                                  {item.vehicleRegNo}
                                             </TableCell>
                                             <TableCell>
                                                  {item.category}
                                             </TableCell>
                                             <TableCell>{item.route}</TableCell>
                                             <TableCell className="text-right">
                                                  {item.levyAmount}
                                             </TableCell>
                                             <TableCell>
                                                  {item.isceAgent}
                                             </TableCell>
                                        </TableRow>
                                   ))}
                              </TableBody>
                         </Table>
                         <div className="flex items-center justify-between">
                              <Pagination />
                              <Button
                                   variant="outline"
                                   onClick={handleDownload}
                              >
                                   <DownloadIcon className="mr-2 h-4 w-4" />
                                   Download
                              </Button>
                         </div>
                    </div>
               </div>
          </div>
     );
}
