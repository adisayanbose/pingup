import { BadgeCheck, Cross, TableColumnsSplit, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ViewStoryModal = ({ viewStory, setviewStory }) => {
  const [progress, setprogress] = useState(0);
  const [duration, setduration] = useState(10000);
  const [inter, setinter] = useState(100);
  const videoref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setprogress((progress) => progress + 1);
    }, inter);
    const timer = setTimeout(() => {
      setviewStory(false);
    }, duration);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [duration, inter]);

  return (
    <div
      style={{ backgroundColor: viewStory.background_color }}
      className="fixed inset-0 z-110 text-white h-screen w-screen bg-black flex justify-center items-center flex-col overflow-hidden"
    >
      <div className="relative w-full h-full flex flex-col gap-2 p-5 ">
        {/* progress_bar */}
        <div className="relative h-2 bg-black w-full rounded-2xl ">
          <div
            style={{ width: `${progress}%` }}
            className="bg-white absolute inset-0 rounded-2xl transition-all duration-100 mx"
          ></div>
        </div>
        {/* user_card */}
        <div className="w-full flex items-center justify-between">
          <div className=" flex justify-center items-center gap-2 bg-black/50 py-2 px-5 rounded-lg">
            <img
              className="size-10 rounded-4xl border border-white"
              src={viewStory.user.profile_picture}
              alt=""
            />
            <h1>{viewStory.user.username}</h1>
            <BadgeCheck />
          </div>
          <div>
            <X
              className="size-7"
              onClick={() => {
                setviewStory(null);
              }}
            />
          </div>
        </div>
        {/* story_content */}
        <div className=" flex-1 flex justify-center items-center  overflow-hidden ">
          {viewStory.media_type === "text" && (
            <div className="h-full w-full text-3xl flex justify-center items-center text-center">
              {viewStory.content}
            </div>
          )}
    {viewStory.media_type === "image" && (
    <div className="flex-1 h-full w-full flex justify-center items-center">
      <img
        className="max-h-full max-w-full object-contain rounded-lg"
        src={viewStory.media_url}
        alt=""
      />
    </div>
  )}
          {viewStory.media_type === "video" && (
            <div className="flex-1 h-full w-full flex justify-center items-center ">
              <video
                autoPlay
                controls
                className="max-h-full max-w-full object-contain"
                src={viewStory.media_url}
              ></video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewStoryModal;
