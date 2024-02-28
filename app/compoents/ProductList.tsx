/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-10-24 23:24:59
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-28 09:42:55
 * @FilePath: /next-app/app/compoents/ProductList.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from "next/image";
export interface Product {
  name: string;
  id: string;
  price: number;
  download: number;
  bgUrl: string;
  description: string;
}
const ProductList = async () => {
  const json = await fetch(`${process.env.API_HOST}/api/product`, {
    method: "get",
    cache: "no-store",
  });
  const products: Product[] = await json.json();
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-6 px-6">
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            className=" rounded relative shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
            x-for="(post, index) in posts"
            key={product.id}
          >
            <a href={`/product/${product.id}`} className="cursor-pointer">
              <figure>
                <Image
                  src={product.bgUrl}
                  className=" h-38  m-auto"
                  alt=""
                  width={300}
                  height={50}
                  objectFit="contain"
                  quality={100}
                />

                <figcaption className="p-4">
                  <p
                    className="text-sm mb-16 font-bold leading-relaxed text-gray-800 dark:text-gray-300 break-all"
                    x-text="post.title"
                  >
                    {product.name}
                  </p>
                  <div className="w-full hover:scale-105 absolute bottom-4  duration-500 flex items-end justify-between  ">
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-2xl font-bold tracking-tight text-gray-900">
                        {product.price}
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        钻石
                      </span>
                    </p>
                    <button
                      className="btn-sm center mr-8  rounded-lg bg-blue-500   font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                    >
                      购买
                    </button>
                  </div>
                </figcaption>
              </figure>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProductList;
