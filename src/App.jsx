import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import NotificationsPage from "./pages/NotificationsPage";
import MessagesPage from "./pages/MessagesPage";
import LiveStreamsPage from "./pages/LiveStreamsPage";
import MyStreamsPage from "./pages/MyStreamsPage";
import ProfilePage from "./pages/ProfilePage";
import MorePage from "./pages/MorePage";
import { AppProvider } from "./context/AppContext";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { filecoinHyperspace } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

function App() {
  const { chains, providers } = configureChains(
    [filecoinHyperspace],
    [publicProvider()]
  );

  const client = createClient(
    getDefaultClient({
      appName: "Coterie",
      appLogoUrl: "https://coterie.app/logo.png",
      appUrl: "https://coterie.app",
      chains,
    })
  );

  return (
    <>
      <WagmiConfig client={client}>
        <ConnectKitProvider theme="retro">
          <AppProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/livestreams" element={<LiveStreamsPage />} />
              <Route path="/mystreams" element={<MyStreamsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/more" element={<MorePage />} />
            </Routes>
          </AppProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
