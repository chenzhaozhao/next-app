'use client'
import Image from "next/image";
import Footer from "./compoents/Footer";
import { useState } from "react";
export default function Home() {
  const [tab, setTab] = useState<"pop" | "new">("pop");
  return (
    <main>
      {/* <span className="loading loading-spinner loading-xs "></span> */}
      <div className="tabs h-12  flex  justify-center md:justify-start md:ml-48 ">
        <a className={`tab ${tab==='pop'?'tab-active':''} `} onClick={() => setTab("pop")}>
          热门
        </a>
        <a className={`${tab==='new'?'tab-active':''} tab`} onClick={() => setTab("new")}>
          最新
        </a>
      </div>
      <div className="divider"></div>
      <div className=" flex flex-wrap justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
          <div
            className="card w-96 bg-base-100 shadow-xl image-full mb-8 ml-8 mr-8 overflow-hidden"
            key={n}
          >
            <figure>
              <Image
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                layout="fill"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={()=>{}}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className=" btn w-full mb-12">加载更多</button>
      <Footer />
    </main>
  );
}
