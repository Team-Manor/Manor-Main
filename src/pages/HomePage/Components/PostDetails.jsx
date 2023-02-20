import React, { useState, useEffect, useContext } from "react";
import MediaDetail from "./MediaDetail";
import {
  LikeIcon,
  CommentIcon,
  SaveIcon,
  DonateIcon,
  BackIcon,
} from "../../../assets/Icons";
import { AppContext } from "../../../context/AppContext";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import { useDebounce } from "use-debounce";
import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from "wagmi";
import { utils } from "ethers";
import { nft_abi } from "../../../constants/constants";
import { waitForTransaction } from "@wagmi/core";

function PostDetails({
  postId,
  postLikes,
  postComments,
  postContractAddress,
  postAuthor,
}) {
  const { likePost, createComment } = useContext(AppContext);

  const [liked, setLiked] = useState(false);

  const [debouncedTo] = useDebounce(postAuthor, 500);
  const [modalOpen, setModalOpen] = useState(false);
  const [NFTPrice, setNFTPrice] = useState("");
  const [debouncedAmount] = useDebounce(NFTPrice, 500);

  const { config } = usePrepareSendTransaction({
    request: {
      to: debouncedTo,
      value: debouncedAmount ? utils.parseEther(debouncedAmount) : undefined,
    },
  });
  const { data, sendTransaction } = useSendTransaction(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const like = async () => {
    try {
      await likePost(postId);
      setLiked(!liked);
    } catch (err) {
      console.log(err);
    }
  };

  const commentPost = () => {
    console.log("comment post");
  };

  const mint = async () => {
    try {
      const providers = new ethers.providers.Web3Provider(window.ethereum);
      const signer = providers.getSigner();
      const contract = new ethers.Contract(
        postContractAddress,
        nft_abi,
        signer
      );
      const tx = await contract.safeMint({ value: utils.parseEther("0.1") });
      await tx.wait();
      toast.success("Access Ticket Minted Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Access Ticket Minting Failed");
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mt-[16px]">
        <div className="flex gap-[30px] items-center">
          {liked ? (
            <MediaDetail
              icon={<LikeIcon />}
              text={`${postLikes} `}
              execute={like}
            />
          ) : (
            <MediaDetail
              icon={<LikeIcon />}
              text={`${postLikes} `}
              execute={like}
            />
          )}
          <MediaDetail
            icon={<CommentIcon />}
            text={`${postComments}`}
            execute={commentPost}
          />
          <MediaDetail
            icon={<DonateIcon />}
            text={`Donate`}
            execute={() => setModalOpen(true)}
          />
        </div>
        {postContractAddress.length ? (
          <button
            className="bg-deepBlue px-[30px] py-[6px] rounded-[8px] text-[12px] text-white"
            onClick={mint}
          >
            Mint
          </button>
        ) : (
          <></>
        )}
      </div>
      {modalOpen ? (
        <div className="absolute w-screen h-screen backdrop-blur-[8px] left-0 top-0 z-10 flex justify-center items-center">
          <section className="w-[380px] h-[360px] bg-white z-20 rounded-[14px] flex flex-col">
            <div className="bg-lilac w-full rounded-t-[14px] px-[32px] py-[12px] flex items-center">
              <div
                onClick={() => setModalOpen(false)}
                className="cursor-pointer"
              >
                <BackIcon />
              </div>
              <p className="text-deepBlue w-full text-center">Donate</p>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center">
              <p className="text-black text-[14px] font-normal">Set Amount</p>
              <input
                onChange={(e) => setNFTPrice(e.target.value)}
                type="text"
                placeholder="enter amount..."
                className="border-2 border-black rounded-[14px] w-[260px] h-[46px] bg-white text-black text-[14px] font-normal mb-[16px] text-center"
              />
              <button
                onClick={() => {
                  setModalOpen(false);
                  sendTransaction();
                }}
                className="bg-deepBlue px-[35px] h-[46px] text-white font-semibold text-[15px] rounded-[14px]"
              >
                Donate
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

export default PostDetails;
