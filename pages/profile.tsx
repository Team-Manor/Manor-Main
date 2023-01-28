import type { NextPage } from "next";
import Head from "next/head";
import ProfilePage from "../components/ProfilePage";

const Profile: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProfilePage />
    </div>
  );
};

export default Profile;
