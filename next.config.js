/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-09-29 00:40:23
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-01-24 13:41:53
 * @FilePath: /next-app/next.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "daisyui.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "theitzy.com",
        port: "",
      }
    ],
  },
};

module.exports = nextConfig;
