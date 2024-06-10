import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";

export default function ActivitiesCard({
     title,
     description,
     date,
     icons,
}: {
     title: string;
     description: string;
     date: string;
     icons: React.ReactNode;
}) {
     return (
          <Card className="w-full p-2">
               <CardTitle className="font-semibold md:text-lg">
                    {title}
               </CardTitle>
               <CardDescription className="text-sm">
                    {description}
               </CardDescription>
               <p className="grid w-full items-center gap-4 text-xs">{date}</p>
          </Card>
     );
}
