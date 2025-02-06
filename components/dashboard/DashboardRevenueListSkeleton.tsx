import { Card, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default async function DashboardRevenueListSkeleton() {
     return (
          <div className="grid gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
               {[1, 2, 3, 4, 5].map((k) => (
                    <Card className="w-full" key={k}>
                         <CardHeader className="p-2 lg:p-4">
                              <Skeleton className="h-6 w-32 animate-pulse" />
                              <Skeleton className="h-4 animate-pulse" />
                         </CardHeader>
                         <div className="px-2 pb-2 lg:px-4 lg:pb-4">
                              <p className="grid w-full items-center gap-4 text-2xl lg:text-4xl">
                                   <Skeleton className="h-12 w-24 animate-pulse" />
                              </p>
                         </div>
                    </Card>
               ))}
          </div>
     );
}
