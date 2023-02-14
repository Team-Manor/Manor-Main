import React, { useState } from "react";
import BaseLayout from "../../Components/BaseLayout";
import Explore from "../../Components/Explore";

function HomePage() {
  return (
    <>
      <BaseLayout
        mainComponent={
          <div className="bg-red-400 p-2 min-h-full">Homepage goes here</div>
        }
        rightComponent={<Explore />}
      />
    </>
  );
}

export default HomePage;
