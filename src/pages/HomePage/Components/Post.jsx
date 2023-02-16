import React, { useRef, useState, useEffect, useContext } from "react";
import Lebron from "../../../assets/lebron.png";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostDetails from "./PostDetails";

function Post({ props }) {
  return (
    <>
      <div className="flex gap-[15px] px-[29px] w-full">
        <img src={Lebron} alt="" className="w-[44px] h-[44px] rounded-[14px]" />
        <div className="flex-grow">
          <PostHeader />
          <PostBody />
          <PostDetails />
        </div>
      </div>
    </>
  );
}

export default Post;
