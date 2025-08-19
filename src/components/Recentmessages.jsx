import { useEffect, useState } from "react";
import { dummyRecentMessagesData } from "../assets/assets";
import moment from "moment";
import { NavLink } from "react-router-dom";

const Recentmessages = () => {
  const [recentmessages, setrecentmessages] = useState([]);
  useEffect(() => {
    setrecentmessages(dummyRecentMessagesData);
  }, []);
  return (
    <div className="px-3 py-5 border border-neutral-200 rounded-lg shadow-md flex flex-col justify-start gap-3">
      <h4>Recentmessages</h4>
      <div className="flex flex-col gap-2">
        {recentmessages.map((recentmessage, idx) => {
          return (
            <NavLink to={`messages/${recentmessage.from_user_id._id}`}>
                <div
                  key={idx}
                  className="flex gap-3 justify-center items-start p-1 "
                >
                  <img
                    className="size-12 border border-neutral-300 shadow-md   rounded-4xl"
                    src={recentmessage.from_user_id.profile_picture}
                    alt=""
                  />
                  <div className="w-full flex flex-col gap-0">
                    <div className="flex justify-between">
                      <p className="font-medium m-0">
                        {recentmessage.from_user_id.full_name}
                      </p>
                      <p className="text-slate-400 text-sm m-0">
                        {moment(recentmessage.createdAt).fromNow()}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-normal text-gray-500 m-0 text-sm">
                        {recentmessage.text ? recentmessage.text : "media"}
                      </p>
                      {recentmessage.seen ? (
                        ""
                      ) : (
                        <div className="bg-primary size-5 rounded-4xl flex justify-center items-center text-white text-sm">
                          1
                        </div>
                      )}
                    </div>
                  </div>
                </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Recentmessages;
