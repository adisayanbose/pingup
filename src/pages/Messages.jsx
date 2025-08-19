import React, { useEffect, useState } from "react";
import { dummyConnectionsData } from "../assets/assets";
import Usercard from "../components/Usercard";

const Messages = () => {
  const [connections, setconnections] = useState([]);
  useEffect(() => {
    setconnections(dummyConnectionsData);

    return () => {};
  }, []);

  return (
    <div className="w-full h-full px-20 py-7 bg-bg overflow-scroll">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold leading-9">Messages</h1>
          <p className="font-normal text-[16px] text-gray-500 leading-6">
            Talk to your friends and family
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {connections.map((user, idx) => {
            return <Usercard user={user} key={idx}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Messages;
