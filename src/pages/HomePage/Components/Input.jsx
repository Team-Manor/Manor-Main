import React, { useRef, useState, useEffect, useContext } from "react";
import Lebron from "../../../assets/lebron.png";
import {
  FilterIcon,
  GalleryIcon,
  GifIcon,
  EmojiIcon,
  CalendarIcon,
} from "../../../assets/Icons";
import { AppContext } from "../../../context/AppContext";
import lighthouse from "@lighthouse-web3/sdk";

function Input() {
  const [postText, setPostText] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [postImage, setPostImage] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const { createPost } = useContext(AppContext);

  const filePickerRef = useRef();

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const handleImages = async (e) => {
    let arr = [];
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedFile((prevImages) => prevImages.concat(filesArray));

      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));

      for (let i = 0; i < e.target.files.length; i++) {
        const fileHash = await lighthouse.upload(
          e,
          import.meta.env.VITE_API_KEY,
          progressCallback
        );
        arr.push(fileHash.data.Hash);
        setPostImage(arr);
      }
    }
  };

  const handlePost = async () => {
    try {
      setLoading(true);
      const post = await createPost(postText, postImage, contractAddress);
      console.log(post);
      setLoading(false);
      setContractAddress("");
      setPostText("");
      setPostImage([]);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex w-full justify-between gap-[17px] bg-lilac px-[28px] py-[20px] rounded-[14px] border-none">
        <img src={Lebron} alt="" className="w-[44px] h-[44px] rounded-[14px]" />
        <div className="flex flex-col gap-[12px] flex-grow">
          <textarea
            type="text"
            placeholder="Write something here..."
            className="border-none bg-inherit focus:border-none resize-none h-12"
            onChange={(e) => setPostText(e.target.value)}
            value={postText}
          />
          {selectedFile.length > 0 && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
                cursor="pointer"
              >
                <GalleryIcon className="text-white h-5" />
              </div>

              {selectedFile.map((file) => (
                <img
                  key={file}
                  src={file}
                  alt=""
                  // change flex directton to row and add overflow-x-auto to parent div
                  className="w-[100px] h-[100px] rounded-[14px] object-cover mr-[10px] mb-[10px] cursor-pointer hover:opacity-80 transition-opacity duration-200 ease-in-out transform hover:scale-105 hover:z-10 hover:shadow-lg hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#15181c] hover:ring-[#1da1f2] hover:ring-opacity-50 hover:ring-offset-opacity-50 "
                />
              ))}
            </div>
          )}
          {!loading && (
            <section className="flex gap-[13px]">
              <div className={iconStyle}>
                <FilterIcon />
              </div>
              <div
                className={iconStyle}
                onClick={() => filePickerRef.current.click()}
              >
                <input
                  type="file"
                  multiple
                  hidden
                  accept="image/*"
                  onChange={handleImages}
                  ref={filePickerRef}
                  cursor="pointer"
                />
                <label>
                  <GalleryIcon />
                </label>
              </div>
              <div className={iconStyle}>
                <GifIcon />
              </div>
              <div className={iconStyle}>
                <EmojiIcon />
              </div>
              <div className={iconStyle}>
                <CalendarIcon />
              </div>
            </section>
          )}
        </div>
        <div className="flex h-full items-end">
          <button
            className="bg-black px-[30px] py-[10px] rounded-[14px] font-semibold text-white"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
}
const iconStyle = `cursor-pointer`;

export default Input;
