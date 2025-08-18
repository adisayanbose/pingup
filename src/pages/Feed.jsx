import React, { useEffect, useState } from "react"; 
import { dummyPostsData } from "../assets/assets";
import StoriesBar from "../components/StoriesBar";
import Posts from "../components/Posts";

const Feed = () => {
  const [feed, setfeed] = useState();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setfeed(dummyPostsData);
    setloading(false);
  }, []);
  return (
    <div className="bg-[#f8fafb] w-full h-full max-auto flex justify-around p-5 overflow-scroll ">
      <div className="flex max-w-7/10 gap-10">
        <div className="flex flex-col gap-2 max-w-7/10">
          <StoriesBar />
          <div className="w-full flex-1 flex flex-col gap-5">
            {dummyPostsData.map((post,idx)=>{
              return <Posts key={idx} post={post}/>
            })}
          </div>
        </div>
        <div className="flex-1 bg-yellow-950 p-5"></div>
      </div>
    </div>
  );
};

export default Feed;
