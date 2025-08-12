import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { dummyUserData } from "../assets/assets";
import Loading from "../components/Loading";

const Layout = () => {
  const user = dummyUserData;

  return user ? (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <div className="flex-1 h-full">
        <Outlet />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Layout;
