"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
     Pagination,
     PaginationContent,
     PaginationEllipsis,
     PaginationItem,
     PaginationLink,
     PaginationNext,
     PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
     totalItems: number;
     itemsPerPage: number;
}

export function PaginationControls({
     totalItems,
     itemsPerPage,
}: PaginationProps) {
     const router = useRouter();
     const pathname = usePathname();
     const searchParams = useSearchParams();
     const currentPage = Number(searchParams.get("page")) || 1;
     const totalPages = Math.ceil(totalItems / itemsPerPage);

     const createQueryString = (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString());
          params.set(name, value);
          return params.toString();
     };

     const handlePageChange = (page: number) => {
          if (page >= 1 && page <= totalPages) {
               router.push(
                    pathname + "?" + createQueryString("page", page.toString()),
               );
          }
     };

     const renderPageNumbers = () => {
          const pageNumbers = [];
          const maxVisiblePages = 3;
          let startPage = Math.max(1, currentPage - 1);
          const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

          if (endPage - startPage + 1 < maxVisiblePages) {
               startPage = Math.max(1, endPage - maxVisiblePages + 1);
          }

          for (let i = startPage; i <= endPage; i++) {
               pageNumbers.push(
                    <PaginationItem key={i} className="list-none">
                         <PaginationLink
                              href={
                                   pathname +
                                   "?" +
                                   createQueryString("page", i.toString())
                              }
                              isActive={i === currentPage}
                         >
                              {i}
                         </PaginationLink>
                    </PaginationItem>,
               );
          }

          return pageNumbers;
     };

     return (
          <div className="">
               <Pagination>
                    <PaginationContent>
                         <PaginationItem className="list-none">
                              <PaginationLink
                                   href={
                                        pathname +
                                        "?" +
                                        createQueryString("page", "1")
                                   }
                                   onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(1);
                                   }}
                                   className={cn(
                                        currentPage === 1 &&
                                             "pointer-events-none opacity-50",
                                   )}
                              >
                                   <ChevronsLeft className="h-4 w-4" />
                              </PaginationLink>
                         </PaginationItem>
                         <PaginationItem className="list-none">
                              <PaginationPrevious
                                   href={
                                        pathname +
                                        "?" +
                                        createQueryString(
                                             "page",
                                             (currentPage - 1).toString(),
                                        )
                                   }
                                   onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(currentPage - 1);
                                   }}
                                   className={cn(
                                        currentPage === 1 &&
                                             "pointer-events-none opacity-50",
                                   )}
                              />
                         </PaginationItem>
                         {renderPageNumbers()}
                         {totalPages > 3 && currentPage < totalPages - 1 && (
                              <PaginationItem className="list-none">
                                   <PaginationEllipsis />
                              </PaginationItem>
                         )}
                         <PaginationItem className="list-none">
                              <PaginationNext
                                   href={
                                        pathname +
                                        "?" +
                                        createQueryString(
                                             "page",
                                             (currentPage + 1).toString(),
                                        )
                                   }
                                   onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(currentPage + 1);
                                   }}
                                   className={cn(
                                        currentPage === totalPages &&
                                             "pointer-events-none opacity-50",
                                   )}
                              />
                         </PaginationItem>
                         <PaginationItem className="list-none">
                              <PaginationLink
                                   href={
                                        pathname +
                                        "?" +
                                        createQueryString(
                                             "page",
                                             totalPages.toString(),
                                        )
                                   }
                                   onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(totalPages);
                                   }}
                                   className={cn(
                                        currentPage === totalPages &&
                                             "pointer-events-none opacity-50",
                                   )}
                              >
                                   <ChevronsRight className="h-4 w-4" />
                              </PaginationLink>
                         </PaginationItem>
                    </PaginationContent>
               </Pagination>
          </div>
     );
}
