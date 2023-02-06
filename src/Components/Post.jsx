import {
  ArrowsRightLeftIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CreditCardIcon,
  EllipsisHorizontalCircleIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconFilled,
  ChatBubbleOvalLeftEllipsisIcon as ChatIconFilled,
} from "@heroicons/react/24/solid";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Post({ id, author, img, content, timestamp, postPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState(null);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  const address = "0xa2";

  // useEffect(
  //   () =>
  //     onSnapshot(
  //       query(
  //         collection("posts", id, "comments"),
  //         orderBy("timestamp", "desc")
  //       ),
  //       (snapshot) => setComments(snapshot.docs)
  //     ),
  //   [id]
  // );

  // useEffect(
  //   () =>
  //     onSnapshot(collection("posts", id, "likes"), (snapshot) =>
  //       setLikes(snapshot.docs)
  //     ),
  //   [id]
  // );

  const likePost = async () => {
    if (liked) {
    } else {
    }
  };

  const mint = async () => {
    try {
      const options = {
        method: "POST",
        url: "https://api.nftport.xyz/v0/mints/easy/urls",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "89b0800f-c97b-46bc-b7c4-c87bf895d0d6",
        },
        data: {
          chain: "goerli",
          name: content,
          description: content,
          file_url: `https://${img}.ipfs.w3s.link/a.jpeg`,
          mint_to_address: address,
        },
      };
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-3 flex cursor-pointer border-b">
      {!postPage && (
        <img src={img} alt="" className="h-11 w-11 rounded-full mr-4" />
      )}
      <div className="flex flex-col space-y-2 w-full">
        <div className={`flex ${!postPage && "justify-between"}`}>
          {postPage && (
            <img
              src={img}
              alt="Profile Pic"
              className="h-11 w-11 rounded-full mr-4"
            />
          )}
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4
                className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline ${
                  !postPage && "inline-block"
                }`}
              >
                {author}
              </h4>
              <span
                className={`text-sm sm:text-[15px] ${!postPage && "ml-1.5"}`}
              >
                @{author}
              </span>
            </div>
            ·{" "}
            {!postPage && (
              <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
                {content}
              </p>
            )}
          </div>
          <div className="hover:underline text-sm sm:text-[15px]">
            {timestamp}
          </div>
          <div className="icon group flex-shrink-0 ml-auto">
            <EllipsisHorizontalCircleIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
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
              <ChatBubbleOvalLeftEllipsisIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
            {comments.length > 0 && (
              <span className="group-hover:text-[#1d9bf0] text-sm">
                {comments.length}
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
              <div className="icon group-hover:bg-green-500/10">
                <ArrowsRightLeftIcon className="h-5 group-hover:text-green-500" />
              </div>
            </div>
          )}

          <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
              e.stopPropagation();
              likePost();
            }}
          >
            <div className="icon group-hover:bg-pink-600/10">
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
                {likes.length}
              </span>
            )}
          </div>

          <div className="icon group">
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          <div className="icon group">
            <CreditCardIcon
              className="h-5 group-hover:text-[#1d9bf0]"
              onClick={mint}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
