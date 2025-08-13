import React, { useEffect, useState } from "react";
import { dummyStoriesData } from "../assets/assets";
import { Plus } from "lucide-react";
import moment from "moment";
import StoryModal from "./StoryModal";

const StoriesBar = () => {
  const [stories, setstories] = useState([]);
  const [storyModal, setstoryModal] = useState(false);
  useEffect(() => {
    setstories(dummyStoriesData);
  }, []);
  return (
    <div className=" h-52 flex p-5 gap-2 overflow-x-scroll ">
      <div
        onClick={() => {
          setstoryModal(true);
        }}
        className="min-w-1/5 bg-gradient-to-b from-[#EEF2FF] to-[#FFFFFF] rounded-xl border-dashed border-2 border-[#A3B3FF] flex flex-col items-center justify-center gap-3"
      >
        <Plus className="bg-primary  flex justify-center text-white  rounded-3xl size-10" />

        <h1 className="flex justify-center text-sm">Create Story</h1>
      </div>
      {stories.map((story, index) => {
        return (
          <div
            className="relative shadow-sm hover:shadow-lg  bg-gradient-to-b from-[#615FFF] to-[#9810FA] hover:from-indigo-700 hover:to-purple-800 text-neutral-100 min-w-1/5  rounded-xl h-full aspect-[3/4]  flex justify-center  px-2 overflow-y-hidden overflow-x-scroll hover:cursor-pointer"
            key={index}
          >
            <img
              src={story.user.profile_picture}
              className="absolute size-10 rounded-4xl border-white border-2 top-2 left-2"
              alt=""
              srcSet=""
            />
            <p className="absolute top-19 left-0 px-2 w-full truncate hover:scale-110">
              {story.content}
            </p>
            <p className="absolute bottom-1 right-2 text-xs z-10">
              {moment(story.createdAt).fromNow()}
            </p>
            {story.media_type !== "text" && (
              <div className="absolute inset-0 z-1 rounded-lg overflow-hidden bg-black">
                {story.media_type === "image" ? (
                  <img
                    className="h-full w-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80"
                    src={story.media_url}
                    alt=""
                  />
                ) : (
                  <video
                    src={story.media_url}
                    className="h-full w-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80"
                  ></video>
                )}
              </div>
            )}
          </div>
        );
      })}
      {storyModal && <StoryModal setstoryModal={setstoryModal} />}
    </div>
  );
};

export default StoriesBar;
