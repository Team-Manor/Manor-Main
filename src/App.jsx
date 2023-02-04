import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import NotificationsPage from "./pages/NotificationsPage";
import MessagesPage from "./pages/MessagesPage";
import LiveStreamsPage from "./pages/LiveStreamsPage";
import MyStreamsPage from "./pages/MyStreamsPage";
import ProfilePage from "./pages/ProfilePage";
import MorePage from "./pages/MorePage";
import { useState } from "react";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
