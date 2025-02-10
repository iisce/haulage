import { Suspense } from "react";
import DashboardCardList from "./DashboardCardList";
import DashboardCardListSkeleton from "./DashboardCardListSkeleton";
import RecentActivitiesSkeleton from "../RecentActivitiesSkeleton";
import RecentActivities from "../RecentActivities";
import DashboardTotalRevenueList from "./DashboardTotalRevenueList";
import DashboardRevenueListSkeleton from "./DashboardRevenueListSkeleton";
import { RevenueChart } from "./RevenueChart";

export default async function SuperAdminDashboard() {
     return (
          <div className="grid h-full w-full grid-cols-4 gap-4 p-5">
               <div className="col-span-4 flex w-full flex-col gap-5 pb-5 xl:col-span-3">
                    <Suspense fallback={<DashboardCardListSkeleton />}>
                         <DashboardCardList />
                    </Suspense>
                    <Suspense fallback={<DashboardRevenueListSkeleton />}>
                         <DashboardTotalRevenueList />
                    </Suspense>
                    <RevenueChart />
               </div>
               <Suspense fallback={<RecentActivitiesSkeleton />}>
                    <RecentActivities />
               </Suspense>
          </div>
     );
}
