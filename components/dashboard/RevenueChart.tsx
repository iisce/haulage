"use client";

import { useState, useEffect } from "react";
import {
     Bar,
     BarChart,
     ResponsiveContainer,
     XAxis,
     YAxis,
     Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "@/components/ui/select";
import { getRevenueData } from "@/data/revenue";

export function RevenueChart() {
     const [timeframe, setTimeframe] = useState<
          "daily" | "weekly" | "monthly" | "yearly"
     >("monthly");
     const [data, setData] = useState<ChartData[]>([]);
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
          async function fetchData() {
               setIsLoading(true);
               const revenueData = await getRevenueData(timeframe);
               setData(revenueData);
               setIsLoading(false);
          }

          fetchData();
     }, [timeframe]);

     return (
          <Card className="col-span-4">
               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle>Revenue Overview</CardTitle>
                    <Select
                         value={timeframe}
                         onValueChange={(value) =>
                              setTimeframe(value as typeof timeframe)
                         }
                    >
                         <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select timeframe" />
                         </SelectTrigger>
                         <SelectContent>
                              <SelectItem value="daily">Daily</SelectItem>
                              <SelectItem value="weekly">Weekly</SelectItem>
                              <SelectItem value="monthly">Monthly</SelectItem>
                              <SelectItem value="yearly">Yearly</SelectItem>
                         </SelectContent>
                    </Select>
               </CardHeader>
               <CardContent className="pl-2">
                    {isLoading ? (
                         <div className="flex h-[350px] items-center justify-center">
                              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                         </div>
                    ) : (
                         <ResponsiveContainer width="100%" height={350}>
                              <BarChart data={data}>
                                   <XAxis
                                        dataKey="name"
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                   />
                                   <YAxis
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(value) =>
                                             `₦${value.toLocaleString()}`
                                        }
                                   />
                                   <Bar
                                        dataKey="total"
                                        fill="currentColor"
                                        radius={[4, 4, 0, 0]}
                                        className="fill-primary"
                                   />
                                   <Tooltip
                                        formatter={(value: number) => [
                                             `₦${value.toLocaleString()}`,
                                             "Revenue",
                                        ]}
                                        cursor={{ fill: "transparent" }}
                                   />
                              </BarChart>
                         </ResponsiveContainer>
                    )}
               </CardContent>
          </Card>
     );
}
