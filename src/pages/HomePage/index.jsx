import React, { useState } from "react";
import BaseLayout from "../../Components/BaseLayout";
import Explore from "../../Components/Explore";
import Home from "./Components/Home";

function HomePage() {
  return (
    <>
      <BaseLayout mainComponent={<Home />} rightComponent={<Explore />} />
    </>
  );
}

export default HomePage;
