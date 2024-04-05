import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function ActivitiesCard() {
  return (
    <Card className="w-full ">
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <h1 className="grid w-full items-center gap-4"></h1>
      </CardContent>
    </Card>
  );
}
