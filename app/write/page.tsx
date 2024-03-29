/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-10-27 23:03:10
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-28 09:41:03
 * @FilePath: /next-app/app/write/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import { FC, useCallback, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "./page.css";
import { useRouter } from "next/navigation";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface WriteProps {}
var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // 切换按钮
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // 用户自定义按钮值
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // 上标/下标
  [{ indent: "-1" }, { indent: "+1" }], // 减少缩进/缩进
  [{ direction: "rtl" }], // 文本下划线

  [{ size: ["small", false, "large", "huge"] }], // 用户自定义下拉
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // 主题默认下拉，使用主题提供的值
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // 清除格式
];

const Write: FC<WriteProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { back } = useRouter();
  const handlePublish = useCallback(async () => {
    await fetch(`${process.env.API_HOST}/api/post`, {
      method: "post",
      body: JSON.stringify({ title, description }),
    });
    back();
  }, [title, description,back]);

  return (
    <div className="  p-4">
      <input
        type="text"
        placeholder="请输入标题(最多50字)"
        className="input w-full mb-2"
        maxLength={50}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill
        className=" bg-white  rounded"
        modules={{ toolbar: toolbarOptions }}
        style={{ minHeight: 400 }}
        theme="snow"
        onChange={(v) => setDescription(v)}
      />
      <div>
        <button
          className={` btn btn-primary float-right mt-4 mr-8 ${
            (!title || !description) && "btn-disabled"
          }`}
          onClick={handlePublish}
        >
          发布问题
        </button>
      </div>
    </div>
  );
};

export default Write;
