import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, CheckCircle2, Car } from "lucide-react";
import { ActivityType } from "@prisma/client";
import { FaMoneyBill } from "react-icons/fa";

interface ActivitiesCardProps {
     title: string;
     description?: string | null;
     date: string;
     type?: ActivityType;
}

const getActivityIcon = (type: ActivityType) => {
     switch (type) {
          case "TRANSACTION_COMPLETED":
               return <CreditCard className="h-3 w-3" />;
          case "VEHICLE_CHARGED":
               return <FaMoneyBill className="h-3 w-3" />;
          case "VEHICLE_CREATED":
               return <Car className="h-3 w-3" />;
          // case "event":
          //      return <Calendar className="h-5 w-5" />;
          default:
               return <CheckCircle2 className="h-3 w-3" />;
     }
};

const getActivityColor = (type: ActivityType) => {
     switch (type) {
          case "TRANSACTION_COMPLETED":
               return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
          case "VEHICLE_CHARGED":
               return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
          case "VEHICLE_CREATED":
               return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
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
          <Card
               className={`${getActivityColor(type)} w-full overflow-hidden transition-all hover:shadow-md`}
          >
               <CardHeader className={`p-1`}>
                    <div className="flex items-center justify-between">
                         <Badge
                              variant="secondary"
                              className={`px-1 py-1 ${getActivityColor(type)}`}
                         >
                              <span className="flex items-center gap-1">
                                   {getActivityIcon(type)}
                              </span>
                         </Badge>
                         <time dateTime={date} className="text-xs">
                              {date}
                         </time>
                    </div>
               </CardHeader>
               <CardContent className="p-2 pt-0">
                    <CardTitle className="mb-1 line-clamp-1 text-sm font-semibold">
                         {title}
                    </CardTitle>
                    {description && (
                         <CardDescription className="line-clamp-1 text-xs">
                              {description}
                         </CardDescription>
                    )}
               </CardContent>
          </Card>
     );
}
