import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card className="w-full md:w-1/3">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="grid w-full items-center gap-4">{amount}</h3>
      </CardContent>
    </Card>
  );
}
