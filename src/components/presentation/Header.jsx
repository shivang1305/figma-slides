import React from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between shadow-md border border-gray-200">
        <div className="flex">
          <div className="logo-container m-6 ml-8 h-12 w-12  hover:cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <img
              data-testid="logo"
              alt="logo"
              className="w-52"
              src={LOGO_URL}
            />
          </div>
        </div>
        <div className="py-5">
          <button
            className="location-container justify-center my-12 font-semibold hover:cursor-pointer"
            onClick={() => {}}
          >
            Text 🔻
          </button>
        </div>
        <div className="py-5">
          <button
            className="location-container justify-center my-12 font-semibold hover:cursor-pointer"
            onClick={() => {}}
          >
            🔻
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
