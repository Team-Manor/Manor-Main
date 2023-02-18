import React, { useEffect, useState, useContext } from "react";
import BaseLayout from "../../Components/BaseLayout";
import Post from "../HomePage/Components/Post";
import Lebron from "../../assets/images/5.png";
import SinglePostTopBar from "./Components/SinglePostTopBar";
import SinglePostCmments from "./Components/SinglePostComments";
import { AppContext } from "../../context/AppContext";

function SinglePostPage() {
  const [singlePostToDisplay, setSinglePostToDisplay] = useState([]);
  const { posts } = useContext(AppContext);
  console.log(posts);
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
    console.log(route);
  };

  const filterPosts = (allPostArray, correctPostId) => {
    return allPostArray.filter((post) => post.postId === correctPostId);
  };

  // useEffect(() => {
  //   const correctPostId = getPostId();
  //   const allPosts = posts; //fetch the entire array of posts
  //   const singlePostToDisplay = filterPosts(allPosts, correctPostId);
  //   console.log(singlePostToDisplay);
  //   setSinglePostToDisplay(singlePostToDisplay);
  // }, []);

  return (
    <>
      <BaseLayout
        mainComponent={
          <>
            <SinglePostTopBar />
            <Post singlePost={post} />
            <div className="flex flex-col-reverse gap-[12px] mt-[14px]">
              {comments.map((comment) => {
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
        }
        rightComponent={true}
      />
    </>
  );
}

export default SinglePostPage;
