import React, { useState } from "react";
import Input from "./Input";
import Posts from "./Posts";

function Home() {
  return (
    <>
      <div className="w-full px-[34px]">
        <Input />
        <Posts />
      </div>
    </>
  );
}

export default Home;
