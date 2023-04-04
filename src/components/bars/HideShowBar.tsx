import React from "react";

interface HSBarProps {
  title: string;
  onClick: () => void;
  isHidding: boolean;
}

const HideShowBar = (props: HSBarProps) => {
  return (
    <div className="w-[98%] flex flex-row justify-between  h-8 bg-gray-600 text-white mb-4 py-1 px-10">
      <h1>{props.title}</h1>
      <button onClick={props.onClick}>
        {props.isHidding ? (
          <h1 className="px-4 rounded hover:bg-slate-800">show</h1>
        ) : (
          <h1 className="px-4 rounded hover:bg-slate-800">hide</h1>
        )}
      </button>
    </div>
  );
};

export default HideShowBar;
