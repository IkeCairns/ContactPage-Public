import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import prisma from "src/lib/prisma";

export async function GET(){
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts)
}

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = await req.body
  console.log(name, email, message)
  const result = prisma.post.create({
    data: {
      name: name,
      email : email,
      message: message      
    }
  })
  return NextResponse.json(result)
}
