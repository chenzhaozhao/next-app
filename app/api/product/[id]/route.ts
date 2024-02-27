/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-10-30 00:04:00
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-27 16:27:55
 * @FilePath: /next-app/app/api/product/[id]/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { prisma } from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/authOptions";
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const data = await prisma.product.findUnique({ where: { id: params.id } })
    return NextResponse.json(data, { status: 200 })
}
export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const session = await getServerSession(authOptions)
    const userId = session?.user?.id || ""
    if (userId) {
        const product = await prisma.product.findUnique({ where: { id: params.id } })
        await prisma.product.update({
            where: { id: params.id }, data: {
                users: JSON.stringify(JSON.parse(product?.users||'[]').concat(userId) || [])
            }
        })
    }

    return NextResponse.json({ success: true }, { status: 200 })
}
