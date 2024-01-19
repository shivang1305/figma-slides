import React from "react";
import { SEARCH_IMG_URL } from "../utils/constants";

const SearchHeader = () => {
  return (
    <div className="flex">
      <input
        data-testid="search-input "
        className="border-black border-2 rounded-lg p-2 w-1/2"
        placeholder="Search a presentation"
      />
      <img
        data-testid="search-btn"
        alt="search-img"
        src={SEARCH_IMG_URL}
        className="h-7 w-7 ml-2 mr-4 mt-1 hover:cursor-pointer"
      />
    </div>
  );
};

export default SearchHeader;
