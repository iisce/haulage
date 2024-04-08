import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { User } from "lucide-react";

export default function ActivitiesCard({
  title,
  description,
  Date,
  icons,
}: {
  title: string;
  description: string;
  Date: string;
  icons: React.ReactNode;
}) {
  return (
    <Card className="w-full ">
      <CardHeader>
        <CardTitle>{icons}</CardTitle>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h5 className="grid w-full items-center gap-4">{Date}</h5>
      </CardContent>
    </Card>
  );
}
