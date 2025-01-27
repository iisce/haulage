import DashboardTotalRevenue from "./dashboard-total-revenue";
import RecentActivities from "../RecentActivities";
import { Suspense } from "react";
import DashboardCardList from "./DashboardCardList";
import DashboardCardListSkeleton from "./DashboardCardListSkeleton";

export default function SuperAdminDashboard() {
     return (
          <div className="grid h-full w-full grid-cols-4 gap-4 p-5">
               <div className="col-span-4 flex w-full flex-col gap-5 pb-5 xl:col-span-3">
                    <Suspense fallback={<DashboardCardListSkeleton />}>
                         <DashboardCardList />
                    </Suspense>
                    <div className="grid gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                         <DashboardTotalRevenue
                              title={"Yearly"}
                              description={"Total amount of yearly Revenue"}
                              amount={19333}
                         />
                         <DashboardTotalRevenue
                              title={"Monthly"}
                              description={"Total amount of monthly Revenue"}
                              amount={99848}
                         />
                         <DashboardTotalRevenue
                              title={"Weekly"}
                              description={"Total amount of weekly Revenue"}
                              amount={88490}
                         />
                         <DashboardTotalRevenue
                              title={"Daily"}
                              description={"Total amount of daily Revenue"}
                              amount={475}
                         />
                    </div>
               </div>
               <Suspense fallback={<div>Loading...</div>}>
                    <RecentActivities />
               </Suspense>
          </div>
     );
}
