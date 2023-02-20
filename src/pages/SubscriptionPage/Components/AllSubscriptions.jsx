import React, { useEffect, useState, useContext } from "react";
import VideoContent from "./VideoContent";

function AllSubscriptions({ timeSlot, subscriptions }) {
  return (
    <>
      <div className="w-full">
        <h2 className="mb-[12px] font-semibold">{`This ${timeSlot}`}</h2>
        <div className="w-full gap-[14px] flex flex-wrap">
          {subscriptions.map((subscription) => {
            return (
              <>
                <VideoContent subscription={subscription} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllSubscriptions;
