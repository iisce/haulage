import { Suspense } from "react";
import DashboardCardListSkeleton from "./DashboardCardListSkeleton";
import DashboardCardList from "./DashboardCardList";
import DashboardRevenueListSkeleton from "./DashboardRevenueListSkeleton";
import DashboardTotalRevenueList from "./DashboardTotalRevenueList";

export default async function AdminDashboard() {
     return (
          <div className="grid h-full w-full grid-cols-4 gap-4 p-5">
               <div className="col-span-4 flex w-full flex-col gap-5 pb-5">
                    <Suspense fallback={<DashboardCardListSkeleton />}>
                         <DashboardCardList />
                    </Suspense>
                    <Suspense fallback={<DashboardRevenueListSkeleton />}>
                         <DashboardTotalRevenueList />
                    </Suspense>
               </div>
          </div>
     );
}
