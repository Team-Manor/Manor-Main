import React, { useRef, useState, useEffect, useContext } from "react";
import Lebron from "../../../assets/lebron.png";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostDetails from "./PostDetails";
import { useNavigate } from "react-router-dom";

function Post({ singlePost }) {
  const route = window.location.pathname.substring(0, 5);
  const singlePostCall = route === "/post";

  const navigate = useNavigate();

  return (
    <>
      <div className="flex gap-[15px] px-[29px] py-[29px] w-full rounded-[14px] shadow-custom">
        <img src={Lebron} alt="" className="w-[44px] h-[44px] rounded-[14px]" />
        <div className="flex-grow">
          <div
            className="cursor-pointer"
            onClick={() =>
              !singlePostCall && navigate(`/post/${singlePost.postId}`)
            }
          >
            <PostHeader
              postAuthor={singlePost.author}
              postTime={singlePost.timestamp}
            />

            <PostBody
              postText={singlePost.content}
              postImage={singlePost.image}
              singlePostCall={singlePostCall}
            />
          </div>
          <PostDetails
            postId={singlePost.postId}
            postLikes={singlePost.likes}
            postComments={singlePost.commentCount}
            postContractAddress={singlePost.contractAddress}
            postAuthor={singlePost.author}
          />
        </div>
      </div>
    </>
  );
}

export default Post;
