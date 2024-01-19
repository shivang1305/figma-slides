import React from "react";
import SearchHeader from "./SearchHeader";
import PPTCard from "./PPTCard";

const SelectPPTDailog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-70">
      <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4 text-black my-4">
            Select a file
          </h2>
          <div className="cursor-pointer" onClick={onClose}>
            X
          </div>
        </div>
        <p className="text-black my-4">Presentations</p>
        <SearchHeader />
        <hr className="mt-4 border-black" />
        <div className="flex flex-wrap">
          <PPTCard />
          <PPTCard />
          <PPTCard />
          <PPTCard />
          <PPTCard />
          <PPTCard />
          <PPTCard />
          <PPTCard />
          <PPTCard />
          <PPTCard />
        </div>
        <hr className="mt-4 border-black" />
        <div className="flex justify-between">
          <button
            className="mt-4 px-4 py-2 bg-blue-300 text-black font-bold rounded hover:bg-blue-400"
            onClick={() => {}}
          >
            Select
          </button>
          <button
            className="mt-4 mx-4 px-4 py-2 bg-gray-300 text-black font-bold rounded hover:bg-gray-400"
            onClick={() => {}}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectPPTDailog;
