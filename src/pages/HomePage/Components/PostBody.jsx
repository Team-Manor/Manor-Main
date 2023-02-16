import React, { useRef, useState, useEffect, useContext } from "react";
import dummy1 from "../../../assets/images/1.png";
import dummy2 from "../../../assets/images/2.png";
import dummy3 from "../../../assets/images/3.png";

function PostBody({ props }) {
  return (
    <>
      <div className="">
        <section>
          <p className={pStyle}>Can you hear that...?</p>
          <p className={pStyle}>Something is moving closer...</p>
          <p className={pStyle}>Some kind of flying machine...?</p>
        </section>
        <section className="flex w-full gap-[14px]">
          <img src={dummy1} alt="" className="h-[] w-[] rounded-[14px]" />
          <div className="flex flex-col w-full gap-[15px]">
            <img src={dummy2} alt="" className="h-[] w-[] rounded-[14px]" />
            <img src={dummy3} alt="" className="h-[] w-[] rounded-[14px]" />
          </div>
        </section>
      </div>
    </>
  );
}
const pStyle = `font-normal text-[16px] my-[8px]`;

export default PostBody;
