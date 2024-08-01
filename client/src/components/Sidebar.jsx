import React from "react";
import CreateButton from "../utils/CreateButton";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/auth";

const elements = [
  { name: "Home", icon: "/assets/icons/home.svg" },
  { name: "Boards", icon: "/assets/icons/boards.svg" },
  { name: "Settings", icon: "/assets/icons/settings.svg" },
  { name: "Teams", icon: "/assets/icons/teams.svg" },
  { name: "Analytics", icon: "/assets/icons/analytics.svg" },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="h-full sticky left-0 top-0 min-w-[285px] min-h-screen px-[16px] pt-[24px] pb-[32px] text-content1 flex flex-col justify-between font-inter border-r border-r-[#DEDEDE]">
      <div className="flex flex-col gap-[16px]">
        <div className="flex gap-[8px]">
          <img
            className="w-[31px] h-[31px] "
            src="/assets/image/avatar.png"
            alt=""
          />
          <p className="font-medium text-black text-[20px]">{user.name}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-[20px] h-[24px] w-[24px]">
            <img src="/assets/icons/s1.svg" alt="" />
            <img src="/assets/icons/s2.svg" alt="" />
            <img src="/assets/icons/s3.svg" alt="" />
          </div>
          <div
            onClick={() => dispatch(logoutUser())}
            className="bg-[#F4F4F4] hover:drop-shadow h-full cursor-pointer text-[16px] p-[8px] rounded-[4px] "
          >
            Logout
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          {elements.map(({ name, icon }) => (
            <div
              className={`flex justfiy-center cursor-pointer gap-[14px] p-[8px] ${
                name == "Home"
                  ? "bg-[#F4F4F4] border rounded-[4px] border-[#DDDDDD]"
                  : "hover:bg-[#F4F4F4] hover:rounded-[4px]"
              }`}
            >
              <img className="w-[24px] h-[24px]" src={icon} />
              <p>{name}</p>
            </div>
          ))}
        </div>
        <CreateButton text={"Create new task"} />
      </div>
      <div className="flex p-[8px] rounded-[8px] gap-[8px] bg-[#F3F3F3] ">
        <img src="/assets/icons/download.svg" alt="" />
        <div className="flex flex-col gap-[4px]">
          <p>Download the app</p>
          <p>Get the full experience</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
