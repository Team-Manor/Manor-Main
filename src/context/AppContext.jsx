import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { contract_address, contract_abi } from "../constants/constants";

export const AppContext = React.createContext();

const { ethereum } = window;

let contract;

const getContract = async () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  contract = new ethers.Contract(contract_address, contract_abi, signer);
};

const createPost = async (content, image, contractAddress) => {
  const tx = await contract.createPost(content, image, contractAddress);
  await tx.wait();
  console.log("Transaction successful");
};

const getAllPosts = async () => {
  const posts = await contract.getAllPosts();
  return posts;
};

const likePost = async (id) => {
  const tx = await contract.likePost(id);
  await tx.wait();
  console.log("Transaction successful");
};

const createComment = async (id, content) => {
  const tx = await contract.createComment(id, content);
  await tx.wait();
  console.log("Transaction successful");
};

const getPostComments = async (id) => {
  const comments = await contract.getPostComments(id);
  return comments;
};

export const AppContextProvider = ({ children }) => {
  const { address, isConnected } = useAccount();
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
      localStorage.setItem("allPosts", JSON.stringify(allPosts));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isConnected) {
      getContract();
      getPosts();
    }
  }, [isConnected]);

  return (
    <AppContext.Provider
      value={{
        address,
        isConnected,
        createPost,
        getAllPosts,
        likePost,
        createComment,
        posts,
        getPostComments,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
