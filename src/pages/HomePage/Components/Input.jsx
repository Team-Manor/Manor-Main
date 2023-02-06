import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  PhotoIcon,
  XMarkIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import lighthouse from "@lighthouse-web3/sdk";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useAccount } from "wagmi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Input() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [hash, setHash] = useState("");
  const [addr, setAddr] = useState(
    "0x0000000000000000000000000000000000000000"
  );
  const [amount, setAmount] = useState(0);
  const [show, setShow] = useState(false);

  const { createPost } = useContext(AppContext);
  const { address } = useAccount();
  const filePickerRef = useRef(null);

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const options = {
    method: "POST",
    url: "https://api.nftport.xyz/v0/contracts/collections",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: "5a7ab1f1-b76b-4434-85f4-06868427084c",
    },
    data: {
      team_reserve: 0,
      chain: "goerli",
      name: "Coterie Post NFT",
      symbol: "CTR",
      max_supply: 1000,
      mint_price: Number(amount),
      tokens_per_mint: 1,
      owner_address: address,
      treasury_address: address,
      public_mint_start_date: "2022-11-15T11:30:48+00:00",
      base_uri: "https://gateway.lighthouse.storage/ipfs/" + hash,
    },
  };

  const createCollection = async () => {
    if (hash.length !== 0) {
      try {
        const response = await axios.request(options);
        setAddr(response.data.transaction_hash);
        toast.success("Collection Successfully created !");
        setAddr(response.data.transaction_hash);
      } catch (error) {
        console.error(error);
        setAddr("0x0000000000000000000000000000000000000000");
        toast.error("Something went wrong !");
      }
    }
  };
  const addImageToPost = async (e) => {
    if (e.target.files[0]) {
      setSelectedFile(URL.createObjectURL(e.target.files[0]));
      const output = await lighthouse.upload(
        e,
        "bf0af9dc-e73c-41e6-acb3-f72cc46213d2",
        progressCallback
      );
      setHash(output.data.Hash);
      await createCollection();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createCollection();

      await createPost(input, hash, addr);
      setLoading(false);
      setInput("");
      setSelectedFile(null);
      setHash("");
      toast.success("Post Successfully sent !");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setInput("");
      setSelectedFile(null);
      setHash("");
      toast.error("Something went wrong !");
    }
  };

  return (
    <div
      className="border-gray-400 py-3 flex space-x-3 ${
  "
    >
      <div className="border-b py-3 px-3 bordergray-400 w-full">
        <div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's on your mind ?"
            rows={2}
            className="bg-transparent outline-none text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Title>Enter the NFT price</Modal.Title>
            <Modal.Body>
              <input
                type="number"
                aria-label="Enter the NFT price"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => setShow(false)}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
                cursor="pointer"
              >
                <XMarkIcon className="text-white h-5" />
              </div>

              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>
        {!loading && (
          <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center">
              <div
                className="icon"
                onClick={() => filePickerRef.current.click()}
                cursor="pointer"
              >
                <PhotoIcon className="text-[#1d9bf0] h-[22px]" />
                <input
                  type="file"
                  ref={filePickerRef}
                  hidden
                  onChange={addImageToPost}
                />
              </div>

              <div className="icon rotate-90" onClick={() => setShow(!show)}>
                <PencilSquareIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                <FaceSmileIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              <div className="icon">
                <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              {showEmojis && (
                <Picker
                  onSelect={addEmoji}
                  style={{
                    position: "absolute",
                    marginTop: "465px",
                    marginLeft: -40,
                    maxWidth: "320px",
                    borderRadius: "20px",
                  }}
                  theme="dark"
                />
              )}
            </div>
            <button
              className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
              disabled={!input && !selectedFile}
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>
        )}
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Input;
