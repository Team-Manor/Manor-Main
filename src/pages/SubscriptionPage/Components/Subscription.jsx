import React, { useEffect, useState, useContext } from "react";
import AllSubscriptions from "./AllSubscriptions";
import videoImage from "../../../assets/videoImage.png";
import UploadVideo from "./UploadVideo";
import { ethers } from "ethers";
import { video_abi, video_address } from "../../../constants/constants";
function Subscription() {
  const [videos, setVideos] = useState([]);
  const getAllVideos = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(video_address, video_abi, signer);
      const videos = await contract.getAllVideos();
      setVideos(videos);
      console.log(videos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  const weekSubscriptions = [
    {
      img: videoImage,
      videoTitle: "My first video tryouts",
      videoAuthor: "0x06325626977Af7Ac4E8d19a6acFdB8Da2102aFF3",
      videoViews: "3450",
      videoTimeStamp: "9h ago",
    },
    {
      img: videoImage,
      videoTitle: "beerereryjyt",
      videoAuthor: "0x06325626977Af7Ac4E8d19a6acFdB8Da2102aFF3",
      videoViews: "3450",
      videoTimeStamp: "9h ago",
    },
    {
      img: videoImage,
      videoTitle: "The initital youtube Video that led to many more...",
      videoAuthor: "0x06325626977Af7Ac4E8d19a6acFdB8Da2102aFF3",
      videoViews: "3450",
      videoTimeStamp: "9h ago",
    },
    {
      img: videoImage,
      videoTitle:
        "I really dont want to do this, but Magnus Carlson is so greate",
      videoAuthor: "0x06325626977Af7Ac4E8d19a6acFdB8Da2102aFF3",
      videoViews: "3450",
      videoTimeStamp: "9h ago",
    },
  ];

  const monthSubscriptions = weekSubscriptions;
  return (
    <>
      <div className="w-full flex flex-col gap-[44px]">
        <UploadVideo />
        <AllSubscriptions timeSlot={"Week"} subscriptions={videos} />
        <AllSubscriptions timeSlot={"Month"} subscriptions={videos} />
      </div>
    </>
  );
}

export default Subscription;
