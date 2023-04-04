import React from "react";
import { CloseIcon } from "../Icons";

const DeleteModal = (props: any) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-60 transition-opacity">
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="flex flex-col w-1/3">
          <button
            onClick={props.onCancel}
            className="text-white hover:border self-end hover:border-white rounded w-[26px] h-[26px] mb-1 text-center"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="bg-white w-1/3 h-1/3 flex flex-col justify-between">
          <div className="w-full text-center mt-20 ">
            <h1 className="text-base">
              Are you sure you want to delete this record?
            </h1>
          </div>
          <div className="w-full text-center mb-10 ">
            <button
              onClick={props.onCancel}
              className="border rounded-lg bg-slate-800 hover:bg-slate-600  px-4 py-1 mr-1 text-white"
            >
              Cancel
            </button>
            <button
              onClick={props.onContinue}
              className="border rounded-lg bg-cyan-900 hover:bg-cyan-700 px-4 py-1 ml-1 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
