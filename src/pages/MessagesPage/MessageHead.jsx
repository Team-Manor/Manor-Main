import React, { useState } from "react";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Conversation from "./Conversation";

const MessageHead = () => {
  const conversations = [
    {
      image: "/baka.jfif",
      userName: "Oghenetega",
      time: "45mins ago",
      lastMessage: "I refuse to abandon any hope!!!",
      isActive: true,
    },
    {
      image: "/baka.jfif",
      userName: "Dayo_mah gee@234",
      time: "3 days ago",
      lastMessage: "Cry me a river",
      isActive: false,
    },
    {
      image: "/baka.jfif",
      userName: "maybeDestiny!@",
      time: "1 month ago",
      lastMessage: "Ouch",
      isActive: false,
    },
  ];

  return (
    <div className="border-l border-r w-full">
      <div className="flex justify-between px-4 py-2">
        <h2 className="text-lg sm:text-xl font-bold">Messages</h2>
        <div className="flex gap-3">
          <div className="hoverAnimation rounded-full cursor-pointer w-9 h-9 flex items-center justify-center xl:px-0 ml-auto hover:text-[#0090ea69] hover:bg-[#0090ea69]">
            <Cog8ToothIcon className="h-5" />
          </div>
          <div className="hoverAnimation rounded-full cursor-pointer w-9 h-9 flex items-center justify-center xl:px-0 ml-auto hover:text-[#0090ea69] hover:bg-[#0090ea69]">
            <EnvelopeIcon className="h-5" />
          </div>
        </div>
      </div>
      <div className="px-4 w-full">
        <input
          type="text"
          placeholder="Search direct messages"
          className="w-full border-1 rounded-3xl border-black py-2 text-center text-base"
        />
      </div>
      <div className="w-full mt-4">
        {conversations.map((conversation) => {
          return (
            <>
              <Conversation
                image={conversation.image}
                userName={conversation.userName}
                time={conversation.time}
                lastMessage={conversation.lastMessage}
                isActive={conversation.isActive}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MessageHead;
