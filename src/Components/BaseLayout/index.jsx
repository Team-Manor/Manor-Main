import React from "react";
import Sidebar from "../Sidebar";
import Suggestions from "../Suggestions";

const Page = ({ children }) => {
  return (
    <>
      <div className="w-screen flex justify-center bg-[#f1f1f1] min-h-screen">
        <div className="flex w-[1320px] mx-auto">
          <div className="w-[30%]">
            <Sidebar />
          </div>
          <div className="w-2/5">{children}</div>
          <div className="w-[30%]">
            <Suggestions />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
