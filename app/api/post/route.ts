import { prisma } from "@/prisma/client";
import { SessionOptions, getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/authOptions";
interface SessionProps extends SessionOptions{
    user:{
        id:string
    }
}
export const GET = async (req:NextRequest,) => {
   const type=req.nextUrl.searchParams.get('type')
    const data = await prisma.post.findMany({include:{user:true},orderBy:[{update_time:type==='new'?'desc':'asc'}]})
    return NextResponse.json(data, { status: 200 })
}
export const POST = async (req: NextRequest,res:NextResponse) => {
  const session:SessionProps|null= await getServerSession(authOptions)
    const data=await req.json();
    await prisma.post.create({data:{...data,userId:session!.user.id!}})
    return NextResponse.json({ success: true }, { status: 200 })
}
