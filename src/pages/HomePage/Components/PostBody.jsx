import React, { useRef, useState, useEffect, useContext } from "react";
import PostImage from "./PostImage";
import dummy1 from "../../../assets/images/1.png";
import dummy2 from "../../../assets/images/2.png";
import dummy3 from "../../../assets/images/3.png";

function PostBody({ props }) {
  const postText =
    "There are multiple ways to get the first N words from a String using Javascript. You can use regex in order to do that or you can also use split() function of Javascript. We will explain them one by one in this post.";

  const formatPostText = (str, num) => {
    if (num === 1) return str.split(" ").slice(0, 10).join(" ");
    if (num === 2) return str.split(" ").slice(10, str.length).join(" ");
  };

  return (
    <>
      <div className="">
        <section>
          <p className={`${pStyle} font-semibold`}>
            {formatPostText(postText, 1)}
          </p>
          <p className={pStyle}>{formatPostText(postText, 2)}</p>
        </section>
        <section className="w-full">
          <PostImage />
        </section>
      </div>
    </>
  );
}
const pStyle = `text-[16px] my-[8px] font-normal`;

export default PostBody;
