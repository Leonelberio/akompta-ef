//@ts-nocheck
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface CompaniesProps {
  id: number;
  ownerId: string;
  name: string;
  description?: string; // The '?' marks this field as optional
  createdAt: Date;
  updatedAt: Date;
}
interface Props {
  companies: CompaniesProps;
  params: { companyId: string };
}

const Companies = ({ companies, params }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
      {companies.map((company) => (
        <Link
          key={company.id}
          href={`/companies/${company.id}/financial-years`}
        >
          <Card className="space-y-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <Image src={"vercel.svg"} width={200} height={200} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{company.name}</div>
              <p className="text-xs text-muted-foreground">
                {company.description}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Companies;
