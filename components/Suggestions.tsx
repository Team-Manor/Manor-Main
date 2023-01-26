import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

function Suggestions() {
  const suggestions = [
    { name: "Alpha", img: "/baka.jfif" },
    { name: "Alpha", img: "/baka.jfif" },
    { name: "Alpha", img: "/baka.jfif" },
  ];
  return (
    <div className="w-1/2 px-3">
      <div className="flex mb-8 items-center justify-between bg-transparent border mt-4 rounded-md p3 relative ">
        <input
          type="text"
          className="bg-transparent text-gray-500 pl-2 h-10 outline-none absolte inset0 pl11 border border-transparent w-full rounded-md"
          placeholder="Search Posts"
        />
        <MagnifyingGlassIcon className="h-5 pr-3 cursor-pointer" />
      </div>
      {/* <div className="flex items-center bg-transparent border mt-4 rounded-md p-3 relative">
        <MagnifyingGlassIcon className="h-5 z-50" />
        <input
          type="text"
          className="bg-transparent text-gray-500 outline-none absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-md"
          placeholder="Search Posts"
        />
      </div> */}
      <div>
        <h2 className="font-semibold text-xl">Who To Follow</h2>
        {suggestions.map((suggestion, i) => (
          <div
            className="bg-gray-200 px-3 rounded-2xl my-4 py-3 flex justify-between items-center"
            key={i}
          >
            <div className="flex items-end">
              <Image
                src={suggestion.img}
                width={40}
                height={40}
                alt="img"
                className="border-2 mr-4 border-white rounded-[50%] h-16 w-16"
              />
              <div className="mb-1">
                <p>{suggestion.name}</p>
                <p>@{suggestion.name}</p>
              </div>
            </div>
            <button className="rounded-3xl px-3 hover:text-white hover:bg-black bg-white font-semibold py-2">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
