// app/api/companies/[companyId]/route.ts
import prisma from "@/lib/prisma";
import { connectToDb } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { companyId: string } }
) {
  try {
    await connectToDb();
    const company = await prisma.company.findUnique({
      where: { id: parseInt(params.companyId) },
      select: {
        id: true,
        name: true,
        description: true,
        createdAt: true,
      },
    });
    if (!company) {
      return NextResponse.json({ error: "Company not found" }, { status: 404 });
    }
    return NextResponse.json({ company }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { companyId: string } }
) {
  try {
    const { name, description } = await request.json();
    await connectToDb();
    const updatedCompany = await prisma.company.update({
      where: { id: parseInt(params.companyId) },
      data: { name, description },
    });
    return NextResponse.json({ company: updatedCompany }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { companyId: string } }
) {
  try {
    await connectToDb();
    const deletedCompany = await prisma.company.delete({
      where: { id: parseInt(params.companyId) },
    });
    return NextResponse.json(
      { message: "Company successfully deleted" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Company not found" }, { status: 404 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
