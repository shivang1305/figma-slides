import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { BsTextareaT } from "react-icons/bs";
import { GoGraph } from "react-icons/go";

const InputMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-2 m-2">
      <button
        className="flex justify-center my-10 shadow-lg rounded-md border p-3 text-xl font-semibold hover:cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        New Content <MdKeyboardArrowDown className="ml-2 my-auto" />
      </button>
      {isMenuOpen && (
        <div className="absolute w-40 top-14 md:top-10 font-semibold text-lg md:text-xl bg-slate-100 rounded-lg">
          <div className="flex p-2 m-2 md:p-2 md:m-2 hover:bg-slate-200 cursor-pointer">
            <BsTextareaT className="mr-2 my-auto" />
            Text
          </div>
          <div className="flex p-2 m-2 md:p-2 md:m-2 hover:bg-slate-200 cursor-pointer">
            <GoGraph className="mr-2 my-auto" />
            Metric
          </div>
          <div className="flex p-2 m-2 md:p-2 md:m-2 hover:bg-slate-200 cursor-pointer">
            <CiImageOn className="mr-2 my-auto" />
            Image
          </div>
        </div>
      )}
    </div>
  );
};

export default InputMenu;
