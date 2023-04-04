import React from "react";
import { CloseIcon } from "../Icons";

interface addProps {
  title: string;
  onSubmit: () => void;
  onCancel: () => void;
  children?: React.ReactNode;
}

const AddArea = (props: addProps) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-60 transition-opacity">
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="flex flex-col w-2/4">
          <button
            onClick={props.onCancel}
            className="text-white hover:border self-end hover:border-white rounded w-[26px] h-[26px] mb-1 text-center"
          >
            <CloseIcon />
          </button>
          <div className=" bg-white py-10 px-12">
            <h1 className="border-b self-center w-full text-center">
              {props.title}
            </h1>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              {props.children}
            </div>
            <div className="mt-10 flex flex-row items-center justify-center ">
              <button
                onClick={props.onCancel}
                className="border rounded-lg bg-slate-800 hover:bg-slate-600 px-4 py-1 mr-1 text-white"
              >
                Cancel
              </button>
              <button
                onClick={props.onSubmit}
                className="border rounded-lg  bg-cyan-900 hover:bg-cyan-700 px-4 py-1 ml-1 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddArea;
