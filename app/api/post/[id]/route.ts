/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-10-31 22:01:12
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-27 00:30:37
 * @FilePath: /next-app/app/api/post/[id]/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const data = await prisma.post.findUnique({ where: { id:id },include:{user:true,Comment:true}});
  return NextResponse.json(data, { status: 200 });
};
