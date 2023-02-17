import React, { useState } from "react";
import Input from "./Input";
import Posts from "./Posts";

function Home() {
  return (
    <>
      <div className="w-full">
        <Input />
        <Posts />
      </div>
    </>
  );
}

export default Home;
