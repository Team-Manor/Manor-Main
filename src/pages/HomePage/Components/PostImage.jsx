import React, { useRef, useState, useEffect, useContext } from "react";
import dummy1 from "../../../assets/images/1.png";
import dummy2 from "../../../assets/images/2.png";
import dummy3 from "../../../assets/images/3.png";
import dummy4 from "../../../assets/images/4.png";
import dummy5 from "../../../assets/images/5.png";

function PostImage({ postImage, singlePostCall }) {
  return (
    <>
      <section className="w-full gap-[14px]">
        {/* single image */}
        <div className="w-full">
          {postImage.length === 1 ? (
            <img
              src={`https://gateway.lighthouse.storage/ipfs/${postImage[0]}`}
              alt=""
              className="h-auto w-[75%] rounded-[14px]"
            />
          ) : (
            <></>
          )}
        </div>
        {/* double image */}
        <div className="w-full">
          {postImage.length === 2 ? (
            <div
              className={`flex w-full gap-[12px] ${
                singlePostCall ? `flex-col` : ``
              }`}
            >
              <img
                src={`https://gateway.lighthouse.storage/ipfs/${postImage[0]}`}
                alt=""
                className={`h-auto rounded-[14px] ${
                  singlePostCall ? `w-[75%]` : `w-[50%]`
                }`}
              />
              <img
                src={`https://gateway.lighthouse.storage/ipfs/${postImage[1]}`}
                alt=""
                className={`h-auto rounded-[14px] ${
                  singlePostCall ? `w-[75%]` : `w-[50%]`
                }`}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        {/* triple image */}
        <div className="">
          {postImage.length === 3 ? (
            <div
              className={`flex w-full gap-[12px] ${
                singlePostCall ? `flex-col` : ``
              }`}
            >
              <img
                src={`https://gateway.lighthouse.storage/ipfs/${postImage[0]}`}
                alt=""
                className={`h-auto rounded-[14px] ${
                  singlePostCall ? `w-[75%]` : `w-[60%]`
                }`}
              />
              <div
                className={`flex flex-col gap-[15px] ${
                  singlePostCall ? `w-[75%]` : `w-[40%]`
                }`}
              >
                <img
                  src={`https://gateway.lighthouse.storage/ipfs/${postImage[1]}`}
                  alt=""
                  className="h-auto w-full rounded-[14px]"
                />
                <img
                  src={`https://gateway.lighthouse.storage/ipfs/${postImage[2]}`}
                  alt=""
                  className="h-auto w-full rounded-[14px]"
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
}

export default PostImage;
