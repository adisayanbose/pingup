import { ArrowLeft, Sparkles, Text, Upload, Video } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

const StoryModal = ({ setstoryModal }) => {
  const colors = [
    "#4F46E5",
    "#7C3AED",
    "#DB2777",
    "#E11D48",
    "#CA8A04",
    "#0D9488",
  ];
  const [mode, setmode] = useState("text");
  const [text, settext] = useState("");
  const [background, setbackground] = useState(colors[0]);
  const [media, setmedia] = useState(null);
  const [previewurl, setpreviewurl] = useState(null);
  return (
    <div className=" bg-black/80 backdrop-blur-xs text-white z-100 fixed inset-0 h-screen w-screen  flex justify-center items-center">
      <div className="max-h-lg my-auto mx-auto w-full max-w-md p-5 flex flex-col gap-5 ">
        <div className="flex justify-center items-center h-10 ">
          <ArrowLeft
            onClick={() => {
              setstoryModal(false);
            }}
          />
          <h1 className="flex-1 text-lg font-semibold flex justify-center items-center">
            Create Story
          </h1>
        </div>
        <div
          className="w-full h-96 flex justify-center items-center relative"
          style={{ background: background }}
        >
          {mode === "text" && (
            <div className="w-full h-96 p-5" style={{ background: background }}>
              <textarea
                onChange={(e) => {
                  settext(e.target.value);
                }}
                value={text}
                name=""
                placeholder="What's on your mind"
                className="bg-transparent outline-none  w-full h-full resize-none "
              />
            </div>
          )}
          {mode === "media" &&
            previewurl &&
            (media.type.startsWith("image") ? (
              <img
                className="h-full w-full object-contain absolute inset-0"
                src={previewurl}
                alt=""
              />
            ) : (
              <video className="" src={previewurl} />
            ))}
        </div>
        <div className="flex gap-2">
          {colors.map((color, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setbackground(colors[index]);
                }}
                className="size-10 rounded-4xl border-2 border-white"
                style={{ background: colors[index] }}
              ></div>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={()=>{setmedia(null);
                setpreviewurl(null)
                setmode("text");
            }}
            className={`flex-1 hover:cursor-pointer ${
              mode === "text" ? "bg-white text-black" : "bg-black"
            }  py-2 rounded-md text-sm flex justify-center items-center gap-2`}
          >
            <Text />
            Text
          </button>
          <label
            className={`flex-1 ${
              mode === "media" ? "bg-white text-black" : "bg-black text-white"
            } rounded-md py-2 text-sm flex justify-center items-center gap-2 hover:cursor-pointer`}
          >
            <input
              onChange={(e) => {
                const file = e.target.files?.[0];
                console.log(file);
                if (file) {
                  setmedia(file);
                  setpreviewurl(URL.createObjectURL(file));
                }
                settext("");
                setmode("media");
              }}
              type="file"
              className="hidden"
              accept="image/*, video/*"
            />
            <Upload />
            Photo/Video
          </label>
        </div>
        <Button icon={Sparkles} text={"Create story"} />
      </div>
    </div>
  );
};

export default StoryModal;
