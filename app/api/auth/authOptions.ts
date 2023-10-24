// import { prisma } from "@prisma/client";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { AuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import GithubProvider from 'next-auth/providers/github'

export const authOptions: AuthOptions = {
    secret:process.env.SECRET,
    // adapter:PrismaAdapter(prisma),
    // theme: {
    //     logo: "https://next-auth.js.org/img/logo/logo-sm.png",
    //   },    
    providers: [
        // Credentials({
        //     name: 'Credentials',
        //     credentials: {
        //       email: { label: "Email", type: "text" },
        //       password: { label: "Password", type: "password" }
        //     },
        //     async authorize (credentials, req) {
        //         console.log(credentials, req)
        //         return {...credentials,...req}
        //     //   if (typeof credentials !== "undefined") {
        //     //     const res = await authenticate(credentials.email, credentials.password)
        //     //     if (typeof res !== "undefined") {
        //     //       return { ...res.user, apiToken: res.token }
        //     //     } else {
        //     //       return null
        //     //     }
        //     //   } else {
        //     //     return null
        //     //   }
        //     }
        //   })
        // ,
        // GoogleProvider({
        //     clientId:process.env.GOOGLE_CLIENT_ID!,
        //     clientSecret:process.env.GOOGLE_CLIENT_SECRET!
        // }),
        GithubProvider({
            clientId:process.env.GITHUB_ID!,
            clientSecret:process.env.GITHUB_SECRET!
        })
    ],
    // session: {
    //     strategy: 'jwt'
    // },
    // callbacks: {
    //     async jwt({ token,user}) {
    //       token.user = user
    //       return token
    //     },
    //     session: async ({ session, token }:{session:any,token:any}) => {
    //         session.user = token.user;
    //         return {expires:'1234567',user:{name:'qwerty',email:'asdrtj'}};
    //       },
    //   },
    //   
}