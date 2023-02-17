import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import Suggestions from "../Suggestions";

const BaseLayout = ({ mainComponent, activePage = "Home", rightComponent }) => {
  return (
    <>
      <div className="w-screen max-w-full flex justify-center bg-[#f1f1f1] min-h-screen">
        <div className="w-[1320px] mx-auto">
          <div className="w-full h-[10vh]">
            <Topbar activePage={activePage} />
          </div>
          <div className="flex w-full min-h-[90vh] pt-[45px] gap-x-[32px]">
            <div className="w-[20%] h-full">
              <Sidebar />
            </div>
            <div className={`h-full ${rightComponent ? `w-[55%]` : `w-[80%]`}`}>
              {mainComponent}
            </div>
            <div className={` h-full ${rightComponent ? `w-[25%]` : `hidden`}`}>
              <Suggestions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
