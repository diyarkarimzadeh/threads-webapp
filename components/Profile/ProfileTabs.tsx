import React, { useState } from "react";
import Threads from "./Threads";
import Replies from "./Replies";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="flex flex-row items-center justify-around mt-8">
        <div
          onClick={() => {
            setActiveTab(0);
          }}
          className={`${
            activeTab === 0
              ? "border-b"
              : "text-gray-600 border-b border-gray-800"
          } w-[100%] flex items-center justify-center pb-4`}
        >
          <p>Threads</p>
        </div>
        <div
          onClick={() => {
            setActiveTab(1);
          }}
          className={`${
            activeTab === 1
              ? "border-b"
              : "text-gray-600 border-b border-gray-800"
          } w-[100%] flex items-center justify-center pb-4`}
        >
          <p>Replies</p>
        </div>
      </div>
      {activeTab === 0 ? <Threads /> : <Replies />}
    </div>
  );
};

export default ProfileTabs;
