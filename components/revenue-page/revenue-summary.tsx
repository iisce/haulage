"use client";
import React, { PureComponent } from "react";

import { Check, ArrowUpFromDot, ChevronsUpDown } from "lucide-react";
import {
     LineChart,
     Line,
     XAxis,
     YAxis,
     CartesianGrid,
     Tooltip,
     Legend,
     ResponsiveContainer,
} from "recharts";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
     Command,
     CommandEmpty,
     CommandGroup,
     CommandInput,
     CommandItem,
     CommandList,
} from "@/components/ui/command";
import {
     Popover,
     PopoverContent,
     PopoverTrigger,
} from "@/components/ui/popover";
import TyreButton from "./tyre-button";

type IDURATION = {
     value: string;
     label: string;
     price: string;
};

const DURATION: IDURATION[] = [
     {
          value: "Daily",
          label: "Daily",
          price: "30,000",
     },
     {
          value: "Weekly",
          label: "Weekly",
          price: "100,000",
     },
     {
          value: "Monthly",
          label: "Monthly",
          price: "300,000",
     },
     {
          value: "Annually",
          label: "Annually",
          price: "500,000",
     },
     {
          value: "Bi-annually",
          label: "Bi-annually",
          price: "900,000",
     },
];

const data = [
     {
          name: "Mon",
          levy: 10000,
     },
     {
          name: "Tues",
          levy: 20000,
     },
     {
          name: "Wed",
          levy: 30000,
     },
     {
          name: "Thurs",
          levy: 70000,
     },
     {
          name: "Fri",
          levy: 100000,
     },
     {
          name: "Sat",
          levy: 100000,
     },
     {
          name: "Sun",
          levy: 9000,
     },
];

export default function RevenueSummary() {
     const [open, setOpen] = React.useState(false);
     const [value, setValue] = React.useState("");
     return (
          <div className="grid w-full grid-cols-1 gap-5 p-5 lg:grid-cols-2">
               <div className="h-[154px] rounded-lg bg-black p-[15px]">
                    <div className="flex justify-between">
                         <h3 className="text-[16px] text-white">
                              Total Revenue
                         </h3>
                         <div className="">
                              <Popover open={open} onOpenChange={setOpen}>
                                   <PopoverTrigger asChild>
                                        <Button
                                             role="combobox"
                                             aria-expanded={open}
                                             className="justify-between bg-black text-white"
                                        >
                                             {value
                                                  ? DURATION.find(
                                                         (duration) =>
                                                              duration.value ===
                                                              value,
                                                    )?.label
                                                  : "Daily"}
                                             <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                   </PopoverTrigger>
                                   <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                             <CommandList>
                                                  <CommandEmpty>
                                                       No duration found.
                                                  </CommandEmpty>
                                                  <CommandGroup>
                                                       {DURATION.map(
                                                            (duration) => (
                                                                 <CommandItem
                                                                      key={
                                                                           duration.value
                                                                      }
                                                                      value={
                                                                           duration.value
                                                                      }
                                                                      onSelect={(
                                                                           currentValue,
                                                                      ) => {
                                                                           setValue(
                                                                                currentValue ===
                                                                                     value
                                                                                     ? ""
                                                                                     : currentValue,
                                                                           );
                                                                           setOpen(
                                                                                false,
                                                                           );
                                                                      }}
                                                                 >
                                                                      <Check
                                                                           className={cn(
                                                                                "mr-2 h-4 w-4",
                                                                                value ===
                                                                                     duration.value
                                                                                     ? "opacity-100"
                                                                                     : "opacity-0",
                                                                           )}
                                                                      />
                                                                      {
                                                                           duration.label
                                                                      }
                                                                 </CommandItem>
                                                            ),
                                                       )}
                                                  </CommandGroup>
                                             </CommandList>
                                        </Command>
                                   </PopoverContent>
                              </Popover>
                         </div>
                    </div>
                    <div className="flex items-center gap-3 pt-[17px]">
                         <div>
                              <p className="text-[40px] font-semibold text-white">
                                   <span>₦</span>
                                   {value
                                        ? DURATION.find(
                                               (duration) =>
                                                    duration.value === value,
                                          )?.price
                                        : "30,000"}
                              </p>
                         </div>
                         <div>
                              <p className="flex cursor-default items-center rounded-[40px] bg-white px-[10px] text-[12px] text-green-700">
                                   <ArrowUpFromDot className="h- w-4" />
                                   4.5%{" "}
                              </p>
                         </div>
                    </div>
                    <p className="text-[14px] text-[#9d9c9c]">From last week</p>
               </div>
               <div className="rounded-lg bg-[#eae9e9] p-[15px]">
                    <div className="flex w-full items-center justify-between">
                         <span className="">
                              <h3 className="text-[16px]">
                                   Revenue per tyre type
                              </h3>
                         </span>
                         <span>
                              <p className="text-[12px]">WEEKLY</p>
                         </span>
                    </div>

                    <div className="mt-[10px] flex flex-wrap justify-center gap-2">
                         <TyreButton tyre="8" />
                         <TyreButton tyre="12" />
                         <TyreButton tyre="14" />
                         <TyreButton tyre="18" />
                         <TyreButton tyre="24" />
                    </div>
                    <div className="mt-[20px] flex w-[85px] flex-col">
                         <h3 className="text-[30px]">30,000</h3>
                         <span className="text-right text-[10px] font-bold text-[#5a5a5a]">
                              NAIRA
                         </span>
                    </div>
                    <ResponsiveContainer
                         className={`w-[200px]`}
                         width="100%"
                         height={370}
                    >
                         <LineChart
                              width={500}
                              height={300}
                              data={data}
                              margin={{
                                   top: 25,
                                   right: 0,
                                   left: 0,
                                   bottom: 0,
                              }}
                         >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" fontSize="10px" />
                              <YAxis fontSize="10px" />
                              <Tooltip />
                              <Legend />
                              <Line
                                   type="monotone"
                                   dataKey="levy"
                                   stroke="#000000"
                                   activeDot={{ r: 4 }}
                              />
                         </LineChart>
                    </ResponsiveContainer>
               </div>
          </div>
     );
}
