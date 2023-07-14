"use client";

import React from "react";

interface HeaderProps {
  name: string;
  username: string;
  platform: string;
  userImage: string;
}

const Header = ({ name, username, platform, userImage }: HeaderProps) => {
  return (
    <div className="mt-8 flex flex-row items-center justify-between">
      <div>
        <div>
          <h2 className="text-[22px] font-semibold">{name}</h2>
        </div>
        <div className="flex flex-row gap-2">
          <p className="text-[14px]">{username}</p>
          <div className=" bg-gray-500 rounded-full px-3">
            <p className="text-[14px]">{platform}</p>
          </div>
        </div>
      </div>

      <div>
        <img className="rounded-full" width={64} height={64} src={userImage} />
      </div>
    </div>
  );
};

export default Header;
