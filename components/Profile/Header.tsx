"use client";

import React from "react";

const Header = () => {
  return (
    <div className="mt-8 flex flex-row items-center justify-between">
      <div>
        <div>
          <h2 className="text-[22px] font-semibold">Diyar Karimzadeh</h2>
        </div>
        <div className="flex flex-row gap-2">
          <p className="text-[14px]">diyarkarimzadeh</p>
          <div className=" bg-gray-500 rounded-full px-3">
            <p className="text-[14px]">threads.net</p>
          </div>
        </div>
      </div>

      <div>
        <img
          className="rounded-full"
          width={64}
          height={64}
          src="https://www.fakepersongenerator.com/Face/female/female20161025235219666.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
