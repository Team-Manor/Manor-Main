import { PencilIcon } from "@heroicons/react/24/outline";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import BaseLayout from "../../Components/BaseLayout";
import React from "react";

const NotificationsPage = () => {
  const notifications = [
    {
      id: 0,
      type: "string",
      unread: true,
      author: "string",
      img: "/baka.jfif",
      time: "string",
      content: {
        headerText: "Oghenetega liked your post",
        bodyText:
          "Another one of my big bags is moving also $RNDR and this has some huge upside potential this year! ",
      },
    },
  ];

  const buttonBeans = [
    {
      id: 0,
      active: true,
      name: "All",
    },
    {
      id: 1,
      active: false,
      name: "Comments",
    },
    {
      id: 2,
      active: false,
      name: "Mentions",
    },
    {
      id: 3,
      active: false,
      name: "Subscriptions",
    },
    {
      id: 4,
      active: false,
      name: "Promotions",
    },
  ];

  return (
    <>
      <BaseLayout>
        <div className="border-l border-r">
          <div className="flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b">
            <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0">
              <ArrowSmallLeftIcon className="h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold">Notifications</h2>
          </div>
          <div className="flex py-4 px-4 gap-2">
            {buttonBeans.map((buttonBean) => (
              <button
                key={buttonBean.id}
                className={`px-4 py-2 text-[12px] rounded-3xl hover:text-[#0090ea69] hover:bg-[#0090ea69] ${
                  buttonBean.active ? "bg-[#0090ea69]" : "bg-gray-200"
                }`}
              >
                {buttonBean.name}
              </button>
            ))}
            <div className="hoverAnimation rounded-full cursor-pointer w-9 h-9 flex items-center justify-center xl:px-0 ml-auto bg-gray-200 hover:text-[#0090ea69] hover:bg-[#0090ea69]">
              <PencilIcon className="h-5" />
            </div>
          </div>

          <section className="">
            {notifications.length > 0 ? (
              <>
                <div className="border-t-2">
                  {notifications.map((notification) => {
                    return (
                      <>
                        <div className="flex border-y-2 px-4 py-2 cursor-pointer">
                          <img
                            src={notification.img}
                            alt="img"
                            className="rounded-[50%] h-12 w-12"
                          />

                          <div className="px-2">
                            <img
                              src={notification.img}
                              alt="img"
                              className="rounded-[50%] h-12 w-12"
                            />

                            <h2 className="text-[14px] font-semibold my-2">
                              {notification.content?.headerText}
                            </h2>
                            <p className="text-[12px] my-2">
                              {notification.content?.bodyText}
                            </p>
                          </div>
                          <div className="hoverAnimation rounded-full cursor-pointer w-9 h-9 flex items-center justify-center xl:px-0 ml-auto hover:text-[#0090ea69]">
                            <EllipsisHorizontalIcon className="h-5" />
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="h-[80vh] flex items-center justify-center">
                <p className="text-md font-semibold text-gray-400">
                  No notifications currently!
                </p>
              </div>
            )}
          </section>
        </div>
      </BaseLayout>
    </>
  );
};

export default NotificationsPage;
