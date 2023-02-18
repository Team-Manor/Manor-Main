import React, { useState } from "react";
import { BackIcon } from "../../../assets/Icons";
import { useNavigate } from "react-router-dom";

function SinglePostTopBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full px-[20px] py-[12px] flex items-center">
        <div onClick={() => navigate(-1)} className="cursor-pointer">
          <BackIcon />
        </div>
        <p className="text-deepBlue w-full text-center">Thread</p>
      </div>
    </>
  );
}

export default SinglePostTopBar;
