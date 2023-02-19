import React, { useEffect, useState, useContext } from "react";
import AllSubscriptions from "./AllSubscriptions";
import videoImage from "../../../assets/videoImage.png";

function Subscription() {
  const weekSubscriptions = [
    {
      img: videoImage,
      videoTitle: "My first video tryouts",
      videoAuthor: "0x06325626977Af7Ac4E8d19a6acFdB8Da2102aFF3",
      videoViews: "3450",
      videoTimeStamp: "9h ago",
    },
    {
      img: videoImage,
      videoTitle: "beerereryjyt",
      videoAuthor: "0x06325626977Af7Ac4E8d19a6acFdB8Da2102aFF3",
      videoViews: "3450",
      videoTimeStamp: "9h ago",
    },
    {
      img: videoImage,
      videoTitle: "The initital youtube Video that led to many more...",
      videoAuthor: "0x06325626977Af7Ac4E8d19a6acFdB8Da2102aFF3",
      videoViews: "3450",
      videoTimeStamp: "9h ago",
    },
    {
      img: videoImage,
      videoTitle:
        "I really dont want to do this, but Magnus Carlson is so greate",
      videoAuthor: "0x06325626977Af7Ac4E8d19a6acFdB8Da2102aFF3",
      videoViews: "3450",
      videoTimeStamp: "9h ago",
    },
  ];

  const monthSubscriptions = weekSubscriptions;
  return (
    <>
      <div className="w-full flex flex-col gap-[44px]">
        <AllSubscriptions timeSlot={"Week"} subscriptions={weekSubscriptions} />
        <AllSubscriptions
          timeSlot={"Month"}
          subscriptions={monthSubscriptions}
        />
      </div>
    </>
  );
}

export default Subscription;
