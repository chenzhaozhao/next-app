/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-10-23 23:41:02
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-27 23:56:19
 * @FilePath: /next-app/app/product/[id]/page.tsx
 * @Description:课程详情页
 */
import { PageProps } from "@/.next/types/app/layout";
import React from "react";
import Image from "next/image";
import PurchaseButton from "@/app/compoents/PurchaseButton";
const ProductDetail = async ({ params }: PageProps) => {
  const { id } = params;
  const data = await fetch(`/api/product/${id}`, {
    method: "get",
    cache: "no-cache",
  });

  const product: {
    id:string,
    price: number;
    name: string;
    bgUrl: string;
    description: string;
    users:string
  } = await data.json();
  return (
    <div className=" sm:flex p-4  flex-wrap">
      <div className="flex-1   bg-white p-8 rounded-md">
        <div> {product.name}</div>
        <div className=" flex justify-center my-4">
          <Image src={product.bgUrl || ""} alt="" width={300} height={50} />
        </div>
        <div className=" text-sm" dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
      <div className=" sm:ml-8 text-sm  rounded-lg drop-shadow-2xl  gap-4 bg-slate-200 px-8 py-4">
        <div className="uppercase w-full text-2xl font-bold text-center text-rose-500">
          {product.price}钻石
        </div>
        <div className="my-4  rounded-sm text-black">
          <div className="flex  w-full justify-between  p-2 ">
            <div className=" flex-1  group-hover:bg-green-200">演示地址</div>
            <div>查看</div>
          </div>
          <div className="flex  w-full justify-between p-2 ">
            <div className=" flex-1  group-hover:bg-green-200">文件内容</div>
            <div>视频+配套课件+中英文字幕</div>
          </div>
          <div className="flex  w-full justify-between  p-2 ">
            <div className=" flex-1  group-hover:bg-green-200">已售</div>
            <div>10</div>
          </div>
          <div className="flex  w-full justify-between   p-2 ">
            <div className=" flex-1  group-hover:bg-green-200">最近更新</div>
            <div>2023年12月14日</div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-4 w-full border-gray-300 border-t-2">
          <PurchaseButton users={product.users} id={product.id} price={String(product.price)} name={product.name} />
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
