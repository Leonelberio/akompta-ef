// app/api/companies/[companyId]/financial-years/[financialYearId]/route.ts
import prisma from "@/lib/prisma";
import { connectToDb } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { companyId: string; financialYearId: string } }
) {
  try {
    await connectToDb();
    const financialYear = await prisma.financialYear.findUnique({
      where: { id: parseInt(params.financialYearId) },
      select: {
        id: true,
        //@ts-ignore
        year: true,
        startDate: true,
        endDate: true,
      },
    });
    if (!financialYear) {
      return NextResponse.json(
        { error: "Financial year not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(financialYear , { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { companyId: string; financialYearId: string } }
) {
  try {
    const { year, startDate, endDate } = await request.json();
    await connectToDb();
    const updatedFinancialYear = await prisma.financialYear.update({
      where: { id: parseInt(params.financialYearId) },
      data: {
        //@ts-ignore
        year,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });
    return NextResponse.json(
      { financialYear: updatedFinancialYear },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { companyId: string; financialYearId: string } }
) {
  try {
    await connectToDb();
    const deletedFinancialYear = await prisma.financialYear.delete({
      where: { id: parseInt(params.financialYearId) },
    });
    return NextResponse.json(
      { message: "Financial year successfully deleted" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Financial year not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
