import React, { useEffect, useState, useContext } from "react";
import BaseLayout from "../../Components/BaseLayout";
import Subscription from "./Components/Subscription";

function SubscriptionPage() {
  return (
    <>
      <BaseLayout mainComponent={<Subscription />} rightComponent={false} />
    </>
  );
}

export default SubscriptionPage;
