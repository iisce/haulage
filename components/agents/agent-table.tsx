'use client';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

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

export const AGENTLIST = [
	{
		id: '0',
		agent_name: 'John Doe',
		lga: 'Particular LGA',
		status: 'active',
		agent_phone_number: '+2348064150715',
		agent_email_address: 'jondoe@gmail.com',
		residential_address: 'A place, LGA',
		nin: '12123643245',
	},
	{
		id: '1',
		agent_name: 'Divine Leo',
		lga: 'Particular LGA',
		status: 'inactive',
		agent_phone_number: '+2348067150715',
		agent_email_address: 'jondoe@gmail.com',
		residential_address: 'A place, LGA',
		nin: '12123643245',
	},
	{
		id: '2',
		agent_name: 'John Doe',
		lga: 'Particular LGA',
		status: 'active',
		agent_phone_number: '000000000',
		agent_email_address: 'divineleo@gmail.com',
		residential_address: 'A place, LGA',
		nin: '12123643245',
	},
	{
		id: '3',
		agent_name: 'John Doe',
		lga: 'Particular LGA',
		status: 'active',
		agent_phone_number: '000000000',
		agent_email_address: 'jondoe@gmail.com',
		residential_address: 'A place, LGA',
		nin: '12123643245',
	},
	{
		id: '4',
		agent_name: 'John Doe',
		lga: 'Particular LGA',
		status: 'inactive',
		agent_phone_number: '000000000',
		agent_email_address: 'jondoe@gmail.com',
		residential_address: 'A place, LGA',
		nin: '12123643245',
	},
	{
		id: '5',
		agent_name: 'John Doe',
		lga: 'Particular LGA',
		status: 'inactive',
		agent_phone_number: '000000000',
		agent_email_address: 'jondoe@gmail.com',
		residential_address: 'A place, LGA',
		nin: '12123643245',
	},
	{
		id: '6',
		agent_name: 'John Doe',
		lga: 'Particular LGA',
		status: 'inactive',
		agent_phone_number: '000000000',
		agent_email_address: 'jondoe@gmail.com',
		residential_address: 'A place, LGA',
		nin: '12123643245',
	},
	{
		id: '7',
		agent_name: 'John Doe',
		lga: 'Particular LGA',
		status: 'inactive',
		agent_phone_number: '000000000',
		agent_email_address: 'jondoe@gmail.com',
		residential_address: 'A place, LGA',
		nin: '12123643245',
	},
	{
		id: '8',
		agent_name: 'John Doe',
		lga: 'Particular LGA',
		status: 'inactive',
		agent_phone_number: '000000000',
		agent_email_address: 'jondoe@gmail.com',
		residential_address: 'A place, LGA',
		nin: '12123643245',
	},
];
export function AgentTable() {
	return (
    <>
      <ScrollArea className="w-screen md:w-full ">
        <Table className="mt-[20px] md:w-full w-[900px] overflow-x-scroll ">
          <TableHeader className="bg-black text-center text-white">
            <TableRow>
              <TableHead className="text-white ">Full Name</TableHead>
              <TableHead className="text-white">L.G.A.</TableHead>
              <TableHead className="text-white">Phone Number</TableHead>
              <TableHead className="text-white text-center ">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {AGENTLIST.map((value, k) => (
              <TableRow key={k}>
                <TableCell className=" text-left font-medium">
                  {value.agent_name}
                </TableCell>
                <TableCell className=" text-left">{value.lga}</TableCell>
                <TableCell className=" text-left">
                  {value.agent_phone_number}
                </TableCell>
                <TableCell className=" flex justify-between items-center text-left">
                  <Badge className=" mx-auto rounded-full">
                    {value.status}
                  </Badge>{" "}
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
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <Table className="mt-[20px] md:w-full w-[900px] overflow-x-scroll ">
        <TableHeader className="bg-black text-center text-white">
          <TableRow>
            <TableHead className="text-white ">Full Name</TableHead>
            <TableHead className="text-white">L.G.A.</TableHead>
            <TableHead className="text-white">Phone Number</TableHead>
            <TableHead className="text-white text-center ">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {AGENTLIST.map((value, k) => (
            <TableRow key={k}>
              <TableCell className=" text-left font-medium">
                {value.agent_name}
              </TableCell>
              <TableCell className=" text-left">{value.lga}</TableCell>
              <TableCell className=" text-left">
                {value.agent_phone_number}
              </TableCell>
              <TableCell className=" flex justify-between items-center text-left">
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
      <div className="">
        <Pagination>
          <PaginationContent>
            <PaginationItem className=" list-none">
              <PaginationPrevious href="/" />
            </PaginationItem>
            <PaginationItem className=" list-none">
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className=" list-none">
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem className=" list-none">
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem className=" list-none">
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem className=" list-none">
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
