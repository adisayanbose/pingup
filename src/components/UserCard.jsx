import { Eye, MessageSquare } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const naviagte = useNavigate();
  return (
    <div className="flex gap-3  items-start pt-5 pb-7 px-5 rounded-md max-w-4/9 shadow-md border-neutral-700 bg-white">
      <img className="size-13 rounded-4xl" src={user.profile_picture} />
      <div className="flex flex-col gap-2 ">
        <div
          className="hover:cursor-pointer leading-5"
          onClick={() => {
            naviagte(`/profile/${user._id}`);
          }}
        >
          <p className="font-medium text-base text-slate-700">
            {user.full_name}
          </p>
          <p className="font-normal text-gray-500">@{user.username}</p>
        </div>
        <p className="font-normal text-sm text-slate-500">{user.bio}</p>
      </div>
      <div className="flex flex-col justify-center h-full items-center gap-2 py-3">
        <button
          onClick={() => {
            naviagte(`/messages/${user._id}`);
          }}
          className="flex justify-center items-center rounded-md p-3 bg-slate-100 text-slate-800 hover:bg-slate-200 cursor-pointer  border-slate-800"
        >
          <MessageSquare className="size-5" />
        </button>
        <button
          onClick={() => {
            naviagte(`/profile/${user._id}`);
          }}
          className="flex justify-center items-center rounded-md p-3 bg-slate-100 text-slate-800 hover:bg-slate-200 cursor-pointer border-slate-800 "
        >
          <Eye className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
