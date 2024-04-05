import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
  export function PaginationDemo() {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem className="list-none">
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem className="list-none">
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem className="list-none">
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
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
    )
  }
  