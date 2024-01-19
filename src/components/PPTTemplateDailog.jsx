import React, { useState } from "react";
import SelectPPTDailog from "./SelectPPTDailog";

const PPTemplateDailog = ({ isOpen, onClose }) => {
  const [isSelectDialogOpen, setIsSelectDialogOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-1/3 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4 text-black my-4">
            Select Presentation Template
          </h2>
          <div className="cursor-pointer" onClick={onClose}>
            X
          </div>
        </div>
        <p className="text-black my-4">
          Describe what role presentation template plays in this whole thing
        </p>
        <div className="flex justify-between">
          <button
            className="mt-4 px-4 py-2 bg-blue-300 text-black font-bold rounded hover:bg-blue-400"
            onClick={() => setIsSelectDialogOpen(true)}
          >
            Start from an existing presentation
          </button>
          <button
            className="mt-4 mx-4 px-4 py-2 bg-blue-300 text-black font-bold rounded hover:bg-blue-400"
            onClick={() => setIsSelectDialogOpen(true)}
          >
            Create a new Google Slides presentation
          </button>
        </div>
      </div>
      {isSelectDialogOpen && (
        <SelectPPTDailog
          isOpen={isSelectDialogOpen}
          onClose={() => {
            setIsSelectDialogOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default PPTemplateDailog;
