import { NextResponse, NextRequest } from "next/server";
import prisma from "src/lib/prisma";

// export async function GET(){
//   const posts = await prisma.post.findMany();
//   return NextResponse.json(posts)
// }

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()
  const result = prisma.post.create({
    data: {
      name,
      email,
      message
    }
  })
  return NextResponse.json(result)
}
