import React, { useRef, useState, useEffect, useContext } from "react";
import Lebron from "../../../assets/lebron.png";
import {
  FilterIcon,
  GalleryIcon,
  GifIcon,
  EmojiIcon,
  CalendarIcon,
  BackIcon,
} from "../../../assets/Icons";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Input() {
  const [modalOpen, setModalOpen] = useState(false);
  const [NFTPrice, setNFTPrice] = useState(0);
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
            <div className={iconStyle} onClick={() => setModalOpen(true)}>
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
      {modalOpen ? (
        <div className="absolute w-screen h-screen bg-gray-300 opacity-90 left-0 top-0 z-10 flex justify-center items-center">
          <section className="w-[380px] h-[360px] bg-white z-20 rounded-[14px] flex flex-col">
            <div className="bg-lilac w-full rounded-t-[14px] px-[32px] py-[12px] flex items-center">
              <div
                onClick={() => setModalOpen(false)}
                className="cursor-pointer"
              >
                <BackIcon />
              </div>
              <p className="text-deepBlue w-full text-center">Upload an NFT</p>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center">
              <p className="text-black text-[14px] font-normal">Set price</p>
              <input
                onChange={(e) => setNFTPrice(e.target.value)}
                type="text"
                placeholder="enter amount..."
                className="border-2 border-black rounded-[14px] w-[260px] h-[46px] bg-white text-black text-[14px] font-normal mb-[16px] text-center"
              />
              <button
                onClick={() => {
                  setModalOpen(false);
                  toast.success(`NFT price set to ${NFTPrice}`);
                }}
                className="bg-deepBlue px-[35px] h-[46px] text-white font-semibold text-[15px] rounded-[14px]"
              >
                Set
              </button>
            </div>
          </section>
        </div>
      ) : (
        <></>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
const iconStyle = `cursor-pointer`;

export default Input;
