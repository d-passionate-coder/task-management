import React from "react";
import { useDispatch } from "react-redux";
import { handleAction } from "../redux/features/newTaskSlice";

const NewTaskButton = ({ status }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(handleAction({ type: "new", task: { status } }))}
      className="flex p-[8px] rounded-[8px] justify-between text-[#E3E1E1] newTaskButton cursor-pointer "
    >
      <p>Add New</p>
      <img src="/assets/icons/plus2.svg" alt="" />
    </div>
  );
};

export default NewTaskButton;
