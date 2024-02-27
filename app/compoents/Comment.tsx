"use client";

import { useCallback, useState } from "react";

const CommentSend = ({id}:{id:number}) => {
  const [text, setText] = useState("");
  const send = useCallback(async () => {
    if (text) {
      await fetch("http://localhost:3000/api/postcomment", {
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
