import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: 0,
      author: "Alpha",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quis consequatur rem! Eos reiciendis eveniet optio qui at velit aperiam.",
      timestamp: "17 July, 2022",
      img: "/vercel.svg",
    },
    {
      id: 1,
      author: "Alpha",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quis consequatur rem! Eos reiciendis eveniet optio qui at velit aperiam.",
      timestamp: "17 July, 2022",
      img: "/vercel.svg",
    },
  ];
  return (
    <div className="flex-grow border-l border-r max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className="flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5" />
        </div>
      </div>

      <Input />
      <div className="pb-72">
        {posts?.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            content={post.content}
            img={post.img}
            timestamp={post.timestamp}
            postPage={true}
          />
        ))}
      </div>
    </div>
  );
}
