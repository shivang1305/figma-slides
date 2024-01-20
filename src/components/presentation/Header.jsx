import React from "react";
import { LOGO_URL } from "../../utils/constants";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex justify-between shadow-md border border-gray-200">
      <div className="flex logo-container m-4 ml-8 hover:cursor-pointer">
        <img
          data-testid="logo"
          alt="logo"
          className="w-20 h-20 shadow-md rounded-md"
          src={LOGO_URL}
        />
        <p className="font-bold ml-4 text-2xl mt-7">Weekly Business Review</p>
      </div>

      <button
        className="flex justify-center my-10 shadow-lg rounded-md border p-3 text-xl font-semibold hover:cursor-pointer"
        onClick={() => {}}
      >
        New Content <MdKeyboardArrowDown className="ml-2 my-auto" />
      </button>

      <button
        className="justify-center my-10 font-semibold hover:cursor-pointer"
        onClick={() => {}}
      >
        <BsThreeDotsVertical className="w-6 h-6 mr-4" />
      </button>
    </div>
  );
};

export default Header;
