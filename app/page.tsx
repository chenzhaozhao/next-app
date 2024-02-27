/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-09-29 00:40:23
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-01-24 14:56:25
 * @FilePath: /next-app/app/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from "next/image";
import Footer from "./compoents/Footer";
import ProductTab from "./compoents/ProductTab";
import ProductList from "./compoents/ProductList";
export default function Home() {
  return (
    <main className=" h-full flex flex-col">
      <ProductTab />
      <ProductList  />
      <Footer />
    </main>
  );
}
