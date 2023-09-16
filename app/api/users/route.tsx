import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import schema from "./schema";
import { User } from "@prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body: User = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const exist = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (exist) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }
  const created = await prisma.user.create({
    data: body,
  });
  return NextResponse.json(created);
}
