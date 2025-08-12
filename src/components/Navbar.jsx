import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({className}) => {
  return (
    <div className={`bg-transparent ${className}`}>
      <div>
        <img src={assets.logo} alt="logo" srcSet="" />
      </div>
    </div>
  );
};

export default Navbar;
