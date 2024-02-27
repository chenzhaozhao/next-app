/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-10-24 17:59:31
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-27 15:55:10
 * @FilePath: /next-app/app/api/product/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (req:NextRequest) => {
    const data = await prisma.product.findMany()
    return NextResponse.json(data, { status: 200 })
}
export const POST = async (req: NextRequest) => {
    const data=await req.json();
    await prisma.product.create({data})
    return NextResponse.json({ success: true }, { status: 200 })
}
