import {
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
} from "@/components/ui/table";
import { getAgents } from "@/data/agent";
import Link from "next/link";
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuGroup,
     DropdownMenuItem,
     DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export type AGENTTYPE = {
     id: string;
     lga: string;
     status: string;
     nin?: string;
     agent_phone_number: string;
     agent_email_address: string;
     residential_address?: string;
     agent_name: string;
};

export async function AgentTable() {
     const agents = await getAgents();
     return (
          <>
               <Table className="mt-[20px] w-[900px] overflow-x-scroll md:w-full">
                    <TableHeader className="bg-black text-center text-white">
                         <TableRow>
                              <TableHead className="text-white">
                                   Full Name
                              </TableHead>
                              <TableHead className="text-white">
                                   L.G.A.
                              </TableHead>
                              <TableHead className="text-white">
                                   Phone Number
                              </TableHead>
                              <TableHead className="text-center text-white">
                                   Status
                              </TableHead>
                         </TableRow>
                    </TableHeader>
                    <TableBody>
                         {agents.map((value, k) => (
                              <TableRow key={k}>
                                   <TableCell className="text-left font-medium">
                                        {value.firstName} {value.lastName}
                                   </TableCell>
                                   <TableCell className="text-left">
                                        {value.lga}
                                   </TableCell>
                                   <TableCell className="text-left">
                                        {value.phonenumber}
                                   </TableCell>
                                   <TableCell className="flex items-center justify-between text-left">
                                        <DropdownMenu>
                                             <DropdownMenuTrigger
                                                  className="cursor-pointer"
                                                  asChild
                                             >
                                                  <div className="flex flex-col gap-0.5">
                                                       <div className="h-[3px] w-[3px] rounded-full bg-black"></div>
                                                       <div className="h-[3px] w-[3px] rounded-full bg-black"></div>
                                                       <div className="h-[3px] w-[3px] rounded-full bg-black"></div>
                                                  </div>
                                             </DropdownMenuTrigger>
                                             <DropdownMenuContent>
                                                  <DropdownMenuGroup>
                                                       <DropdownMenuItem>
                                                            <Link
                                                                 href={`/agents/${value.id}`}
                                                                 className="text-center"
                                                            >
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
               {/* <div className="">
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
               </div> */}
          </>
     );
}
