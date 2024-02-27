/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-10-20 17:12:40
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-01-23 16:50:33
 * @FilePath: /next-app/app/posts/[id]/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PageProps } from "@/.next/types/app/layout";
import React from "react";
import CommentSend from "@/app/compoents/Comment";
import type { Post } from "../page";
export default async function Posts({ params }: PageProps) {
  const { id } = params;
  const data = await fetch(`http://localhost:3000/api/post/${id}`, {
    method: "get",
    cache: "no-cache",
  });
  interface PostDetail extends Post {
    Comment: { id: number; text: string }[];
  }
  const post: PostDetail = await data.json();
  return (
    <div className=" bg-white m-4 p-4 rounded-sm">
      <div className=" text-lg font-bold">{post.title}</div>
      <div
        dangerouslySetInnerHTML={{ __html: post.description }}
        className=" mt-5"
      />
      <div>评论区</div>
      <div>
        {post.Comment.map((x) => (
          <div key={x.id}>{x.text}</div>
        ))}
      </div>
      <div></div>
      <CommentSend id={id} />
    </div>
  );
}
