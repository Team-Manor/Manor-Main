import React, { useRef, useState, useEffect, useContext } from "react";
import Post from "./Post";
import { AppContext } from "../../../context/AppContext";
import { Link } from "react-router-dom";

function Posts() {
  const { posts } = useContext(AppContext);

  useEffect(() => {
    console.log(posts);
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
                <Link key={post.postId} to={`/post/${post.postId}`}>
                  <Post singlePost={post} />
                </Link>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Posts;
