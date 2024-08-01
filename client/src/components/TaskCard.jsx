import React from "react";
import functionTimeAgo from "../utils/functionTimeAgo.js";
import handleDeleteTask from "../api/handleDeleteTask.js";
import { useDispatch } from "react-redux";
import { handleAction } from "../redux/features/newTaskSlice.js";
import DropIndicators from "./DropIndicators.jsx";

const computeColor = (priority) => {
  switch (priority) {
    case "Low":
      return "bg-low";
    case "Medium":
      return "bg-medium";
    case "Urgent":
      return "bg-urgent";
  }
};

const TaskCard = ({ task, handleDragStart }) => {
  const dispatch = useDispatch();
  const {
    _id: id,
    title,
    status,
    priority,
    deadline,
    description,
    createdAt,
  } = task;
  return (
    <>
      <DropIndicators before={id} column={status} />
      <div
        onDragStart={(e) => handleDragStart(e, id)}
        draggable
        className="px-[13px] py-[14px] flex flex-col gap-[16px] rounded-[8px] border bg-[#F9F9F9] border border-[#DEDEDE] active:cursor-grabbing hover:cursor-grab"
      >
        <div className="flex flex-col gap-[13px] ">
          <div className="flex flex-col gap-[4px] ">
            <p className="font-medium text-[16px] text-[#606060] leading-4 ">
              {title}
            </p>
            <p className="text-content1 text-[14px] leading-4 ">
              {description}
            </p>
          </div>
          <div
            className={`${computeColor(
              priority
            )} px-[8px] py-[6px] self-start text-white text-[12px] rounded-[8px] text-center `}
          >
            {priority}
          </div>
          {deadline && (
            <div className="flex gap-[8px] ">
              <img src="/assets/icons/clock.svg" alt="" />
              <p className="font-semibold text-[14px] ">
                {deadline.substring(0, 10)}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center ">
          <div className="font-medium text-[14px] text-content1 ">
            {functionTimeAgo(createdAt)}
          </div>
          <div className="flex gap-[8px] ">
            <img
              onClick={() =>
                dispatch(handleAction({ type: "edit", task, id: task._id }))
              }
              className="h-[20px] w-[20px] cursor-pointer hover:drop-shadow-lg "
              src="/assets/icons/edit.svg"
            />
            <img
              onClick={() => handleDeleteTask(id)}
              className="h-[20px] w-[20px] cursor-pointer hover:drop-shadow-lg "
              src="/assets/icons/delete.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
