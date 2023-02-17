import React from "react";
import Logo from "../../assets/logo.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Topbar() {
  return (
    <>
      <div className="p-2 pt-6 w-full h-full flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-5xl mr-3">Manor</p>
          <img src={Logo} alt="logo" />
        </div>
        <div className="min-w-[80%] flex justify-between items-center mr-3">
          <p className="text-primary">Home</p>
          <div className="flex items-center min-w-[40%]">
            <input
              type="text"
              className="focus-visible:outline-0 border w-full px-3 rounded-lg h-12 border-deepBlue"
            />
            <div className="bg-deepBlue h-10 rounded-lg justify-center ml-2 w-8 flex items-center">
              <MagnifyingGlassIcon className="text-white h-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
