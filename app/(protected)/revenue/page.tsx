import RevenueTable, { ILevyData } from "@/components/revenue-page/revenue";
import Revenue from "@/components/revenue-page/revenue";
import RevenueSummary from "@/components/revenue-page/revenue-summary";
import React from "react";

const REVENUE_DATA: ILevyData[] = [
     {
          id: 1,
          dateTime: "2023-06-01 10:30:00",
          vehicleRegNo: "KAA 123",
          category: "Matatu",
          route: "Nairobi - Nakuru",
          levyAmount: 500,
          isceAgent: "John Doe",
     },
     {
          id: 2,
          dateTime: "2023-06-02 11:45:00",
          vehicleRegNo: "KBB 456",
          category: "Truck",
          route: "Mombasa - Nairobi",
          levyAmount: 800,
          isceAgent: "Jane Smith",
     },
     {
          id: 3,
          dateTime: "2023-06-03 14:20:00",
          vehicleRegNo: "KCC 789",
          category: "Matatu",
          route: "Kisumu - Nairobi",
          levyAmount: 450,
          isceAgent: "Bob Johnson",
     },
     {
          id: 4,
          dateTime: "2023-06-04 09:00:00",
          vehicleRegNo: "KDD 321",
          category: "Bus",
          route: "Nairobi - Mombasa",
          levyAmount: 600,
          isceAgent: "Alice Williams",
     },
     {
          id: 5,
          dateTime: "2023-06-05 16:15:00",
          vehicleRegNo: "KEE 654",
          category: "Truck",
          route: "Nakuru - Nairobi",
          levyAmount: 750,
          isceAgent: "David Brown",
     },
     {
          id: 6,
          dateTime: "2023-06-06 13:40:00",
          vehicleRegNo: "KFF 987",
          category: "Matatu",
          route: "Nairobi - Kisumu",
          levyAmount: 400,
          isceAgent: "Sarah Davis",
     },
     {
          id: 7,
          dateTime: "2023-06-07 15:05:00",
          vehicleRegNo: "KGG 159",
          category: "Bus",
          route: "Mombasa - Nairobi",
          levyAmount: 550,
          isceAgent: "Michael Wilson",
     },
     {
          id: 8,
          dateTime: "2023-06-08 11:25:00",
          vehicleRegNo: "KHH 753",
          category: "Truck",
          route: "Nairobi - Nakuru",
          levyAmount: 700,
          isceAgent: "Emily Taylor",
     },
];

export default function RevenuePage() {
     return (
          <div className="">
               {/* <RevenueSummary /> */}
               <RevenueTable levyData={REVENUE_DATA} />
          </div>
     );
}
