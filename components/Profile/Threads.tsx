import React from "react";
import { threads } from "@/data/threads";
import Thread from "../Thread/Thread";

const Threads = () => {
  return (
    <div className="mb-10">
      {threads.map((thread) => (
        <Thread key={thread.id} {...thread} />
      ))}
    </div>
  );
};

export default Threads;
