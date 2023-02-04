import React, { useState } from "react";
import BaseLayout from "../../Components/BaseLayout";
import Feed from "./Components/Feed";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";

function HomePage() {
  //created this fake boolean to control whether wallet is connected or not. replace with your own logic
  const [metaMaskConnected, setMetaMaskConnected] = useState(true);

  return (
    <>
      {metaMaskConnected ? (
        <BaseLayout title="Home-Feeds">
          <Feed />
        </BaseLayout>
      ) : (
        <div>
          <>
            <div className="h-screen">
              {/* Wande kindly help me make the necessary corrections to the syntax of the navbar */}
              {/* <Navbar /> */}
              {/* Wande also make corrections to the syntax of the hero component especially as regards the connectkit button */}
              <Hero
                heading="Coterie"
                message="Connect,share and earn with friends and communities"
              />
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default HomePage;
