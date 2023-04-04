import React from "react";
import { ArrowDownIcon } from "../Icons";

interface detailProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  bgColorIcon: string;
  title: string;
  subtitle: string;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onSubmit: () => void;
  onCloseEdit: () => void;
  isShowingActions: boolean;
  isEditing: boolean;
}

const DetailArea = (props: detailProps) => {
  const { bgColorIcon } = props;
  const styles = {
    iconContainer: {
      backgroundColor: bgColorIcon,
    },
  };

  return (
    <div className="w-screen h-full">
      <div className="relative flex justify-center h-full">
        <div className="bg-gray-100 border border-gray-500 rounded-lg w-[95%] h-[85%] mt-4">
          <div className="bg-slate-300 rounded-t-lg w-full">
            <div className=" px-4 py-2 flex flex-row justify-between w-full border-b border-slate-400">
              <div className="flex flex-row">
                <div
                  className={
                    "flex justify-center items-center pt-1 w-[40px] h-[40px] rounded-md"
                  }
                  style={styles.iconContainer}
                >
                  <div className="text-white">{props.icon}</div>
                </div>
                <div className="ml-2">
                  <h1 className="text-xs">{props.title}</h1>
                  <h1 className="text-lg font-bold">{props.subtitle}</h1>
                </div>
              </div>
              <div>
                <button
                  name="actions"
                  id="actions"
                  className="px-4 py-1 flex justify-center rounded bg-slate-700 text-white hover:bg-slate-900"
                  onClick={props.onClick}
                >
                  <div className="mr-1">Actions</div>
                  <ArrowDownIcon />
                </button>
                {props.isShowingActions && (
                  <div className="absolute flex flex-col bg-slate-700 mt-1 origin-top-right">
                    <button
                      className=" text-white my-1 py-1 hover:bg-slate-300 hover:text-slate-800"
                      id="edit"
                      onClick={props.onEdit}
                    >
                      <div className="px-8">Edit</div>
                    </button>
                    <button
                      className=" text-white mb-1 py-1 hover:bg-slate-300 hover:text-slate-800"
                      id="delete"
                      onClick={props.onDelete}
                    >
                      <div className="px-8">Delete</div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-6 mx-4 px-6">{props.children}</div>
          {props.isEditing && (
            <div className="bg-slate-300 absolute h-12 w-[94.85%] rounded-b top-[80%] flex flex-row items-center justify-center">
              <button
                onClick={props.onCloseEdit}
                className="border rounded-lg bg-slate-800 hover:bg-slate-600 px-4 py-1 mr-1 text-white"
              >
                Cancel
              </button>
              <button
                onClick={props.onSubmit}
                className="border rounded-lg bg-cyan-900 hover:bg-cyan-700 px-4 py-1 ml-1 text-white"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailArea;
