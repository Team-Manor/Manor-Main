import HomeIcon from "../../assets/Icons/home.svg";
import ExploreIcon from "../../assets/Icons/explore.svg";
import LiveStreamIcon from "../../assets/Icons/livestream.svg";
import MessagingIcon from "../../assets/Icons/messaging.svg";
import MoreIcon from "../../assets/Icons/more.svg";
import NotificationIcon from "../../assets/Icons/notification.svg";
import ProfileIcon from "../../assets/Icons/profile.svg";
import SubscriptionIcon from "../../assets/Icons/subscription.svg";
import {
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AppContext } from "../../context/AppContext";
import { disconnect } from "@wagmi/core";
import { useAccount } from "wagmi";

function SideBar() {
  const { isConnected } = useAccount();
  useEffect(() => {
    document.body.style.overflowX = "clip";
  }, []);

  const links = [
    { text: "Home", icon: HomeIcon },
    { text: "Explore", icon: ExploreIcon },
    { text: "Subscriptions", icon: SubscriptionIcon },
    { text: "LiveStreams", disabled: true, icon: LiveStreamIcon },
    { text: "Messaging", disabled: true, icon: MessagingIcon },
    { text: "Notifications", icon: NotificationIcon },
    { text: "Profile", disabled: true, icon: ProfileIcon },
    { text: "More", disabled: true, icon: MoreIcon },
  ];
  const getRoute = (str) => {
    if (str === "Home") return `/`;
    return `/${str.toLowerCase()}`;
  };

  return (
    <>
      <div className="w-full py-8 mb-6 rounded-[14px] flex flex-col items-center h-full bg-lilac">
        <div>
          {links.map((link, i) => (
            <Link
              to={getRoute(link.text)}
              className={`${
                link.disabled ? "cursor-not-allowed pointer-events-none" : ""
              } flex mb-5 items-center`}
              key={i}
            >
              {console.log(link.text, link.disabled)}
              <img src={link.icon} className="h-6 w-6" />
              <p className="ml-4">{link.text}</p>
            </Link>
          ))}
        </div>

        {isConnected ? (
          <button
            className="bg-deepBlue text-white h-10 w-4/5 rounded-[10px]"
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
