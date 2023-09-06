import React from "react";

const SearchInput = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        placeholder="Search"
        className="text-white w-[100%] h-16 rounded-2xl bg-[#0A0A0A] px-6 mx-4 border border-gray-800"
      />
    </div>
  );
};

export default SearchInput;
