import React, { useRef, useState, useEffect, useContext } from "react";
import Post from "./Post";

function Posts() {
  const postsArray = [
    {
      postId: 0,
      content:
        "There are multiple ways to get the first N words from a String using Javascript. You can use regex in order to do that or you can also use split() function of Javascript. We will explain them one by one in this post.",
      image: [],
      author: "0x06325626977af7ac4e8d19a6acfdb8da2102aff3",
      likeCount: 2,
      commentCount: 4,
      timeStamp: "9h",
      contractAddress: "",
    },
    {
      postId: 1,
      content: "Tega",
      image: [],
      author: "0x4733735626977af7ac4e8d19a6acfdb8da2102aff3",
      likeCount: 75,
      commentCount: 235,
      timeStamp: "5d",
      contractAddress: "",
    },
  ];

  return (
    <>
      <div className="w-full pt-[59px]">
        <header className="font-semibold text-[#000000] opacity-[0.5] text-[20px] text-center w-full mb-[47px]">
          Top Posts
        </header>
        <section className="flex flex-col gap-[36px]">
          {postsArray.map((post) => {
            return (
              <>
                <div key={post.postId}>
                  <Post singlePost={post} />
                </div>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Posts;
