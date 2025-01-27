import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, CheckCircle2 } from "lucide-react";
import { ActivityType } from "@prisma/client";

interface ActivitiesCardProps {
     title: string;
     description?: string | null;
     date: string;
     type?: ActivityType;
}

const getActivityIcon = (type: ActivityType) => {
     switch (type) {
          case "TRANSACTION_COMPLETED":
               return <CreditCard className="h-5 w-5" />;
          // case "user":
          //      return <User className="h-5 w-5" />;
          // case "alert":
          //      return <AlertCircle className="h-5 w-5" />;
          // case "event":
          //      return <Calendar className="h-5 w-5" />;
          default:
               return <CheckCircle2 className="h-5 w-5" />;
     }
};

const getActivityColor = (type: ActivityType) => {
     switch (type) {
          case "TRANSACTION_COMPLETED":
               return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
          // case "user":
          //      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
          // case "alert":
          //      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
          // case "event":
          //      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
          default:
               return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
     }
};

export default function ActivitiesCard({
     title,
     description,
     date,
     type = "TRANSACTION_COMPLETED",
}: ActivitiesCardProps) {
     return (
          <Card className="w-full overflow-hidden transition-all hover:shadow-md">
               <CardHeader className="p-2">
                    <div className="flex items-center justify-between">
                         <Badge
                              variant="secondary"
                              className={`${getActivityColor(type)} px-2 py-1`}
                         >
                              <span className="flex items-center gap-1">
                                   {getActivityIcon(type)}
                              </span>
                         </Badge>
                         <time
                              dateTime={date}
                              className="text-xs text-muted-foreground"
                         >
                              {date}
                         </time>
                    </div>
               </CardHeader>
               <CardContent className="p-2 pt-0">
                    <CardTitle className="mb-1 line-clamp-1 text-sm font-semibold">
                         {title}
                    </CardTitle>
                    {description && (
                         <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
                              {description}
                         </CardDescription>
                    )}
               </CardContent>
          </Card>
     );
}
