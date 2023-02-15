import React, { useState } from "react";
import BaseLayout from "../../Components/BaseLayout";
import Home from "./Components/Home";

function HomePage() {
  return (
    <>
      <BaseLayout mainComponent={<Home />} rightComponent={true} />
    </>
  );
}

export default HomePage;
