import React, { useEffect, useState, useContext } from "react";

function VideoContent({ subscription }) {
  const walletAddressFormatter = (str) => {
    const begin = str.substring(0, 7);
    const end = str.slice(-4);
    return `${begin}****${end}`;
  };

  return (
    <>
      <div className="w-[22.5%]">
        <img
          src={subscription.img}
          alt=""
          className="rounded-t-[14px] w-[full] h-auto mb-[9px]"
        />
        <h3 className="font-semibold text-[18px] leading-[23px] mb-[0]">
          {subscription.videoTitle}
        </h3>
        <h3 className="font-semibold text-[14px] text-gray-400 mb-[0]">
          {walletAddressFormatter(subscription.videoAuthor)}
        </h3>
        <div className="flex gap-[4px] items-center">
          <h2 className="font-semibold text-gray-400 text-[14px]">
            {walletAddressFormatter(subscription.videoViews)}
          </h2>
          <div className="w-[25px] h-[25px] text-gray-400 rounded-full"></div>
          <h2 className="font-semibold text-gray-400 text-[14px]">
            {subscription.videoTimeStamp}
          </h2>
        </div>
      </div>
    </>
  );
}

export default VideoContent;
