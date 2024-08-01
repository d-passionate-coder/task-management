import React from "react";

const DropIndicators = ({ column, before }) => {
  return (
    <div
      className="w-full h-[16px] py-[6px] "
      data-before={before}
      data-column={column}
    >
      <div className="h-full opacity-0 w-full bg-black"></div>
    </div>
  );
};

export default DropIndicators;
