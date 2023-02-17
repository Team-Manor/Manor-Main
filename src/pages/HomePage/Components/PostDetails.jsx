import React, { useRef, useState, useEffect, useContext } from "react";
import MediaDetail from "./MediaDetail";
import {
  LikeIcon,
  CommentIcon,
  SaveIcon,
  DonateIcon,
} from "../../../assets/Icons";

function PostDetails({ postLikes, postComments }) {
  const likePost = () => {
    console.log("like post");
  };

  const commentPost = () => {
    console.log("comment post");
  };

  const donate = () => {
    console.log("donate");
  };

  const savePost = () => {
    console.log("savePost");
  };

  return (
    <>
      <div className="flex justify-between items-center mt-[16px]">
        <div className="flex gap-[10px] items-center">
          <MediaDetail
            icon={<LikeIcon />}
            text={`${postLikes} Likes`}
            execute={likePost}
          />
          <MediaDetail
            icon={<CommentIcon />}
            text={`${postComments} Comments`}
            execute={commentPost}
          />
          <MediaDetail icon={<DonateIcon />} text={`Donate`} execute={donate} />
          <MediaDetail icon={<SaveIcon />} text={`Saved`} execute={savePost} />
        </div>
        <button className="bg-deepBlue px-[30px] py-[6px] rounded-[8px] text-[12px] text-white">
          Mint
        </button>
      </div>
    </>
  );
}

export default PostDetails;
