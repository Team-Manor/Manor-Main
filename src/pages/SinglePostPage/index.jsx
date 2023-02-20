import React, { useEffect, useState, useContext } from "react";
import BaseLayout from "../../Components/BaseLayout";
import Post from "../HomePage/Components/Post";
import Lebron from "../../assets/images/5.png";
import SinglePostTopBar from "./Components/SinglePostTopBar";
import SinglePostCmments from "./Components/SinglePostComments";
import { AppContext } from "../../context/AppContext";
import { BigNumber } from "ethers";

function SinglePostPage() {
  const [singlePostToDisplay, setSinglePostToDisplay] = useState({});
  const [postComments, setPostComments] = useState([]);
  const { getPostComments } = useContext(AppContext);

  const post = {
    postId: 0,
    content:
      "Liverpool: Alisson Becker, Virgil Van Dijk, Joseph Gomez, Andrew Robertson, Trent Alexander-Arnold, Fabinho Tavares, Jordan Henderson, Gioginio Wijnaldum, Sadio Mane, Roberto Firmino Barbosa, Mohamed Salah Ghaly",
    image: [Lebron, Lebron, Lebron],
    author: "0x8888888887Ac4E8d19a6acFdB8Da2115511584",
    likeCount: "12",
    commentCount: "45",
    timeStamp: "9h",
    contractAddress: "",
  };

  const comments = [
    {
      postId: 0,
      commentId: 0,
      likes: "12",
      content: "We love this comment",
      author: "0x06325626977Af7Ac4E8d19a6acFdB8Da2102aFF3",
      timeStamp: "12d",
    },
    {
      postId: 0,
      commentId: 1,
      likes: "80",
      content:
        "Na why I nor dey comment for posts be this. Una go jus dey do anyhow. Omo, God go save this country. because the way we dey go, ee go be like say we nor get understanding and knowledge",
      author: "0x8977Af7Ac4E8d19a6acFdB8Da210754203",
      timeStamp: "1h",
    },
  ];

  const getPostId = () => {
    const route = window.location.pathname.substring(
      6,
      window.location.pathname.length
    );
    return route;
  };

  const filterPosts = (allPostArray, correctPostId) => {
    console.log(correctPostId);
    return allPostArray.filter(
      (post) => BigNumber.from(post[0]).toString() === correctPostId
    );
  };

  useEffect(() => {
    const correctPostId = getPostId();
    const allPosts = JSON.parse(localStorage.getItem("allPosts"));
    const xxxx = filterPosts(allPosts, correctPostId);
    console.log(xxxx);
    // setSinglePostToDisplay(xxxx[0]);
    const personalObject = {
      postId: BigNumber.from(xxxx[0][0]).toString(),
      content: xxxx[0][1],
      image: xxxx[0][2],
      author: xxxx[0][3],
      likes: BigNumber.from(xxxx[0][4]).toString(),
      commentCount: BigNumber.from(xxxx[0][5]).toString(),
      contractAddress: xxxx[0][6],
      timestamp: getTimestamp(xxxx[0][7]),
    };
    setSinglePostToDisplay(personalObject);
    console.log(personalObject);
    console.log(singlePostToDisplay);

    fetchComments(personalObject.postId);
  }, []);

  const getTimestamp = (postTime) => {
    let time = "now";
    const date = new Date(postTime * 1000);
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
    console.log(postTime, time);
    return time;
  };

  const fetchComments = async (id) => {
    try {
      const commentsXX = await getPostComments(id);
      console.log(commentsXX);
      setPostComments(commentsXX);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <BaseLayout
        mainComponent={
          <>
            <SinglePostTopBar />
            {!singlePostToDisplay.postId ? (
              <>
                <div>Loading Post</div>
              </>
            ) : (
              <>
                <Post singlePost={singlePostToDisplay} />
                <div className="flex flex-col-reverse gap-[12px] mt-[14px]">
                  {postComments.map((comment) => {
                    return (
                      <div key={comment.commentId}>
                        <SinglePostCmments
                          comment={comment}
                          postAuthor={post.author}
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </>
        }
        rightComponent={true}
      />
    </>
  );
}

export default SinglePostPage;
