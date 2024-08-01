import React from "react";
import CreateButton from "../utils/CreateButton";

const elements = [
  {
    name: "Calender view",
    icon: "/assets/icons/calender.svg",
  },
  {
    name: "Automation",
    icon: "/assets/icons/automation.svg",
  },
  {
    name: "Filter",
    icon: "/assets/icons/filter.svg",
  },
  {
    name: "Share",
    icon: "/assets/icons/share.svg",
  },
];

const ActionButtons = () => {
  return (
    <div className="flex justify-between font-inter">
      <div className="rounded-[8px] border flex justify-between p-[8px] text-content1 text-[16px] bg-white w-[196px] ">
        <input
          type="text"
          placeholder="Search"
          className="w-full focus:outline-none"
        />
        <img src="/assets/icons/search.svg" alt="" />
      </div>
      <div className="flex gap-[16px] text-[16px] text-content1 text-nowrap ">
        {elements.map(({ name, icon }) => (
          <div className="flex gap-[14px] p-[8px] items-center rounded-[4px] ">
            <p className="hover:text-black cursor-pointer">{name}</p>
            <img src={icon} />
          </div>
        ))}
        <CreateButton text={"Create new"} />
      </div>
    </div>
  );
};

export default ActionButtons;
