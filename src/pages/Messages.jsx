import React, { useEffect, useState } from "react";
import { dummyConnectionsData } from "../assets/assets";
import Usercard from "../components/Usercard";
import Header from "../components/Header";

const Messages = () => {
  const [connections, setconnections] = useState([]);
  useEffect(() => {
    setconnections(dummyConnectionsData);
    return () => {};
  }, []);

  return (
    <div className="w-full h-full px-20 py-7 bg-bg overflow-scroll">
      <div className="flex flex-col gap-10">
       <Header heading={"Messages"} subheading={"Talk to your friends and family"} />
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
