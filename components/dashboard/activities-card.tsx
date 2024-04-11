import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function ActivitiesCard({
  title,
  description,
  Date,
}: {
  title: string;
  description: string;
  Date: string;
}) {
  return (
    <Card className="w-full ">
      <CardHeader className="px-6 space-y-1">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h5 className="grid w-full items-center gap-4">{Date}</h5>
      </CardContent>
    </Card>
  );
}

