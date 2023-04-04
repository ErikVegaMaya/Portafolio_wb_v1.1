import React from "react";

interface buttonProps {
  title: string;
  onClick: () => void;
}

const AddButton = (props: buttonProps) => {
  return (
    <div className="w-[98%] flex justify-end">
      <button className="my-4" onClick={props.onClick}>
        <h1 className="px-4 rounded bg-slate-700 text-white hover:bg-slate-800">
          {props.title}
        </h1>
      </button>
    </div>
  );
};

export default AddButton;
