import React, { useEffect, useState, useContext } from "react";
import { ethers } from "ethers";
import { nft_abi } from "../../../constants/constants";
import { AppContext } from "../../../context/AppContext";
function VideoContent({ subscription }) {
  const { address } = useContext(AppContext);
  const [bal, setBal] = useState(0);

  const balanceOf = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        subscription?.contractAddress,
        nft_abi,
        signer
      );
      const balance = await contract.balanceOf(address);
      const bal = Number(ethers.utils.formatEther(balance));

      setBal(bal);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    balanceOf();
  }, []);

  let time = "now";

  const getTimestamp = async () => {
    const date = new Date(subscription?.timestamp * 1000);
    const today = new Date();

    const diff = today - date;

    const seconds = Math.floor(diff / 1000);

    if (seconds < 60) {
      time = `${seconds} seconds ago`;
    } else if (seconds < 3600) {
      time = `${Math.floor(seconds / 60)} minutes ago`;
    } else if (seconds < 86400) {
      time = `${Math.floor(seconds / 3600)} hours ago`;
    } else {
      time = `${Math.floor(seconds / 86400)} days ago`;
    }
  };

  getTimestamp();
  const walletAddressFormatter = (str) => {
    const begin = str.substring(0, 7);
    const end = str.slice(-4);
    return `${begin}****${end}`;
  };
  console.log(bal);

  return (
    <>
      {bal ? (
        <div className="w-[22.5%]">
          <div className="rounded-lg w-full aspect-[5/3]">
            <video
              src={`https://gateway.lighthouse.storage/ipfs/${subscription?.videoHash}`}
              type="video/mp4"
              controls
              muted
              autoPlay={"autoplay"}
              preLoad="auto"
              loop
              alt=""
              className="rounded-t-[14px] w-full object-cover object-center mb-[9px]"
            />
          </div>
          <h3 className="font-semibold text-[18px] leading-[23px] mb-[0]">
            {subscription?.title}
          </h3>
          <h3 className="font-semibold text-[14px] text-gray-400 mb-[0]">
            {walletAddressFormatter(subscription?.author)}
          </h3>
          <div className="flex gap-[4px] items-center">
            <h2 className="font-semibold text-gray-400 text-[14px]"></h2>
            <div className="w-[25px] h-[25px] text-gray-400 rounded-full"></div>
            <h2 className="font-semibold text-gray-400 text-[14px]">{time}</h2>
          </div>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
}

export default VideoContent;
