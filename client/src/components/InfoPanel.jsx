import React from "react";

const elements = [
  {
    title: "Introducing Tags",
    content:
      "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.",
    image: "/assets/image/info1.svg",
  },
  {
    title: "Share Notes Instantly",
    content:
      "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.",
    image: "/assets/image/info2.svg",
  },
  {
    title: "Access Anywhere",
    content:
      "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.",
    image: "/assets/image/info3.svg",
  },
];

const InfoPanel = () => {
  return (
    <div className="flex gap-[8px] font-inter">
      {elements.map(({ title, content, image }) => (
        <div className="flex p-[16px] gap-[10px] border leading-4 rounded-[8px] border-[#F4F4F4] bg-white w-[33%] ">
          <img className="w-[77px]" src={image} />
          <div className="flex gap-[4px] flex-col ">
            <p className="text-[#757575] text-[16px] font-semibold ">{title}</p>
            <p className="text-[#868686] text-[14px] ">{content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoPanel;
