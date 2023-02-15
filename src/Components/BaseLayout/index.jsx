import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

const BaseLayout = ({ mainComponent, rightComponent }) => {
  return (
    <>
      <div className="w-screen flex justify-center bg-[#f1f1f1] min-h-screen">
        <div className="w-[1320px] mx-auto">
          <div className="w-full h-[10vh]">
            <Topbar />
          </div>
          <div className="flex w-full min-h-[90vh] pt-[45px]">
            <div className="w-[20%] h-full">
              <Sidebar />
            </div>
            <div className={`h-full ${rightComponent ? `w-[55%]` : `w-[80%]`}`}>
              {mainComponent}
            </div>
            <div className={` h-full ${rightComponent ? `w-[25%]` : `hidden`}`}>
              {rightComponent}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
