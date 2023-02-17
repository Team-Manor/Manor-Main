import React, { useRef, useState, useEffect, useContext } from "react";
import { OptionsIcon } from "../../../assets/Icons";

function PostHeader({ postAuthor, postTime }) {
  const walletAddressFormatter = (str) => {
    const begin = str.substring(0, 7);
    const end = str.slice(-4);
    return `${begin}****${end}`;
  };

  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex gap-[6px] items-center">
          <h2 className="font-semibold text-[#000000] text-[16px]">
            {walletAddressFormatter(postAuthor)}
          </h2>
          <div className="w-[5px] h-[5px] bg-[#999270] rounded"></div>
          <h2 className="font-semibold text-[#999270] text-[16px]">{`${postTime} ago`}</h2>
        </div>
        <div className="cursor-pointer">
          <OptionsIcon />
        </div>
      </div>
    </>
  );
}

export default PostHeader;
