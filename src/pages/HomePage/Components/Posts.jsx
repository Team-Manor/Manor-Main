import React, { useRef, useState, useEffect, useContext } from "react";
import Post from "./Post";

function Posts() {
  const postsArray = [
    {
      postId: 0,
      content: "",
      image: "",
      author: "",
      likeCount: 2,
      commentCount: 4,
      timeStamp: "",
      contractAddress: "",
    },
  ];

  return (
    <>
      <div className="w-full pt-[59px]">
        <header className="font-semibold text-[#000000] opacity-[0.5] text-[20px] text-center w-full">
          Top Posts
        </header>
        <section>{/* <Post /> */}</section>
      </div>
    </>
  );
}

export default Posts;
