import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";

export default async function RecentActivitiesSkeleton() {
     return (
          <ScrollArea className="col-span-4 hidden w-full rounded-lg bg-secondary md:flex xl:col-span-1 xl:h-[calc(100svh-100px)]">
               <div className="flex h-full w-full flex-col justify-between gap-3 p-3">
                    <div>
                         <p className="mb-2 text-xl">Recent Activities</p>
                         <div className="no-scrollbar grid gap-3 overflow-y-scroll">
                              {[0, 1, 2, 3, 4, 5, 6].map((activity, k) => (
                                   <Card
                                        key={k}
                                        className={`w-full overflow-hidden transition-all hover:shadow-md`}
                                   >
                                        <CardHeader className={`p-1`}>
                                             <div className="flex items-center justify-between">
                                                  <Skeleton
                                                       className={`h-4 w-4 px-1 py-1`}
                                                  ></Skeleton>
                                                  <Skeleton className="h-4 w-12"></Skeleton>
                                             </div>
                                        </CardHeader>
                                        <CardContent className="p-2 pt-0">
                                             <Skeleton className="mb-1 h-5 w-32"></Skeleton>
                                             <Skeleton className="h-3 w-full"></Skeleton>
                                        </CardContent>
                                   </Card>
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
