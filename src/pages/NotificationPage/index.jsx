import React, { useState } from "react";
import BaseLayout from "../../Components/BaseLayout";
import Notifications from "./Components/Notifications";

function NotificationsPage() {
  return (
    <>
      <BaseLayout
        mainComponent={<Notifications />}
        activePage="Notifications"
      />
    </>
  );
}

export default NotificationsPage;
