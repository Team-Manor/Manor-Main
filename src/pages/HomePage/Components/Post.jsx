import React, { useRef, useState, useEffect, useContext } from "react";
import Lebron from "../../../assets/lebron.png";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostDetails from "./PostDetails";

function Post({ singlePost }) {
  return (
    <>
      <div className="flex gap-[15px] px-[29px] py-[29px] w-full rounded-[14px] shadow-custom">
        <img src={Lebron} alt="" className="w-[44px] h-[44px] rounded-[14px]" />
        <div className="flex-grow">
          <PostHeader
            postAuthor={singlePost.author}
            postTime={singlePost.timeStamp}
          />
          <PostBody
            postText={singlePost.content}
            postImage={singlePost.image}
          />
          <PostDetails
            postLikes={singlePost.likeCount}
            postComments={singlePost.commentCount}
            postContractAddress={singlePost.contractAddress}
          />
        </div>
      </div>
    </>
  );
}

export default Post;
