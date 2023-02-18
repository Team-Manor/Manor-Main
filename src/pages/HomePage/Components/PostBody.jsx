import React, { useRef, useState, useEffect, useContext } from "react";
import PostImage from "./PostImage";
import { AppContext } from "../../../context/AppContext";

function PostBody({ postText, postImage }) {
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
        {postImage.length > 0 && (
          <section className="w-full">
            <PostImage postImage={postImage} />
          </section>
        )}
      </div>
    </>
  );
}
const pStyle = `text-[16px] my-[8px] font-normal`;

export default PostBody;
