import React from "react";

const CustomButton = ({ text, onClick }) => {
  return (
    <button
      type="submit"
      onSubmit={onClick}
      className="flex justify-center items-center gap-[10px] p-[8px] rounded-[8px] text-[20px] cursor-pointer customButton text-white "
    >
      {text}
    </button>
  );
};

export default CustomButton;
