import React from "react";

const CommonArea = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <div className="relative flex justify-center h-full">
        <div className="bg-gray-100 border border-gray-500 rounded-lg w-[95%] h-[85%] my-2 py-2 px-4 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CommonArea;
