import React from "react";

function MediaDetail({ icon, text, execute }) {
  return (
    <>
      <div className="flex gap-[4px] items-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            execute();
          }}
        >
          {icon}
        </div>
        <p className="font-medium text-[#000000] text-[14px]">{text}</p>
      </div>
    </>
  );
}

export default MediaDetail;
