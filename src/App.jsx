import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Messages from "./pages/Messages";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import Connections from "./pages/Connections";
import Layout from "./pages/Layout"
import { useUser } from "@clerk/clerk-react"
import ChatBox from "./pages/ChatBox";

const App = () => {
  const {user}=useUser();
  return (
    <>
      <Routes>
        <Route path="/" element={!user?<Login />:<Layout />}>
          <Route index element={<Feed />} />
          <Route path="messages" element={<Messages />} />
          <Route path="meesages/:userId" element={<ChatBox />} />
          <Route path="Connections" element={<Connections />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

