/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-10-24 23:24:59
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-27 01:53:24
 * @FilePath: /next-app/app/compoents/ProductList.tsx
 * @Description: 登陆组件
 */
"use client";
import React, { useCallback, memo, useRef, useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const loginForm = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      },300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [error]);
  const router = useRouter();
  const handleSubmit = useCallback(async () => {
    if (loginForm.current) {
      const data = new FormData(loginForm.current);
      const name = data.get("name");
      const password = data.get("password");
      const phone = data.get("phone");
      const result = await signIn("credentials", {
        name,
        password,
        phone,
        redirect: false,
        callbackUrl: "/",
      });
      if (result) {
        const { status, url, error } = result;
        if (status === 200 && url) {
          router.push(url);
        } else {
          setError(error as string);
        }
      }
    }
  }, [router]);
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-gray-200 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
              />
            </svg>
          </span>
        </div>
        <form ref={loginForm}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              用户名
            </label>
            <input
              type="text"
              name="name"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="请输入用户名"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              手机号 *
            </label>
            <input
              type="number"
              name="phone"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="请输入手机号"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              密码 *
            </label>
            <input
              type="password"
              name="password"
              className="htmlForm-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="请输入密码"
            />
            <p className="text-gray-600 text-xs mt-1">
              Must contain 1 uppercase letter, 1 number, min. 8 characters.
            </p>
          </div>
          <div
            className={`font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-2 text-sm  leading-5 text-white opacity-100 ${
              !error && "hidden"
            }`}
          >
            {error}
          </div>
          <input
            type="button"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleSubmit}
            value="登陆或注册"
          />

          <p className="text-gray-600 text-xs text-center mt-4">
            By clicking Register, you agree to accept Apex Financial&apos;s
            <a href="#" className="text-blue-500 hover:underline">
              Terms and Conditions
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};
export default memo(Login);
