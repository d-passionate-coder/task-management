import React from "react";
import { useDispatch } from "react-redux";
import { handleAction } from "../redux/features/newTaskSlice";

const CreateButton = ({ text }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(handleAction({ type: "new" }))}
      className="p-[8px] flex gap-[8px] hover:drop-shadow rounded-[8px] justify-center customStroke custom text-white cursor-pointer"
    >
      <p>{text}</p>
      <img src="/assets/icons/plus.svg" />
    </div>
  );
};

export default CreateButton;
