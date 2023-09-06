import React from "react";

export interface FollowCartProps {
  id: number;
  userImage: string;
  username: string;
  name: string;
  followerCount: string;
}

const FollowCard = ({
  id,
  userImage,
  username,
  name,
  followerCount,
}: FollowCartProps) => {
  return (
    <div className="flex flex-row justify-between items-start px-6 py-6 border-b border-gray-800">
      <div className="flex flex-row">
        <div>
          <img
            src={userImage}
            width={42}
            height={42}
            className="rounded-full mb-2"
          />
        </div>

        <div className=" px-3">
          <h1>{username}</h1>
          <p className=" text-xs text-gray-600 my-1">{name}</p>
          <p className="text-sm">{followerCount} followers</p>
        </div>
      </div>

      <div>
        <button className="border border-gray-800 px-10 py-2 rounded-xl text-sm">
          Follow
        </button>
      </div>
    </div>
  );
};

export default FollowCard;
