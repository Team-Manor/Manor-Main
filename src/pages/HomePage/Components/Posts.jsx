import React, { useRef, useState, useEffect, useContext } from "react";
import Post from "./Post";
import { AppContext } from "../../../context/AppContext";

function Posts() {
  const { posts } = useContext(AppContext);

  useEffect(() => {
    console.log(posts[0]);
  }, [posts]);

  return (
    <>
      <div className="w-full pt-[59px]">
        <header className="font-semibold text-[#000000] opacity-[0.5] text-[20px] text-center w-full mb-[47px]">
          Top Posts
        </header>
        <section className="flex flex-col-reverse gap-[36px]">
          {posts?.map((post) => {
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
