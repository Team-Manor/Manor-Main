import React, { useEffect, useState, useContext } from "react";
import { AddIcon, BackIcon } from "../../../assets/Icons";
import lighthouse from "@lighthouse-web3/sdk";
import { ethers } from "ethers";
import { video_abi, video_address } from "../../../constants/constants";
import { ToastContainer, toast } from "react-toastify";

function UploadVideo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [contractAddress, setContractAddress] = useState("");
  const [videoName, setVideoName] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoFileHash, setVideoFileHash] = useState("");

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const fileHash = await lighthouse.upload(
        e,
        import.meta.env.VITE_API_KEY,
        progressCallback
      );
      setVideoFileHash(fileHash.data.Hash);
      toast.info("Video Ready for Upload");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  const uploadVideo = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(video_address, video_abi, signer);
      const tx = await contract.createVideo(
        videoName,
        videoFileHash,
        contractAddress
      );
      await tx.wait();
      toast.success("Video Uploaded Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="w-full flex flex-col items-center gap-[4px]">
        <div className="cursor-pointer" onClick={() => setModalOpen(true)}>
          <AddIcon />
        </div>
        <p className="font-medium text-[18px]" onClick={uploadVideo}>
          Upload Video
        </p>
      </div>
      {modalOpen ? (
        <div className="absolute w-screen h-screen backdrop-blur-[8px] left-0 top-0 z-10 flex justify-center items-center">
          <section className="w-[380px] h-[500px] bg-white z-20 rounded-[14px] flex flex-col">
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
              <div class="flex justify-center">
                <div class="mb-3 w-96">
                  <label
                    for="formFile"
                    class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                  ></label>
                  <input
                    class="relative m-0 block w-200px min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent"
                    type="file"
                    id="formFile"
                    onChange={handleUpload}
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  setModalOpen(false);
                  uploadVideo();
                }}
                className="bg-lilac text-deepBlue text-[14px] font-medium rounded-[14px] w-[260px] h-[46px]"
              >
                Upload
              </button>
            </div>
          </section>
        </div>
      ) : (
        <></>
      )}
      <ToastContainer />
    </>
  );
}

export default UploadVideo;
