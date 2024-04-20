//@ts-nocheck
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";

interface FinancialYearsProps {
  id: number;
  ownerId: string;
  name: string;
  description?: string; // The '?' marks this field as optional
  startDate: Date;
  endDate: Date;
}
interface Props {
  financialyears: FinancialYearsProps;
}

const FinancialYears = ({ financialyears }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
      {financialyears.map((financialyear) => (
        <Link key={financialyear.id} href={"/"}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Calendar />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {financialyear.startDate.slice(0, 4)} à{" "}
                {financialyear.endDate.slice(0, 4)}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default FinancialYears;
