import {
     getDailyRevenue,
     getMonthlyRevenue,
     getTotalRevenue,
     getWeeklyRevenue,
     getYearlyRevenue,
} from "@/data/revenue";
import DashboardTotalRevenue from "./dashboard-total-revenue";
import {
     formatDateForAPI,
     formatMonthForAPI,
     formatWeekForAPI,
} from "@/lib/utils";

export default async function DashboardTotalRevenueList() {
     const currentYear = new Date().getFullYear().toString();
     const currentMonth = formatMonthForAPI(new Date());
     const currentWeek = formatWeekForAPI(new Date());
     const currentDay = formatDateForAPI(new Date());

     const [
          { totalRevenue },
          { totalRevenue: yearlyRevenue },
          { totalRevenue: monthlyRevenue },
          { totalRevenue: weeklyRevenue },
          { totalRevenue: dailyRevenue },
     ] = await Promise.all([
          getTotalRevenue(),
          getYearlyRevenue(currentYear),
          getMonthlyRevenue(currentMonth),
          getWeeklyRevenue(currentWeek),
          getDailyRevenue(currentDay),
     ]);

     return (
          <div className="grid gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
               <DashboardTotalRevenue
                    title={"Total"}
                    description={"Total Revenue All Time"}
                    amount={totalRevenue}
               />
               <DashboardTotalRevenue
                    title={"Yearly"}
                    description={"Total amount of yearly Revenue"}
                    amount={yearlyRevenue}
               />
               <DashboardTotalRevenue
                    title={"Monthly"}
                    description={"Total amount of monthly Revenue"}
                    amount={monthlyRevenue}
               />
               <DashboardTotalRevenue
                    title={"Weekly"}
                    description={"Total amount of weekly Revenue"}
                    amount={weeklyRevenue}
               />
               <DashboardTotalRevenue
                    title={"Daily"}
                    description={"Total amount of daily Revenue"}
                    amount={dailyRevenue}
               />
          </div>
     );
}
