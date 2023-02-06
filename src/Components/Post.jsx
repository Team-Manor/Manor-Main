import {
  CurrencyDollarIcon,
  DocumentDuplicateIcon,
  CreditCardIcon,
  ChatBubbleLeftIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconFilled,
  ChatBubbleOvalLeftEllipsisIcon as ChatIconFilled,
} from "@heroicons/react/24/solid";
import { useAccount } from "wagmi";
import axios from "axios";
import { SendTransaction } from "./SendTransaction";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useEffect, useState } from "react";

function Post({
  id,
  author,
  img,
  content,
  timestamp,
  postPage,
  contractAddress,
  likeCount,
  commentCount,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState(null);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const [show, setShow] = useState(false);

  const { address, isConnected } = useAccount();

  let time = "now";

  const getTimestamp = async () => {
    const date = new Date(timestamp * 1000);
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

  const getContractAddress = async () => {
    const options = {
      method: "GET",
      url: `https://api.nftport.xyz/v0/contracts/${contractAddress}`,
      params: { chain: "goerli" },
      headers: {
        accept: "application/json",
        Authorization: "5a7ab1f1-b76b-4434-85f4-06868427084c",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getContractAddress();
  }, [address]);

  return (
    <div className="p-3 flex cursor-pointer border-b">
      <div className="flex flex-col space-y-2 w-full">
        <div className={`flex`}>
          {postPage && (
            <img
              src="https://www.shutterstock.com/image-vector/human-head-profile-black-shadow-600w-1208371933.jpg"
              alt="Profile Pic"
              className="h-11 w-11 rounded-full mr-4"
            />
          )}
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <span className={`text-sm sm:text-[15px]`}>
                @{author.slice(0, 6)}
              </span>
            </div>
            ·{" "}
            {!postPage && (
              <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
                {content}
              </p>
            )}
          </div>
          <div className="hover:underline text-sm sm:text-[15px]">{time}</div>
          <div
            className="icon group flex-shrink-0 ml-auto"
            onClick={() => {
              navigator.clipboard.writeText(contractAddress);
            }}
          >
            <DocumentDuplicateIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>
        {postPage && <p className="mt-0.5 text-lg">{content}</p>}
        <img
          src={img}
          alt=""
          className="rounded-2xl max-h-[700px] object-cover mr-2"
        />
        <div
          className={`text-[#6e767d] flex justify-between w-10/12 ${
            postPage && "mx-auto"
          }`}
        >
          <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
              e.stopPropagation();
              setPostId(id);
              setIsOpen(true);
            }}
          >
            <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
              <ChatBubbleLeftIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
            {comments.length > 0 && (
              <span className="group-hover:text-[#1d9bf0] text-sm">
                {commentCount}
              </span>
            )}
          </div>

          {author === address ? (
            <div
              className="flex items-center space-x-1 group"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="icon group-hover:bg-red-600/10">
                <TrashIcon className="h-5 group-hover:text-red-600" />
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-1 group">
              <div
                className="icon group-hover:bg-green-500/10"
                onClick={() => {
                  setShow(!show);
                }}
              >
                <CurrencyDollarIcon className="h-5 group-hover:text-green-500" />
              </div>
              <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton></Modal.Header>

                <Modal.Body>
                  <SendTransaction />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShow(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          )}

          <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
              e.stopPropagation();
              likePost();
            }}
          >
            <div
              className="icon group-hover:bg-pink-600/10"
              onClick={() => {
                setLiked(!liked);
              }}
            >
              {liked ? (
                <HeartIconFilled className="h-5 text-pink-600" />
              ) : (
                <HeartIcon className="h-5 group-hover:text-pink-600" />
              )}
            </div>
            {likes.length > 0 && (
              <span
                className={`group-hover:text-pink-600 text-sm ${
                  liked && "text-pink-600"
                }`}
              >
                {likeCount}
              </span>
            )}
          </div>

          <div className="icon group">
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          <div className="icon group">
            <CreditCardIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
