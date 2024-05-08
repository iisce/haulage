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
    <Card className=" w-full ">
      <CardHeader>
        <CardTitle className="text-[20px]" >{title}</CardTitle>
        <CardDescription className="text-[14px]" >{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="grid w-full items-center gap-4">{amount}</h3>
      </CardContent>
    </Card>
  );
}
