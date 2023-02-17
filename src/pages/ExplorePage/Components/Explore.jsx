import React, { useState } from "react";
import Monkey from "../../../assets/monkey.png";
import Jordan from "../../../assets/lebron.png";
import Logo from "../../../assets/logo.png";

function Explore() {
  const images = [
    { image: Monkey, link: "#" },
    { image: Jordan, link: "#" },
    { image: Monkey, link: "#" },
    { image: Logo, link: "#" },
    { image: Monkey, link: "#" },
    { image: Jordan, link: "#" },
    { image: Monkey, link: "#" },
    { image: Jordan, link: "#" },
    { image: Monkey, link: "#" },
    { image: Jordan, link: "#" },
  ];
  return (
    <div>
      <div className="flex min-w-full gap-4 mb-6">
        <div className="grid min-w-[60%] grid-cols-2 grid-rows-2 gap-4">
          <div className="rounded-lg h-[300px] w-[300px] text-center">
            <img
              src={Monkey}
              className="rounded-lg h-[300px] w-[300px]"
              alt="monkey"
            />
          </div>
          <div className="rounded-lg h-[300px] w-[300px] text-center">
            <img
              src={Monkey}
              className="rounded-lg h-[300px] w-[300px]"
              alt="monkey"
            />
          </div>
          <div className="rounded-lg h-[300px] w-[300px] text-center">
            <img
              src={Jordan}
              className="rounded-lg h-[300px] w-[300px]"
              alt="monkey"
            />
          </div>
          <div className="rounded-lg h-[300px] w-[300px] text-center">
            <img
              src={Logo}
              className="rounded-lg h-[300px] w-[300px]"
              alt="monkey"
            />
          </div>
        </div>
        <div className="rounded-lg w-[300px] h-[620px]">
          <img
            src={Monkey}
            className="rounded-lg h-full w-full object-cover object-center"
            alt="monkey"
          />
        </div>
      </div>
      <div className="flex min-w-full gap-4 mb-4">
        <div className="rounded-lg w-[300px] h-[620px]">
          <img
            src={Jordan}
            className="rounded-lg h-full w-full object-cover object-center"
            alt="monkey"
          />
        </div>
        <div className="grid min-w-[60%] grid-cols-2 grid-rows-2 gap-4">
          <div className="rounded-lg h-[300px] w-[300px] text-center">
            <img
              src={Logo}
              className="rounded-lg h-[300px] w-[300px]"
              alt="monkey"
            />
          </div>
          <div className="rounded-lg h-[300px] w-[300px] text-center">
            <img
              src={Monkey}
              className="rounded-lg h-[300px] w-[300px]"
              alt="monkey"
            />
          </div>
          <div className="rounded-lg h-[300px] w-[300px] text-center">
            <img
              src={Jordan}
              className="rounded-lg h-[300px] w-[300px]"
              alt="monkey"
            />
          </div>
          <div className="rounded-lg h-[300px] w-[300px] text-center">
            <img
              src={Logo}
              className="rounded-lg h-[300px] w-[300px]"
              alt="monkey"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
