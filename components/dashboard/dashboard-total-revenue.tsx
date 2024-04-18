import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardTotalRevenue({
  title,
  description,
  amount,
}: {
  title: string;
  description: string;
  amount: string;
}) {
  return (
    <Card className="w-full md:w-1/4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className=" line-clamp-2 ">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="grid w-full items-start justify-start mx-auto gap-4">{amount}</h4>
      </CardContent>
    </Card>
  );
}
