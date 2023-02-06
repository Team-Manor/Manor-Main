import React, { useState } from "react";
import BaseLayout from "../../Components/BaseLayout";
import SideBar from "../../Components/Sidebar";

const MyStreamsPage = () => {
  return (
    <div className="w-screen flex justify-center bg-[#f1f1f1] min-h-screen">
      <div className="flex w-[1320px] mx-auto">
        <div className="w-[30%] border-r border-r-gray-200">
          <SideBar />
        </div>
        <div className="ml-4">
          <div className="flex justify-end my-5">
            <button className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8]">
              Upload
            </button>
          </div>
          <h2 className="font-bold text-3xl my-4">Previous Uploads</h2>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <img
                className="rounded-lg"
                src="/hqdefault.webp"
                alt="img"
                width="251"
                height="141"
              />
              <h2 className="font-medium text-base">
                THE OCTUPUS!! BEST GK IN FIFA MOBILE 23
              </h2>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="/hqdefault.webp"
                alt="img"
                width="251"
                height="141"
              />
              <h2 className="font-medium text-base">
                THE OCTUPUS!! BEST GK IN FIFA MOBILE 23
              </h2>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="/hqdefault.webp"
                alt="img"
                width="251"
                height="141"
              />
              <h2 className="font-medium text-base">
                THE OCTUPUS!! BEST GK IN FIFA MOBILE 23
              </h2>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="/hqdefault.webp"
                alt="img"
                width="251"
                height="141"
              />
              <h2 className="font-medium text-base">
                THE OCTUPUS!! BEST GK IN FIFA MOBILE 23
              </h2>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="/hqdefault.webp"
                alt="img"
                width="251"
                height="141"
              />
              <h2 className="font-medium text-base">
                THE OCTUPUS!! BEST GK IN FIFA MOBILE 23
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStreamsPage;
