import prisma from "@/lib/prisma";
import { connectToDb } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await connectToDb();
    const users = await prisma.user.findMany({
      include: { companies: true, _count: true },
    });
    return NextResponse.json({ users }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
