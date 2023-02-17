import React, { useRef, useState, useEffect, useContext } from "react";
import MediaDetail from "./MediaDetail";
import {
  LikeIcon,
  CommentIcon,
  SaveIcon,
  DonateIcon,
} from "../../../assets/Icons";
import { AppContext } from "../../../context/AppContext";
import { useContractInfiniteReads } from "wagmi";
import { contract_address, contract_abi } from "../../../constants/constants";

function PostDetails({ props }) {
  const { likePost, commentPost, address, posts } = useContext(AppContext);

 
  console.log(posts);

  const like = () => {
    console.log("fired");
  };

  const comment = () => {
    console.log("comment");
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
            text={`552 Likes`}
            execute={likePost}
          />
          <MediaDetail
            icon={<CommentIcon />}
            text={`55 Comments`}
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
