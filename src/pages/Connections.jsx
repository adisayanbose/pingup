import React, { useState } from "react";
import Header from "../components/Header";
import {
  dummyConnectionsData,
  dummyFollowersData,
  dummyFollowingData,
  dummyPendingConnectionsData,
} from "../assets/assets";
import { UserCheck, UserPen, UserPlus, Users } from "lucide-react";
import Button from "../components/Button";

const Connections = () => {
  const connectionsdata = [
    { label: "Followers", value: dummyFollowersData, icon: Users },
    { label: "Following", value: dummyFollowingData, icon: UserCheck },
    { label: "Pending", value: dummyPendingConnectionsData, icon: UserPen },
    { label: "Connections", value: dummyConnectionsData, icon: UserPlus },
  ];
  const [currenttab, setcurrenttab] = useState("Followers");
  return (
    <div className="w-full h-full px-20 py-7 bg-bg overflow-scroll">
      <div className="flex flex-col gap-10">
        <Header
          heading={"Connections"}
          subheading={"Manage your network and discover new connections"}
        />
        <div className="flex gap-15 ">
          {connectionsdata.map((type, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col gap-2 justify-center items-center bg-white py-7 px-20 rounded-md ring-0 shadow-lg border-neutral-200 border"
              >
                <p className="text-3xl">{type.value.length}</p>
                <p className="text-xl">{type.label}</p>
              </div>
            );
          })}
        </div>
        <div
          className={`flex gap-5 shadow-lg border-neutral-200 border rounded-lg w-fit px-5 py-3`}
        >
          {connectionsdata.map((type, idx) => {
            return (
              <button
                onClick={() => {
                  setcurrenttab(type.label);
                }}
                className={`flex gap-2 hover:cursor-pointer px-3 py-1 rounded-sm ${
                  currenttab === type.label
                    ? "text-black font-medium bg-white border border-neutral-200"
                    : "text-gray-600 hover:text-black"
                }`}
                key={idx}
              >
                <type.icon />
                {type.label}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-3 w-fit gap-10 overflow-y-scroll">
          {connectionsdata
            .find((tab) => {
              return tab.label == currenttab;
            })
            .value.map((user, idx) => {
              return (
                <div
                  className="w-full flex bg-white rounded-lg justify-center items-start gap-3 border border-neutral-200 p-5 shadow-lg"
                  key={idx}
                >
                  <img
                    src={user.profile_picture}
                    className="size-12 rounded-4xl"
                    alt=""
                  />
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col leading-7">
                      <h1 className="font-medium text-base">
                        {user.full_name}
                      </h1>
                      <p className="font-normal text-gray-600">
                        @{user.username}
                      </p>
                      <p className="truncate w-72 font-normal text-sm">
                        {user.bio}
                      </p>
                    </div>
                    <Button text={"View Profile"} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Connections;
