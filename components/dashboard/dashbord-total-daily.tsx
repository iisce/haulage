import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardTotalDaily({
  title,
  description,
  amount,
}: {
  title: string;
  description: string;
  amount: string;
}) {
  return (
    <Card className="w-full md:w-[30%]">
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
