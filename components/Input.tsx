import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function Input() {
  return (
    <div
      className="border-gray-400 py-3 flex space-x-3 ${
"
    >
      <div className="border-b py-3 px-3 bordergray-400 w-full">
        <div>
          <textarea
            placeholder="Waddup..."
            rows={2}
            className="bg-transparent outline-none text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex justify-between items-center min-w-[25%]">
            <div className="icon">
              <PhotoIcon className="text-gray-600 h-[22px]" />
              <input type="file" hidden />
            </div>

            <div className="icon rotate-90">
              <ChartBarIcon className="text-gray-600 h-[22px]" />
            </div>

            <div className="icon">
              <FaceSmileIcon className="text-gray-600 h-[22px]" />
            </div>

            <div className="icon">
              <CalendarIcon className="text-gray-600 h-[22px]" />
            </div>
          </div>
          <button className="bg-[#1d9bf0] rounded-full text-white px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-default">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
