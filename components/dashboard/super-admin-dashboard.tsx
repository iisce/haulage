import React from "react";
import DashboardTotalCard from "./dashboard-total-card";
import DashoardTotalRevenue from "./dashoard-total-revenue";

export default function SuperAdminDashboard() {
  return (
    <div className="flex flex-col md:flex-row  h-full m-5 gap-5">
      <div className=" flex flex-col w-3/4 gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <DashboardTotalCard />
          <DashboardTotalCard />
          <DashboardTotalCard />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <DashoardTotalRevenue />
          <DashoardTotalRevenue />
          <DashoardTotalRevenue />
          <DashoardTotalRevenue />
        </div>
      </div>
      <div className=" hidden md:block bg-blue-100 w-1/4 ">
        <div className="m-5 ">Activities</div>
      </div>
    </div>
  );
}
