/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-10-25 00:01:44
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-27 23:49:40
 * @FilePath: /next-app/app/productadd/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";

import { useCallback, useState } from "react";
import type { Product } from "../compoents/ProductList";
const AddProduct = () => {
  const [product, setProduct] = useState({});
  const handleClick = useCallback(() => {
    fetch("/api/product", {
      method: "post",
      body:JSON.stringify(product),
    });
  }, [product]);
  return (
    <div className=" flex j flex-col items-center ">
      <input
        type="text"
        placeholder="资源文件名"
        className="input input-bordered w-full max-w-xs block  mt-8"
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="价格"
        className="input input-bordered w-full max-w-xs block mt-8"
        onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
      />
      <input
        type="text"
        placeholder="下载数量"
        className="input input-bordered w-full max-w-xs block mt-8"
        onChange={(e) => setProduct({ ...product, download: Number(e.target.value) })}
      />
      <input
        type="text"
        placeholder="描述"
        className="input input-bordered w-full max-w-xs block mt-8"
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="背景图"
        className="input input-bordered w-full max-w-xs block mt-8"
        onChange={(e) => setProduct({ ...product, bgUrl: e.target.value })}
      />
      <input
        type="text"
        placeholder="资源链接路径"
        className="input input-bordered w-full max-w-xs block mt-8"
        onChange={(e) => setProduct({ ...product, url: e.target.value })}
      />
      <div className=" w-80">
        <button className=" btn btn-primary w-full mt-8" onClick={handleClick}>
          提交
        </button>
      </div>
    </div>
  );
};
export default AddProduct;
