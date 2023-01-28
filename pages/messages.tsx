import type { NextPage } from "next";
import Head from "next/head";
import MessagesPage from "../components/MessagesPage";

const Messages: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MessagesPage />
    </div>
  );
};

export default Messages;
