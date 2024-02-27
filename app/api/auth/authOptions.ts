/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-10-23 09:15:50
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-27 23:53:06
 * @FilePath: /next-app/app/api/auth/authOptions.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const prisma = new PrismaClient();
export const authOptions: NextAuthOptions = {
  secret: process.env.SECRET,
  // @ts-ignore
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        name: {},
        password: {},
        phone: {},
      },
      authorize: async (credentials) => {
        let user;
        try {
          if (credentials) {
            const { name, phone, password } = credentials;
            user = await prisma.user.findFirst({ where: { phone } });
            //用户不存在，直接创建
            if (!user) {
              user = await prisma.user.create({ data: { name, phone, password, type: '0' } })
            }
            //存在需要比较密码
            if (password !== user.password) {
              return Promise.reject({ message: '密码不正确' })
            }
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        } catch (e) {
          return null
        }

      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/404",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },

    session: async ({ session, token }) => {
      const userId: string = token.id as string;
      session.user=token;
      if (userId) {
        const user = await prisma.user.findUnique({ where: { id: userId } })
        if (user) {
          session.user = user
        }
      }
      return Promise.resolve(session);
    },
  },
};
