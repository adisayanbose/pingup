
import { NavLink } from "react-router-dom";

const SidebarComp = ({ icon: Icon, label, to }) => {
  return (
    <NavLink
      to={`/${to}`}
      end={false} // allows partial matches
      className={({ isActive }) =>
        `rounded-lg  ${
          isActive ? "bg-secondary text-[#4f39f6]" : "text-neutral-500 hover:bg-neutral-100"
        }`
      }
    >
      <div className="flex items-center gap-3 py-2 px-3  hover:cursor-pointer">
        <Icon className="size-8" />
        <h1 className="text-2xl ">{label}</h1>
      </div>
    </NavLink>
  );
};

export default SidebarComp;
