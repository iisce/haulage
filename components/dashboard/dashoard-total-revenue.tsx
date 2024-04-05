import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashoardTotalRevenue({
  title,
  description,
  amount,
}: {
  title: string;
  description: string;
  amount: string;
}) {
  return (
    <Card className="w-1/4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="grid w-full items-center gap-4">{amount}</h2>
      </CardContent>
    </Card>
  );
}
