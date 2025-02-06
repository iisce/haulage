import Link from "next/link";
import ActivitiesCard from "./dashboard/activities-card";
import { Button } from "./ui/button";
import { getActivities } from "@/data/activities";
import { ScrollArea } from "./ui/scroll-area";

export default async function RecentActivities() {
     const recentActivities = await getActivities();
     return (
          <ScrollArea className="col-span-4 hidden w-full rounded-lg bg-secondary md:flex xl:col-span-1 xl:h-[calc(100svh-100px)]">
               <div className="flex h-full w-full flex-col justify-between gap-3 p-3">
                    <div>
                         <p className="mb-2 text-xl">Recent Activities</p>
                         <div className="no-scrollbar grid gap-3 overflow-y-scroll">
                              {recentActivities.map((activity, k) => (
                                   <ActivitiesCard
                                        key={k}
                                        title={activity.title}
                                        description={activity.message}
                                        date={new Date(
                                             activity.createdAt,
                                        ).toDateString()}
                                        type={activity.type}
                                   />
                              ))}
                         </div>
                    </div>
                    <Button asChild>
                         <Link href={"/activities"}>View All</Link>
                    </Button>
               </div>
          </ScrollArea>
     );
}
