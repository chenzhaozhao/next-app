import React from "react";
import day from "dayjs";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/authOptions";
import dayjs from "dayjs";
export interface Post {
  id: string;
  title: string;
  description: string;
  user: {
    name: string;
    image: string;
  };
  update_time: string;
}
export default async function Posts({ searchParams }: any) {
  const { type } = searchParams;
  const data = await fetch(`${process.env.API_HOST}/api/post?type=${type}`, {
    cache: "no-cache",
  });
  const posts: Post[] = await data.json();
  const { user } = (await getServerSession(authOptions)) || {};
  return (
    <div className=" pt-8 md:pt-20 h-full pl-5 pr-5 w-full">
      {posts.map((post) => (
        <article
          className="border  mx-auto border-gray-400 rounded-lg md:p-4 bg-white sm:py-3 py-4 px-2 m-4"
          key={post.id}
        >
          <div role="presentation">
            <div>
              <div className="m-2">
                <div className="flex items-center">
                  <div className="mr-2">
                    <a >
                      <Image
                        className="rounded-full w-8"
                        src={post.user.image}
                        alt="hagnerd profile"
                        loading="lazy"
                        width={100}
                        height={100}
                        objectFit='contain'
                      />
                    </a>
                  </div>
                  <div>
                    <p>
                      <a
                        className="text text-gray-700 text-sm hover:text-black"
                      >
                       {post.user.name}
                      </a>
                    </p>
                    <a
                      
                      className="text-xs text-gray-600 hover:text-black"
                    >
                      <time dateTime="2019-08-02 3:58:42">
                        {dayjs(post.update_time).format('YYYY-MM-DD HH:mm')}
                      </time>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pl-12 md:pl-10 xs:pl-10">
                <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 leading-7">
                  <a  id="article-link-151230">
                   {post.title}
                  </a>
                </h2>
                <div className="mb-2">
                 
                </div>
                <div className="mb-1 leading-6" dangerouslySetInnerHTML={{__html:post.description}} >
                  </div> 
                <div className="flex justify-between items-center">
                  <div className="flex">
                    <a
                 
                      className="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black"
                    >
                      <svg
                        className="inline fill-current"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                      </svg>
                      195
                      <span className="hidden md:inline">&nbsp;reactions</span>
                    </a>
                    <a
                   
                      className="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black"
                    >
                      <svg
                        className="inline fill-current"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                      </svg>
                      20<span className="hidden md:inline">&nbsp;comments</span>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <small className="mr-2 text-gray-600">8 min read</small>
                    <button
                      type="button"
                      className="bg-gray-400 rounded text-sm px-3 py-2 text-current hover:text-black hover:bg-gray-500"
                    >
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}

      <a
        className={`btn btn-sm btn-circle  fixed bottom-8 right-4 btn-primary md:hidden ${
          !user && "hidden"
        }`}
        href="/write"
      >
       +
      </a>
    </div>
  );
}
