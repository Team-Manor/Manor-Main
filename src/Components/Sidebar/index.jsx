import { HomeModernIcon } from "@heroicons/react/24/outline";
import {
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AppContext } from "../../context/AppContext";
import { disconnect } from "@wagmi/core";

function SideBar() {
  const { isConnected } = React.useContext(AppContext);
  useEffect(() => {
    document.body.style.overflowX = "clip";
  }, []);

  const links = [
    { text: "Home", icon: HomeModernIcon },
    { text: "Explore", icon: HomeModernIcon },
    { text: "Subscriptions", icon: HomeModernIcon },
    { text: "LiveStreams", icon: HomeModernIcon },
    { text: "Messaging", icon: HomeModernIcon },
    { text: "Notifications", icon: HomeModernIcon },
    { text: "Profile", icon: HomeModernIcon },
    { text: "More", icon: HomeModernIcon },
  ];

  return (
    <>
      <div className="w-full py-8 mb-6 rounded-[14px] flex flex-col items-center h-full bg-lilac">
        <div>
          {links.map((link, i) => (
            <Link
              to={`/${link.text.toLowerCase()}`}
              className="flex mb-5"
              key={i}
            >
              <link.icon className="h-6" />
              <p className="ml-2">{link.text}</p>
            </Link>
          ))}
        </div>

        {isConnected ? (
          <button
            className="bg-deepBlue text-white h-10 w-full rounded-[10px]"
            onClick={disconnect}
          >
            Disconnect
          </button>
        ) : (
          <ConnectButton
            chainStatus="none"
            showBalance={false}
            accountStatus="none"
          />
        )}
        <div className="flex justify-around w-4/5 items-center mt-12">
          <Cog6ToothIcon className="h-8" />
          <QuestionMarkCircleIcon className="h-8" />
        </div>
      </div>
    </>
  );
}

export default SideBar;
