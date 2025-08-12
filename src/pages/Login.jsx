import React from "react";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Login = () => {
  return (
    <div className="realtive min-h-screen">
      <img
        src={assets.bgImage}
        alt=""
        srcSet=""
        className="absolue inset-0 -z-1 h-full w-full object-cover"
      />

      <div className=" absolute inset-0 mx-auto  w-4/5 h-full flex flex-col p-10 ">
        <Navbar className={""} />
        <Hero className={"flex-1"} />
      </div>
    </div>
  );
};

export default Login;
