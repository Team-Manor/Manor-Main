import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import NotificationPage from "./pages/NotificationPage";
import SinglePostPage from "./pages/SinglePostPage";
import { AppContextProvider } from "./context/AppContext";
import "@rainbow-me/rainbowkit/styles.css";
import { useEffect } from "react";
import {
  getDefaultWallets,
  midnightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  polygonMumbai,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

function App() {
  const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, polygonMumbai],
    [
      alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_ID }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "Manor",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <>
      <AppContextProvider>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            modalSize="compact"
            theme={midnightTheme()}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/notifications" element={<NotificationPage />} />
              <Route path="/post/:postId" element={<SinglePostPage />} />
            </Routes>
          </RainbowKitProvider>
        </WagmiConfig>
      </AppContextProvider>
    </>
  );
}

export default App;
