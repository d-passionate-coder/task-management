import React, { useState } from "react";

const CustomPassword = ({ name, value, onChange, id }) => {
  const [type, setType] = useState("password");

  const handleShow = (hide = false) => {
    if (hide) {
      setType("password");
    } else if (type === "password") setType("text");
    else setType("password");
  };

  return (
    <div className="flex justify-between relative focus:outline-none items-center px-[16px] py-[12px] gap-[10px] bg-[#EBEBEB] rounded-[8px]">
      <input
        required
        type={type}
        placeholder="Password"
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        className="placeholder:text-[20px] w-full text-[#606060] placeholder:text-[#999999] focus:outline-none bg-[#EBEBEB] "
      />
      <img
        onMouseDown={() => handleShow()}
        onMouseUp={() => handleShow()}
        onMouseOut={() => handleShow(true)}
        className="cursor-pointer"
        src="/assets/icons/show.svg"
      />
    </div>
  );
};

export default CustomPassword;
