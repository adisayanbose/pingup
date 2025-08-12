import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 rounded-full border-3 border-purple-500 border-t-transparent animate-spin transition duration-300"></div>
    </div>
  );
};

export default Loading;
