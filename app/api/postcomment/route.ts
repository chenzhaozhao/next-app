import { prisma } from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/authOptions";
export const  POST=async(req:NextRequest)=>{
    const data= await req.json()
    const session:{user:{id:number}}|null=await getServerSession(authOptions)
    const {text,id}=data;
   await prisma.comment.create({data:{text,userId:session!.user!.id,postId:Number(id)}})
   return NextResponse.json({},{status:200})
}