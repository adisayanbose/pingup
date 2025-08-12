import { useState } from "react";
import { assets, dummyUserData } from "../assets/assets";
import {
  CirclePlus,
  House,
  LogOutIcon,
  Menu,
  MessageCircle,
  Search,
  User,
  Users,
} from "lucide-react";
import SidebarComp from "./SidebarComp";
import { useClerk, UserButton } from "@clerk/clerk-react";

const Sidebar = () => {
  const user = dummyUserData;
  const [siderbaropen, setsidebaropen] = useState(false);
  const { signOut } = useClerk();
  return (
    <div className="h-full w-1/7  flex flex-col">
      <div className="w-full px-3 py-2 flex items-center gap-3 ">
        <div className="size-10 flex justify-center items-center">
          {siderbaropen ? (
            <X
              onClick={() => {
                setsidebaropen(false);
              }}
            />
          ) : (
            <Menu
              onClick={() => {
                setsidebaropen(true);
              }}
            />
          )}
        </div>
        <img
          src={assets.logo}
          alt=""
          srcSet=""
          className="flex justify-center items-center"
        />
      </div>
      <hr className="border-neutral-400    " />

      <div className="flex-1 flex flex-col  gap-5 p-3">
        <div className="flex flex-col gap-1">
          <SidebarComp icon={House} label={"Home"} to={""} />
          <SidebarComp
            icon={MessageCircle}
            label={"Messages"}
            to={"Messages"}
          />
          <SidebarComp icon={Users} label={"Connections"} to={"Connections"} />
          <SidebarComp icon={Search} label={"Discover"} to={"Discover"} />
          <SidebarComp icon={User} label={"Profile"} to={"Profile"} />
        </div>
        <button className="flex justify-center items-center gap-3 bg-gradient-to-r from-[#9810FA] to-[#615FFF] text-white py-3 rounded-xl">
          <CirclePlus /> Create Post
        </button>
      </div>

      <hr className="border-neutral-400    " />
      <div className="flex justify-center items-center gap-5 p-2">
        <div className="flex-1 flex gap-2">
          <UserButton className="size-full flex justify-center items-center   overflow-hidden" />

          <div className="flex flex-col ">
            <h1>{user.full_name}</h1>
            <h1>@{user.username}</h1>
          </div>
        </div>
        <div>
          <LogOutIcon
            onClick={async () => {
              await signOut();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
