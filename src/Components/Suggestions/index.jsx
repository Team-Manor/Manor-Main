import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Lebron from "../../assets/lebron.png";

function Suggestions() {
  const follows = [
    { address: "0x2...7a1", name: "Crew3", profile: Lebron },
    { address: "0x2...7a1", name: "Crew3", profile: Lebron },
    { address: "0x2...7a1", name: "Crew3", profile: Lebron },
    { address: "0x2...7a1", name: "Crew3", profile: Lebron },
    { address: "0x2...7a1", name: "Crew3", profile: Lebron },
    { address: "0x2...7a1", name: "Crew3", profile: Lebron },
    { address: "0x2...7a1", name: "Crew3", profile: Lebron },
    { address: "0x2...7a1", name: "Crew3", profile: Lebron },
  ];

  return (
    <>
      <div className="px-4 w-[94%] py-3 mb-6 rounded-[14px] h-full bg-lilac">
        <h3 className="mb-4 mt-1">Suggested follows</h3>
        <div>
          {follows.map((follow, i) => (
            <div className="bg-deepBlue flex items-center mb-4 rounded-[10px] p-3">
              <img src={follow.profile} height={44} alt="profile picture" />
              <div className="mx-2 text-white">
                <div className="flex items-center">
                  <p>{follow.address}</p>
                  <CheckBadgeIcon className="h-6 mx-2" />
                </div>
                <p className="text-sm font-medium">@{follow.name}</p>
              </div>
              <button className="bg-white text-deepBlue ml-2 font-semibold rounded-md text-xs w-16 h-6">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Suggestions;
