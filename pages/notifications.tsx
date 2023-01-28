import type { NextPage } from "next";
import Head from "next/head";
import NotificationsPage from "../components/NotificationsPage";

const Notifications: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NotificationsPage />
    </div>
  );
};

export default Notifications;
