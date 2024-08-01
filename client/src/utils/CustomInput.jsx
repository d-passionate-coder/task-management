import React from "react";

const CustomInput = ({ type, placeholder, id, name, value, onChange }) => {
  return (
    <input
      required
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="flex focus:outline-none text-[#606060] items-center px-[16px] py-[12px] gap-[10px] bg-[#EBEBEB] rounded-[8px] placeholder:text-[20px] placeholder:text-[#999999] "
    />
  );
};

export default CustomInput;
