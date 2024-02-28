/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-10-31 23:38:56
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-28 09:39:48
 * @FilePath: /next-app/app/compoents/Comment.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";

import { useCallback, useState } from "react";

const CommentSend = ({id}:{id:number}) => {
  const [text, setText] = useState("");
  const send = useCallback(async () => {
    if (text) {
      await fetch(`${process.env.API_HOST}/api/postcomment`, {
        method: "post",
        body: JSON.stringify({ text,id }),
      });
    }
  }, [text,id]);
  return (
    <div className=" flex items-center">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-xs input-sm"
        onChange={(e) => setText(e.target.value)}
      />
      <button className=" btn btn-sm btn-primary ml-2" onClick={send}>
        发送
      </button>
    </div>
  );
};
export default CommentSend;
