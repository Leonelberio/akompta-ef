// app/api/companies/[companyId]/financial-years/[financialYearId]/balances/route.ts
import prisma from "@/lib/prisma";
import { connectToDb } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { companyId: string; financialYearId: string } }
) {
  try {
    await connectToDb();
    const balance = await prisma.balance.findUnique({
      where: {
        financialYearId: parseInt(params.financialYearId),
      },
      select: {
        id: true,
        data: true, // Assuming 'data' holds the balance information
        createdAt: true,
      },
    });
    if (!balance) {
      return NextResponse.json({ error: "Balance not found" }, { status: 404 });
    }
    return NextResponse.json({ balance }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(
  request: Request,
  { params }: { params: { companyId: string; financialYearId: string } }
) {
  try {
    const { data } = await request.json(); // 'data' should contain the balance details
    if (!data) {
      return NextResponse.json(
        { error: "Balance data is required" },
        { status: 400 }
      );
    }
    await connectToDb();
    const newBalance = await prisma.balance.create({
      data: {
        financialYearId: parseInt(params.financialYearId),
        data, // Assuming 'data' is stored as JSON or similar format
      },
    });
    return NextResponse.json({ balance: newBalance }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
