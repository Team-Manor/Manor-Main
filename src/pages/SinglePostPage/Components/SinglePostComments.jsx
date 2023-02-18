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
              <h2 className="font-semibold text-[#999270] text-[16px]">{`${comment.timeStamp} ago`}</h2>
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
