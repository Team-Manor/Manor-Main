import React, { useEffect, useState, useContext } from "react";
import { AddIcon, BackIcon } from "../../../assets/Icons";

function UploadVideo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [contractAddress, setContractAddress] = useState("");
  const [videoName, setVideoName] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  return (
    <>
      <div className="w-full flex flex-col items-center gap-[4px]">
        <div className="cursor-pointer" onClick={() => setModalOpen(true)}>
          <AddIcon />
        </div>
        <p className="font-medium text-[18px]">Upload Video</p>
      </div>
      {modalOpen ? (
        <div className="absolute w-screen h-screen backdrop-blur-[8px] left-0 top-0 z-10 flex justify-center items-center">
          <section className="w-[380px] h-[360px] bg-white z-20 rounded-[14px] flex flex-col">
            <div className="bg-lilac w-full rounded-t-[14px] px-[32px] py-[12px] flex items-center">
              <div
                onClick={() => setModalOpen(false)}
                className="cursor-pointer"
              >
                <BackIcon />
              </div>
              <p className="text-deepBlue w-full text-center">Upload a Video</p>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center">
              <p className="text-black text-[14px] font-normal">
                Input Video Details
              </p>
              <input
                onChange={(e) => setContractAddress(e.target.value)}
                type="text"
                placeholder="set your contract address"
                className="border-2 border-black rounded-[14px] w-[260px] h-[46px] bg-white text-black text-[14px] font-normal mb-[16px] text-center"
              />
              <input
                onChange={(e) => setVideoName(e.target.value)}
                type="text"
                placeholder="enter video name"
                className="border-2 border-black rounded-[14px] w-[260px] h-[46px] bg-white text-black text-[14px] font-normal mb-[16px] text-center"
              />
              <input
                onChange={(e) => setVideoDescription(e.target.value)}
                type="text"
                placeholder="enter video description"
                className="border-2 border-black rounded-[14px] w-[260px] h-[46px] bg-white text-black text-[14px] font-normal mb-[16px] text-center"
              />
              <button
                onClick={() => {
                  setModalOpen(false);
                }}
                className="bg-deepBlue px-[35px] h-[46px] text-white font-semibold text-[15px] rounded-[14px]"
              >
                Upload
              </button>
            </div>
          </section>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default UploadVideo;
