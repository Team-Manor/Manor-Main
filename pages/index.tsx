import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#f1f1f1] min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <Suggestions />
      </main>
    </div>
  );
};

export default Home;
