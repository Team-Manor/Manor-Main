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

export const AppContextProvider = ({ children }) => {
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      getContract();
    }
  }, [isConnected]);

  return (
    <AppContext.Provider
      value={{
        address,
        isConnected,
        createPost,
        getAllPosts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
