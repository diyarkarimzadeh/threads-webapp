"use client";

import React from "react";

interface InformationProps {
  bio: string;
  followerCount: string;
  link: string;
  linkTitle: string;
}

const Information = ({
  bio,
  followerCount,
  link,
  linkTitle,
}: InformationProps) => {
  return (
    <div className="mt-6">
      <div>
        <p className="text-md">{bio}</p>
      </div>
      <div>
        <p className="text-gray-600 text-sm">
          {followerCount} •{" "}
          <a href={link} target="_blank">
            {linkTitle}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Information;
