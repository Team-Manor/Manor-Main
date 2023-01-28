import { HomeIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import {
  HashtagIcon,
  BellIcon,
  TagIcon,
  UserIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

function Sidebar() {
  const address = "0xa2fe03";
  const router = useRouter();
  const sidebarItems = [
    { title: "Home", icon: HomeIcon },
    { title: "Explore", icon: HashtagIcon },
    { title: "Notifications", icon: BellIcon },
    { title: "Messages", icon: ChatBubbleOvalLeftEllipsisIcon },
    { title: "LiveStreams", icon: PlayCircleIcon },
    { title: "MyStreams", icon: TagIcon },
    { title: "Profile", icon: UserIcon },
    { title: "More", icon: EllipsisHorizontalCircleIcon },
  ];
  let active = false;

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start p-2 h-full">
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        {sidebarItems.map((item, i) => (
          <div
            className={`py-2 mb-4 flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
              active && "font-bold"
            }`}
            key={i}
            onClick={() => router.push(`/${item.title.toLowerCase()}`)}
          >
            <item.icon className="h-7" />
            <span className="hidden xl:inline">{item.title}</span>
          </div>
        ))}
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
