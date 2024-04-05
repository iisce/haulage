import React from "react";
import DashboardTotalCard from "./dashboard-total-card";
import DashoardTotalRevenue from "./dashoard-total-revenue";

export default function SuperAdminDashboard() {
  return (
    <div className="flex flex-col md:flex-row h-full p-5 gap-5">
      <div className=" flex flex-col w-3/4 gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <DashboardTotalCard
            title={"Admin"}
            description={"Total number of admins"}
            amount={10}
          />
          <DashboardTotalCard
            title={"Agent"}
            description={"Total number of Agent"}
            amount={500}
          />
          <DashboardTotalCard
            title={"Vehicles"}
            description={"Total number of Vehicles"}
            amount={10000}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <DashoardTotalRevenue
            title={"Yearly"}
            description={"Total amount of yearly Revenue"}
            amount={"#19,333"}
          />
          <DashoardTotalRevenue
            title={"Monthly"}
            description={"Total amount of monthly Revenue"}
            amount={"#99,848"}
          />
          <DashoardTotalRevenue
            title={"Weekly"}
            description={"Total amount of weekly Revenue"}
            amount={"#88,490"}
          />
          <DashoardTotalRevenue
            title={"Daily"}
            description={"Total amount of daily Revenue"}
            amount={"#475"}
          />
        </div>
      </div>
      <div className=" hidden md:grid bg-blue-100 w-1/4  "></div>
    </div>
  );
}
