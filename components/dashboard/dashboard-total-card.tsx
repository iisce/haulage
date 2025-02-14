import {
     Card,
     CardDescription,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

export default function DashboardTotalCard({
     title,
     description,
     amount,
}: {
     title: string;
     description: string;
     amount: number;
}) {
     return (
          <Card className="w-full max-w-96">
               <CardHeader className="p-2 lg:p-4">
                    <CardTitle className="text-lg lg:text-xl">
                         {title}
                    </CardTitle>
                    <CardDescription className="line-clamp-1 text-[14px]">
                         {description}
                    </CardDescription>
               </CardHeader>
               <div className="px-2 pb-2 lg:px-4 lg:pb-4">
                    <p className="grid w-full items-center gap-4 text-2xl lg:text-4xl">
                         {amount}
                    </p>
               </div>
          </Card>
     );
}
export function DashboardTotalCardSkeleton() {
     return (
          <Card className="w-full">
               <CardHeader className="p-2 lg:p-4">
                    <Skeleton className="h-6 w-32 animate-pulse" />
                    <CardDescription className="line-clamp-1 text-[14px]">
                         <Skeleton className="h-4 animate-pulse" />
                    </CardDescription>
               </CardHeader>
               <div className="px-2 pb-2 lg:px-4 lg:pb-4">
                    <p className="grid w-full items-center gap-4 text-2xl lg:text-4xl">
                         <Skeleton className="h-12 w-24 animate-pulse" />
                    </p>
               </div>
          </Card>
     );
}
