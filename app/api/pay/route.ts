/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2024-02-23 17:42:43
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-27 22:37:55
 * @FilePath: /next-app/app/api/pay/route.ts
 * @Description:付款
 */
import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";
import generateSign from "@/app/utils/sign";
import { pid } from "@/app/utils";
export const POST = async (request: NextRequest) => {
  let clientip: string =
    (request.ip ?? request.headers.get("x-real-ip")) || "127.0.0.1";
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (!clientip && forwardedFor) {
    clientip = forwardedFor.split(",").at(0) ?? "Unknown";
  }
  const { name, price } = await request.json();
  const tradeNumber = v4();
  const params = {
    pid,
    type: "alipay",
    out_trade_no: tradeNumber,
    notify_url: "a",
    name,
    money: price,
    clientip,
  };
  const sign = generateSign(params,process.env.PID_KEY as string);
  const formData = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== null) {
      formData.append(key, value as string);
    }
  }
  formData.append("sign", sign);
  formData.append("sign_type", "MD5");
  const response = await fetch("https://www.ezfp.cn/mapi.php", {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  });
  const result = await response.json();
  return NextResponse.json(
    { success: true, message: { ...result, tradeNumber } },
    { status: 200 }
  );
};
export const GET = async (request: NextRequest, params: any) => {
  const { searchParams } = new URL(request.url);
  const outTradeNum = searchParams.get("outTradeNum");
  const tradeNum = searchParams.get("tradeNum");
  const response = await fetch(
    `https://www.ezfp.cn/api.php?act=order&pid=${pid}&key=${key}&out_trade_no=${outTradeNum}&trade_no=${tradeNum}`,{
        method:"get"
    }
  );
  const result = await response.json();
  return NextResponse.json({ success: true, message:result }, { status: 200 });
};
