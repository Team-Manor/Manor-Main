import React, { useState } from "react";
import BaseLayout from "../../Components/BaseLayout";
import LiveStream from "../../Components/LiveStream";
import Explore from "./Components/Explore";

function ExplorePage() {
  return (
    <>
      <BaseLayout mainComponent={<Explore />} rightComponent={<LiveStream />} />
    </>
  );
}

export default ExplorePage;
