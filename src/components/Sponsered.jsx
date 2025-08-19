import React from "react";
import { assets } from "../assets/assets";

const Sponsered = () => {
  return (
    <div className="flex flex-col gap-1 justify-center items-start rounded-lg shadow-md px-3 py-5 border border-gray-200">
      <h3 className="font-semibold">Sponsored</h3>
      <img src={assets.sponsored_img} alt="" />
      <h3 className="text-slate-600">Email marketing</h3>
      <h5 className="text-slate-400">
        Supercharge your marketing with a powerful, easy- to-use platform built
        for results.
      </h5>
    </div>
  );
};

export default Sponsered;
