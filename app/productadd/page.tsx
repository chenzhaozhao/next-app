"use client";

import { useCallback, useState } from "react";
import type { Product } from "../compoents/ProductList";
const AddProduct = () => {
  const [product, setProduct] = useState({});
  const handleClick = useCallback(() => {
    fetch("http://localhost:3000/api/product", {
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
