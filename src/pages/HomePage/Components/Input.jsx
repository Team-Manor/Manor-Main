import React, { useRef, useState, useEffect, useContext } from "react";
import Lebron from "../../../assets/lebron.png";
import {
  FilterIcon,
  GalleryIcon,
  GifIcon,
  EmojiIcon,
  CalendarIcon,
} from "../../../assets/Icons";

function Input() {
  const [postText, setPostText] = useState("");

  return (
    <>
      <div className="flex w-full justify-between gap-[17px] bg-lilac px-[28px] py-[20px] rounded-[14px] border-none">
        <img src={Lebron} alt="" className="w-[44px] h-[44px] rounded-[14px]" />
        <div className="flex flex-col gap-[12px] flex-grow">
          <textarea
            type="text"
            placeholder="Write something here..."
            className="border-none bg-inherit focus:border-none resize-none h-12"
            onChange={(e) => setPostText(e.target.value)}
          />
          <section className="flex gap-[13px]">
            <div className={iconStyle}>
              <FilterIcon />
            </div>
            <div className={iconStyle}>
              <GalleryIcon />
            </div>
            <div className={iconStyle}>
              <GifIcon />
            </div>
            <div className={iconStyle}>
              <EmojiIcon />
            </div>
            <div className={iconStyle}>
              <CalendarIcon />
            </div>
          </section>
        </div>
        <div className="flex h-full items-end">
          <button className="bg-black px-[30px] py-[10px] rounded-[14px] font-semibold text-white">
            Post
          </button>
        </div>
      </div>
    </>
  );
}
const iconStyle = `cursor-pointer`;

export default Input;
