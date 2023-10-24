"use client";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
const Head = () => {
  const { data, status } = useSession();
  const { image } = data?.user || { image: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" };

  return (
    <div className=" w-full fixed z-30">
      <div className="navbar bg-base-100">
        <div className="flex-1 md:flex-initial md:w-60 ">
          <a className="btn btn-ghost normal-case text-xl">资源网</a>
        </div>
        <ul className="flex-1 hidden  menu menu-vertical lg:menu-horizontal md:visible">
          <li>
            <a href="/">首页</a>
          </li>
          <li>
            <a>分类</a>
          </li>
          <li>
            <a href="/posts">论坛</a>
          </li>
        </ul>
        <div className="flex-none gap-2">
          <div className=" flex-initial   md:visible">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end flex align-middle">
            <button
              className={`btn btn-active btn-accent ${
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
                  src={image!}
                  alt="hi"
                  layout="responsive"
                  width={40}
                  height={40}
                  className={`${status!=='authenticated' && 'hidden'}`}
                />
              </div>
            </label>
            <ul
              tabIndex={1}
              className={`mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 ${status!=='authenticated' && 'hidden'}` }
            >
              <li>
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
    </div>
  );
};

export default Head;
