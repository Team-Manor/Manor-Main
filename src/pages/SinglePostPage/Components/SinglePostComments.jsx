import React, { useState } from "react";
import Lebron from "../../../assets/lebron.png";
import { LikeIcon } from "../../../assets/Icons";
import MediaDetail from "../../HomePage/Components/MediaDetail";

function SinglePostCmments({ comment, postAuthor }) {
  const walletAddressFormatter = (str) => {
    const begin = str.substring(0, 7);
    const end = str.slice(-4);
    return `${begin}****${end}`;
  };

  const getTimestamp = (postTime) => {
    let time = "now";
    const date = new Date(postTime * 1000);
    const today = new Date();

    const diff = today - date;

    const seconds = Math.floor(diff / 1000);

    if (seconds < 60) {
      time = `${seconds} seconds ago`;
    } else if (seconds < 3600) {
      time = `${Math.floor(seconds / 60)} minutes ago`;
    } else if (seconds < 86400) {
      time = `${Math.floor(seconds / 3600)} hours ago`;
    } else {
      time = `${Math.floor(seconds / 86400)} days ago`;
    }
    console.log(postTime, time);
    return time;
  };

  const likeComment = () => {
    console.log("click to like comment");
  };

  return (
    <>
      <div className="flex gap-[15px] px-[29px] py-[29px] w-full rounded-[14px] shadow-custom">
        <img src={Lebron} alt="" className="w-[44px] h-[44px] rounded-[14px]" />
        <div>
          <div>
            <div className="flex gap-[6px] items-center w-full">
              <h2 className="font-semibold text-[#000000] text-[16px]">
                {walletAddressFormatter(comment.author)}
              </h2>
              <div className="w-[5px] h-[5px] bg-[#999270] rounded"></div>
              <h2 className="font-semibold text-[#999270] text-[16px]">
                {getTimestamp(comment.timestamp)}
              </h2>
            </div>
            <p className="italic font-normal text-[#545151] text-[14px]">{`replying to @${postAuthor}`}</p>
          </div>
          <div>
            <p className="font-medium text-[#000000] text-[14px]">
              {comment.content}
            </p>
          </div>
          <div className="flex gap-[30px] items-center">
            <MediaDetail
              icon={<LikeIcon />}
              text={`${comment.likes}`}
              execute={likeComment}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePostCmments;
