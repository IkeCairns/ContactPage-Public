import { NextRequest, NextResponse } from "next/server";
import prisma from "src/lib/prisma";

prisma
export async function GET(){
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts)
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  await prisma.post.create({ data: req })

  return NextResponse.json(req);
}
