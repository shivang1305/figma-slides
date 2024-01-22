import React from "react";
import { PPT_COVER_IMG_URL } from "../../utils/constants";

const SlideCard = () => {
  return (
    <div className="w-64 mx-2 my-4 bg-white text-black rounded-lg overflow-hidden shadow-md border border-gray-200 hover:cursor-pointer">
      <img
        className="w-full h-32 object-cover"
        alt="restaurant-logo"
        src={PPT_COVER_IMG_URL}
      />
    </div>
  );
};

export default SlideCard;
