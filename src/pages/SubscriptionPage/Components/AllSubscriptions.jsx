import React, { useEffect, useState, useContext } from "react";
import VideoContent from "./VideoContent";
import lighthouse from "@lighthouse-web3/sdk";

function AllSubscriptions({ timeSlot, subscriptions }) {
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [videoHash, setVideoHash] = useState(null);
  const [thumbnailHash, setThumbnailHash] = useState(null);
  const [videoTitle, setVideoTitle] = useState(null);
  const [videoDescription, setVideoDescription] = useState(null);
  const [videoTags, setVideoTags] = useState(null);
  const [contractAddress, setContractAddress] = useState(null);

  const accessCondition = {
    id: 1,
    chain: "Mumbai",
    method: "balanceOf",
    standardContractType: "ERC721",
    contractAddress: "0x1a6ceedD39E85668c233a061DBB83125847B8e3A",
    returnValueTest: { comparator: ">=", value: "1" },
    parameters: [":userAddress"],
  };

  const uploadGatedVideo = async () => {
    const fileHash = await lighthouse.upload(
      document.getElementById("file"),
      import.meta.env.VITE_API_KEY
    );
    console.log(fileHash.data.Hash);
    const videoHash = await lighthouse.upload(
      document.getElementById("file"),
      import.meta.env.VITE_API_KEY
    );
    console.log(videoHash.data.Hash);
    const video = await lighthouse.createVideo(
      {
        title: "Test Video",
        description: "Test Description",
        tags: ["test", "video"],
        accessConditions: [accessCondition],
        videoHash: "qwuqywiuqwiuqywyquywuiqw",
        thumbnailHash: "qwuqywiuqwiuqywyquywuiqw",
      },
      import.meta.env.VITE_API_KEY
    );
    console.log(video);
  };

  return (
    <>
      <div className="w-full">
        <h2 className="mb-[12px] font-semibold">{`This ${timeSlot}`}</h2>
        <div className="w-full gap-[14px] flex flex-wrap">
          {subscriptions.map((subscription) => {
            return (
              <>
                <VideoContent subscription={subscription} />
              </>
            );
          })}
        </div>
        <button onClick={uploadGatedVideo}>video</button>
      </div>
    </>
  );
}

export default AllSubscriptions;
