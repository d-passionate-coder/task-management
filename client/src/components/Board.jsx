import React from "react";
import Column from "./Column";

const statusElements = ["To do", "In progress", "Under review", "Finished"];

const Board = () => {
  return (
    <div className="flex gap-[16px] w-full rounded-[8px] p-[16px] bg-white font-inter ">
      {statusElements.map((status) => {
        return <Column column={status} />;
      })}
    </div>
  );
};

export default Board;
