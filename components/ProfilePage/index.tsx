import { PencilIcon } from "@heroicons/react/24/outline";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";

const ProfilePage = () => {
  const wallet: string = "0x06325626977Af7Ac4E8d19a6acFdB8Da2102aFF3";
  const tag: string = "@65ycbgdGJSV0SVDB";

  const [postsActive, setPostsActive] = useState(true);

  const setSectionHandler = () => {
    setPostsActive(false);
  };

  return (
    <div className="flex-grow border-l border-r min-w-[50%] sm:ml-[73px] xl:ml-[370px]">
      <div className="flex items-center gap-4">
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0">
          <ArrowSmallLeftIcon className="h-5" />
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-bold">{wallet}</h2>
          <p className="">0 posts</p>
        </div>
      </div>
      <div className="w-[550px] h-[20vh] bg-slate-400"></div>
      <div className="flex justify-end items-center px-4 relative py-8">
        <div className="absolute left-4">
          <Image
            src="/baka.jfif"
            width={20}
            height={20}
            alt="img"
            className="h-28 w-28 rounded-full"
          />
        </div>
        <button className="px-4 py-1 text-[12px] rounded-3xl border-[#0090ea69] border-2 font-bold text-[#0090ea69] hover:text-white hover:bg-[#0090ea69] bg-gray-20">
          Setup Profile
        </button>
      </div>
      <div className="py-4 px-4 border-b-[8px] border-gray-200">
        <h2 className="font-bold text-base">{wallet}</h2>
        <h2 className=" text-gray-400 text-sm">{tag}</h2>
      </div>
      <section>
        <div className="flex w-[100%]">
          <button
            className={`w-[50%] py-2 text-center font-semibold text-sm border-b-2 hover:bg-gray-200 hover:text-black ${
              postsActive
                ? "border-b-black text-black"
                : "border-b-gray-300 text-gray-300"
            }`}
            onClick={() => setPostsActive(true)}
          >
            POSTS
          </button>
          <button
            className={`w-[50%] py-2 text-center font-semibold text-sm border-b-2 hover:bg-gray-200 hover:text-black ${
              postsActive
                ? "border-b-gray-300 text-gray-300"
                : "border-b-black text-black"
            }`}
            onClick={() => setPostsActive(false)}
          >
            MEDIA
          </button>
        </div>
        <section>
          {postsActive ? (
            <>
              <div>Posts</div>
            </>
          ) : (
            <>
              <div>Media</div>
            </>
          )}
        </section>
      </section>
    </div>
  );
};

export default ProfilePage;
