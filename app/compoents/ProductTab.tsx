/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-10-24 23:43:02
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-27 22:41:06
 * @FilePath: /next-app/app/compoents/ProductTab.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import { useState } from "react";
const activeClassNames=' text-blue-500  border-blue-500 border-b-2'
const defaultClassNames='text-gray-600'
const ProductTab = () => {
  const [tab, setTab] = useState<"pop" | "new">("pop");
  return (
    <div className="bg-white pl-4">
      <nav className="flex">
        <button
          className={` py-4 px-6 block hover:text-blue-500 focus:outline-none   font-medium  ${tab==='pop'?activeClassNames:defaultClassNames}`}
          onClick={() => setTab("pop")}
        >
          热门
        </button>
        <button
          className={` py-4 px-6 block hover:text-blue-500 focus:outline-none ${tab==='new'?activeClassNames:defaultClassNames}`}
          onClick={() => setTab("new")}
        >
          最新
        </button>
      </nav>
    </div>
  );
};
export default ProductTab;
