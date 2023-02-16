import React, { useRef, useState, useEffect, useContext } from "react";
import { OptionsIcon } from "../../../assets/Icons";

function PostHeader({ props }) {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex gap-[6px] items-center">
          <h2 className="font-semibold text-[#000000] text-[16px]">
            0x79348****a028
          </h2>
          <div className="w-[5px] h-[5px] bg-[#999270] rounded"></div>
          <h2 className="font-semibold text-[#999270] text-[16px]">9h ago</h2>
        </div>
        <div className="cursor-pointer">
          <OptionsIcon />
        </div>
      </div>
    </>
  );
}

export default PostHeader;
