import React from "react";
import Board from "./Board";
import InfoPanel from "./InfoPanel";
import ActionButtons from "./ActionButtons";
import { useSelector } from "react-redux";

const Content = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="pl-[16px] min-h-screen h-full w-full py-[24px] flex flex-col gap-[16px] bg-background pr-[32px]">
      <div className="flex justify-between items-center">
        <div className="font-barlow font-semibold text-[48px] ">
          Good morning, {user.name.split(" ")[0]}!
        </div>
        <div className="flex gap-[8px] items-center ">
          <p>Help & feedback</p>
          <img src="/assets/icons/help.svg" alt="" />
        </div>
      </div>
      <InfoPanel />
      <ActionButtons />
      <Board />
    </div>
  );
};

export default Content;
