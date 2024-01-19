import React from "react";
import { PPT_COVER_IMG_URL } from "../utils/constants";

const PPTCard = () => {
  return (
    <div className="w-40 mx-2 my-4 bg-white text-black rounded-lg overflow-hidden shadow-md border border-gray-200 hover:cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
      <img
        className="w-full h-32 object-cover"
        alt="restaurant-logo"
        src={PPT_COVER_IMG_URL}
      />

      <div className="p-1">
        <div className="text-lg mb-2 truncate">Untitled Presentation</div>
      </div>
    </div>
  );
};

export default PPTCard;
