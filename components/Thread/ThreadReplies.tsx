import React from "react";
import { MoreHorizontal } from "lucide-react";
import { threads } from "@/data/threads";

interface ThreadsRepliesProps {
  userWhoReplies: string;
  repliesCount: number;
  likesCount: number;
}

const ThreadReplies = ({
  userWhoReplies,
  repliesCount,
  likesCount,
}: ThreadsRepliesProps) => {
  return (
    <div className="flex flex-row w-[100%] items-center justify-center mt-2">
      <div className="flex flex-row items-center justify-center basis-[64px]">
        <img
          src={userWhoReplies}
          width={28}
          height={28}
          className="rounded-full"
        />
      </div>
      <div className="w-[100%] ml-2">
        <div className="flex flex-row justify-start items-center">
          <p className="text-gray-600">
            {repliesCount} {repliesCount > 1 ? "replies" : "reply"} •{" "}
            {likesCount} {likesCount > 1 ? "likes" : "like"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreadReplies;
