import React, { useEffect, useState } from "react"; 
import { dummyPostsData } from "../assets/assets";
import StoriesBar from "../components/StoriesBar";
import Posts from "../components/Posts";
import Sponsered from "../components/Sponsered";
import Recentmessages from "../components/Recentmessages";

const Feed = () => {
  const [feed, setfeed] = useState();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setfeed(dummyPostsData);
    setloading(false);
  }, []);
  return (
    <div className="bg-[#f8fafb] w-full h-full max-auto flex justify-around p-5 overflow-scroll ">
      <div className="flex max-w-8/10 gap-15 p-3 ">
        <div className="flex flex-col gap-2 max-w-6/10">
          <StoriesBar />
          <div className="w-full flex-1 flex flex-col gap-5 ">
            {dummyPostsData.map((post,idx)=>{
              return <Posts key={idx} post={post}/>
            })}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 max-w-3/9 sticky top-0">
            <Sponsered />
            <Recentmessages />
        </div>
      </div>
    </div>
  );
};

export default Feed;
