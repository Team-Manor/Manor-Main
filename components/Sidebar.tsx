import Image from "next/image";
import { HomeIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import {
  HashtagIcon,
  BellIcon,
  TagIcon,
  UserIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import SidebarLink from "./SidebarLink";
import { useRouter } from "next/router";

function Sidebar() {
  const address = "0xa2fe03";
  const router = useRouter();

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={ChatBubbleOvalLeftEllipsisIcon} />
        <SidebarLink
          text="LiveStreams"
          Icon={PlayCircleIcon}
          onClick={() => router.push("/liveStreams")}
        />
        <SidebarLink
          text="MyStreams"
          Icon={TagIcon}
          onClick={() => router.push("/liveStreams")}
        />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
        SignOut
      </button>
      <div className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5">
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Dayo</h4>
          <p className="text-[#6e767d]">{address}</p>
        </div>
        <EllipsisHorizontalCircleIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}

export default Sidebar;
