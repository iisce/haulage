import { Card, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default async function DashboardCardListSkeleton() {
     return (
          <div className="flex flex-col gap-5 md:flex-row">
               {[1, 2, 3].map((k) => (
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
