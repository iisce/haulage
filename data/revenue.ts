"use server";

import { revalidatePath } from "next/cache";
import { BASE_URL } from "@/constants";
import {
     formatDateForAPI,
     formatMonthForAPI,
     formatWeekForAPI,
} from "@/lib/utils";
import { format, subDays, subMonths, subWeeks, subYears } from "date-fns";

async function fetchRevenueFromAPI(endpoint: string): Promise<number> {
     const response = await fetch(`${BASE_URL}${endpoint}`);
     if (!response.ok) {
          throw new Error(`API request failed: ${response.statusText}`);
     }
     const data = await response.json();
     return data.totalRevenue;
}

export async function getTotalRevenue() {
     try {
          const revenue = await fetchRevenueFromAPI(
               "/api/transactions/revenue/all",
          );
          revalidatePath("/api/transactions/revenue/all");
          return { totalRevenue: revenue };
     } catch (error) {
          console.error("Failed to fetch total revenue:", error);
          throw new Error("Failed to fetch revenue.");
     }
}

export async function getYearlyRevenue(year: string) {
     try {
          const revenue = await fetchRevenueFromAPI(
               `/api/transactions/revenue/year?year=${year}`,
          );
          revalidatePath(`/api/transactions/revenue/year?year=${year}`);
          return { totalRevenue: revenue };
     } catch (error) {
          console.error(`Failed to fetch revenue for year ${year}:`, error);
          throw new Error("Failed to fetch revenue transactions.");
     }
}

export async function getMonthlyRevenue(month: string) {
     try {
          const revenue = await fetchRevenueFromAPI(
               `/api/transactions/revenue/month?month=${month}`,
          );
          revalidatePath(`/api/transactions/revenue/month?month=${month}`);
          return { totalRevenue: revenue };
     } catch (error) {
          console.error(`Failed to fetch revenue for month ${month}:`, error);
          throw new Error("Failed to fetch revenue transactions.");
     }
}

export async function getWeeklyRevenue(week: string) {
     try {
          const revenue = await fetchRevenueFromAPI(
               `/api/transactions/revenue/week?week=${week}`,
          );
          revalidatePath(`/api/transactions/revenue/week?week=${week}`);
          return { totalRevenue: revenue };
     } catch (error) {
          console.error(`Failed to fetch revenue for week ${week}:`, error);
          throw new Error("Failed to fetch revenue transactions.");
     }
}

export async function getDailyRevenue(day: string) {
     try {
          const revenue = await fetchRevenueFromAPI(
               `/api/transactions/revenue/day?day=${day}`,
          );
          revalidatePath(`/api/transactions/revenue/day?day=${day}`);
          return { totalRevenue: revenue };
     } catch (error) {
          console.error(`Failed to fetch revenue for day ${day}:`, error);
          throw new Error("Failed to fetch revenue transactions.");
     }
}

export async function getRevenueData(
     timeframe: "daily" | "weekly" | "monthly" | "yearly",
): Promise<ChartData[]> {
     const currentDate = new Date();
     let dates: Date[];
     let formatDate: (date: Date) => string;
     let fetchRevenue: (date: string) => Promise<{ totalRevenue: number }>;

     switch (timeframe) {
          case "daily":
               dates = Array.from({ length: 7 }, (_, i) =>
                    subDays(currentDate, i),
               );
               formatDate = (date) => format(date, "MMM dd");
               fetchRevenue = getDailyRevenue;
               break;
          case "weekly":
               dates = Array.from({ length: 4 }, (_, i) =>
                    subWeeks(currentDate, i),
               );
               formatDate = (date) => `Week ${format(date, "w")}`;
               fetchRevenue = getWeeklyRevenue;
               break;
          case "monthly":
               dates = Array.from({ length: 6 }, (_, i) =>
                    subMonths(currentDate, i),
               );
               formatDate = (date) => format(date, "MMM yyyy");
               fetchRevenue = getMonthlyRevenue;
               break;
          case "yearly":
               dates = Array.from({ length: 5 }, (_, i) =>
                    subYears(currentDate, i),
               );
               formatDate = (date) => format(date, "yyyy");
               fetchRevenue = getYearlyRevenue;
               break;
     }

     try {
          const revenueData = await Promise.all(
               dates.map(async (date) => {
                    const formattedDate =
                         timeframe === "daily"
                              ? formatDateForAPI(date)
                              : timeframe === "weekly"
                                ? formatWeekForAPI(date)
                                : timeframe === "monthly"
                                  ? formatMonthForAPI(date)
                                  : date.getFullYear().toString();

                    const { totalRevenue } = await fetchRevenue(formattedDate);
                    return {
                         name: formatDate(date),
                         total: totalRevenue,
                    };
               }),
          );

          return revenueData.reverse(); // To show oldest to newest
     } catch (error) {
          console.error(`Failed to fetch ${timeframe} revenue data:`, error);
          throw new Error(`Failed to fetch ${timeframe} revenue data.`);
     }
}
