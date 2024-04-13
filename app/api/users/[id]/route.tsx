// Importing necessary modules and setting up the connection
import prisma from "@/lib/prisma";
import { connectToDb } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    await connectToDb();
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.userId) }, // Ensure that userId is correctly typed as an integer
      select: { id: true, email: true }, // Only select non-sensitive data
    });
    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json(
        { error: "Invalid data provided" },
        { status: 400 }
      );
    }
    await connectToDb();
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(params.userId) },
      data: { email },
    });
    return NextResponse.json({ user: updatedUser }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    await connectToDb();
    const deletedUser = await prisma.user.delete({
      where: { id: parseInt(params.userId) },
    });
    return NextResponse.json(
      { message: "User successfully deleted" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    // Check if the error is due to not finding the user, which means user not found or already deleted
    if (error.code === "P2025") {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
