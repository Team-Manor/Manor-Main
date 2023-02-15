import React, { useRef, useState, useEffect, useContext } from "react";
import Lebron from "../../../assets/lebron.png";

function Post({ props }) {
  return (
    <>
      <div className="flex px-[29px] w-full">
        <img src={Lebron} alt="" className="w-[44px] h-[44px] rounded-[14px]" />
        <div>
          <PostHeader />
          <PostBody />
          <PostDetails />
        </div>
      </div>
    </>
  );
}

export default Post;
