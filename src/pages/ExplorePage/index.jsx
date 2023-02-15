import React, { useState } from "react";
import BaseLayout from "../../Components/BaseLayout";
import Explore from "./Components/Explore";

function ExplorePage() {
  return (
    <>
      <BaseLayout mainComponent={<Explore />} rightComponent={false} />
    </>
  );
}

export default ExplorePage;
