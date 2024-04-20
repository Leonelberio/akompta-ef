// app/api/companies/[companyId]/financial-years/route.ts
import prisma from "@/lib/prisma";
import { connectToDb } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { companyId: string } }
) {
  try {
    await connectToDb();
    const financialYears = await prisma.financialYear.findMany({
      where: { companyId: params.companyId },
      select: {
        id: true,
        //@ts-ignore
        year: true,
        startDate: true,
        endDate: true,
      },
    });
    return NextResponse.json(financialYears, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(
  request: Request,
  { params }: { params: { companyId: string } }
) {
  try {
    const { year, startDate, endDate } = await request.json();
    await connectToDb();
    const newFinancialYear = await prisma.financialYear.create({
      data: {
        companyId: params.companyId,
        //@ts-ignore
        year,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });
    return NextResponse.json(
      { financialYear: newFinancialYear },
      { status: 201 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
