import React, { useRef, useState, useEffect, useContext } from "react";
import dummy1 from "../../../assets/images/1.png";
import dummy2 from "../../../assets/images/2.png";
import dummy3 from "../../../assets/images/3.png";
import dummy4 from "../../../assets/images/4.png";
import dummy5 from "../../../assets/images/5.png";

function PostImage({ props }) {
  const imageArray = [1, 2, 3];

  return (
    <>
      <section className="w-full gap-[14px]">
        {/* single image */}
        <div className="w-full">
          {imageArray.length === 1 ? (
            <img
              src={dummy1}
              alt=""
              className="h-auto w-[75%] rounded-[14px]"
            />
          ) : (
            <div></div>
          )}
        </div>
        {/* double image */}
        <div className="w-full">
          {imageArray.length === 2 ? (
            <div className="flex w-full gap-[12px]">
              <img
                src={dummy3}
                alt=""
                className="h-auto w-[50%] rounded-[14px]"
              />
              <img
                src={dummy2}
                alt=""
                className="h-auto w-[50%] rounded-[14px]"
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {/* triple image */}
        <div className="">
          {imageArray.length === 3 ? (
            <div className="flex w-full gap-[14px]">
              <img
                src={dummy4}
                alt=""
                className="h-auto w-[60%] rounded-[14px]"
              />
              <div className="flex flex-col w-[40%] gap-[15px]">
                <img
                  src={dummy1}
                  alt=""
                  className="h-auto w-full rounded-[14px]"
                />
                <img
                  src={dummy5}
                  alt=""
                  className="h-auto w-full rounded-[14px]"
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </>
  );
}

export default PostImage;
