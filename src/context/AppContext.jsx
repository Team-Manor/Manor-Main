import React from "react";
import { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../constants/constants";
import { useAccount } from "wagmi";

export const AppContext = React.createContext();
let contract;

const { ethereum } = window;

const getContract = async () => {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, signer);
  }
};

const createPost = async (content, image, contractAddress) => {
  try {
    await contract.createPost(content, image, contractAddress);
  } catch (error) {
    console.log(error);
  }
};

const createComment = async (id, content) => {
  try {
    await contract.createComment(id, content);
  } catch (error) {
    console.log(error);
  }
};

const likePost = async (id) => {
  try {
    await contract.likePost(id);
  } catch (error) {
    console.log(error);
  }
};

const likeComment = async (id) => {
  try {
    await contract.likeComment(id);
  } catch (error) {
    console.log(error);
  }
};

const getAllPosts = async () => {
  try {
    const posts = await contract.getAllPosts();
    return posts;
  } catch (error) {
    console.log(error);
  }
};

const getPostComments = async (id) => {
  try {
    const comments = await contract.getPostComments(id);
    return comments;
  } catch (error) {
    console.log(error);
  }
};

const pause = async () => {
  try {
    await contract.pause();
  } catch (error) {
    console.log(error);
  }
};

const unpause = async () => {
  try {
    await contract.unpause();
  } catch (error) {
    console.log(error);
  }
};

export const AppProvider = ({ children }) => {
  const { isConnected, account } = useAccount();

  useEffect(() => {
    if (isConnected) {
      getContract();
    }
  }, [isConnected]);

  return (
    <AppContext.Provider
      value={{
        account,
        createPost,
        createComment,
        likePost,
        likeComment,
        getAllPosts,
        getPostComments,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
