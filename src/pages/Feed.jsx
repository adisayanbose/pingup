import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { dummyPostsData } from "../assets/assets";
import StoriesBar from "../components/StoriesBar";

const Feed = () => {
  const [feed, setfeed] = useState();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setfeed(dummyPostsData);
    setloading(false);
  }, []);
  return (
    <div className="bg-[#f8fafb] w-full h-full max-auto flex justify-around p-5 ">
      <div className="flex min-w-7/10 gap-10">
        <div className="w-7/10">
          <StoriesBar />
        </div>
        <div className="flex-1 bg-yellow-950"></div>
      </div>
    </div>
  );
};

export default Feed;
