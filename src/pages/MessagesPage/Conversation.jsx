import React, { useState } from "react";
import Image from "next/image";

const Conversation = ({ image, userName, time, lastMessage, isActive }) => {
  return (
    <div
      className={`w-full flex items-center gap-2 px-4 py-4 cursor-pointer ${
        isActive ? "bg-gray-400" : "bg-gray-200"
      }`}
    >
      <Image
        src={image}
        width={16}
        height={16}
        alt="img"
        className="rounded-[50%] h-8 w-8"
      />
      <div className="">
        <div className="flex gap-4">
          <p className="text-[12px] font-semibold">{userName}</p>
          <p className="text-[12px] font-semibold">{time}</p>
        </div>
        <p className="text-[12px]">{lastMessage}</p>
      </div>
    </div>
  );
};

export default Conversation;
