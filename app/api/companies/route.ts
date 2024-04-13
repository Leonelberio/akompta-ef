// app/api/companies/route.ts
import prisma from "@/lib/prisma";
import { connectToDb } from "@/utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDb();
    const companies = await prisma.company.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        createdAt: true,
      },
    });
    return NextResponse.json(companies , { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: Request) {
  try {
    const { name, description } = await request.json();
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    await connectToDb();
    const newCompany = await prisma.company.create({
      //@ts-ignore
      data: {
        name,
        description,
      },
    });
    return NextResponse.json({ company: newCompany }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
