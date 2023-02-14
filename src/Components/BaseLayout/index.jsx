import React from "react";
import Sidebar from "../Sidebar";

const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="w-screen flex justify-center bg-[#f1f1f1] min-h-screen">
        <div className="flex w-[1320px] mx-auto">
          <div className="w-[25%]">
            <Sidebar />
          </div>
          <div className="w-[75%]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
