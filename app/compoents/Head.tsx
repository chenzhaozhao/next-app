/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-10-20 11:20:14
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-27 19:09:21
 * @FilePath: /next-app/app/compoents/Head.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { memo } from "react";
const Head = () => {
  const { data, status } = useSession();
  const { image } = data?.user || {
    image:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  };
  const path = usePathname();
  const isMain = path === "/";
  const isCategroy = path.indexOf("categroy") >= 0;
  const isPost = path.indexOf("posts") >= 0 || path.indexOf("write") >= 0;
  return (
    <div className=" w-full  z-30 bg-white">
      <div className="border-b-2 shadow-md border-gray-100  w-full flex p-2">
        <div className=" flex-1 flex     text-center text-gray-500 items-center">
          <a
            href="/"
            className="mx-8 hover:text-red-900 active"
            aria-current="page"
          >
            首页
          </a>
          <a href="/categroy" className="mx-8 hover:text-red-900">
            分类
          </a>
          <a href="/posts" className="mx-8 hover:text-red-900">
            社区
          </a>
        </div>
        <div className="dropdown dropdown-end flex align-middle">
          <button
            className={`btn btn-active btn-neutral text-white ${
              status === "authenticated" ? "hidden" : ""
            } ${status === "loading" ? "loading loading-spinner" : ""}`}
            onClick={async () => await signIn()}
          >
            登录
          </button>
          <label
            tabIndex={0}
            className={`btn btn-ghost btn-circle avatar ${
              status !== "authenticated" ? "hidden" : ""
            }`}
          >
            <div className="w-10 rounded-full">
              <Image
                src={
                  image ||
                  "https://avatars.githubusercontent.com/u/39108472?v=4"
                }
                alt="hi"
                layout="responsive"
                width={40}
                height={40}
                className={`${status !== "authenticated" && "hidden"}`}
              />
            </div>
          </label>
          <ul
            tabIndex={1}
            className={` mt-10 z-[1]  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-28 ${
              status !== "authenticated" && "hidden"
            }`}
          >
            <li className=" ml-4">
              <a
                onClick={() =>
                  signOut({ callbackUrl: "http://localhost:3000" })
                }
              >
                退出
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(Head);
