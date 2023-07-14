"use client";

import React from "react";
import { Home, Heart, Edit, Search, UserCircle } from "lucide-react";
import { create } from "zustand";
import Link from "next/link";

interface CurrentPageModel {
  currentPage: number | null;
  setCurrentPage: (id: number) => void;
}

export const useStore = create<CurrentPageModel>((set) => ({
  currentPage: null,
  setCurrentPage: (id) => set((state) => ({ currentPage: id })),
}));

const BottomNavigation = () => {
  const { currentPage, setCurrentPage } = useStore();
  return (
    <div>
      <div className="h-[64px] w-[100vw] fixed bottom-0 right-0 left-0 flex flex-row items-center justify-around bg-black">
        <Link href="/">
          <Home
            onClick={() => {
              setCurrentPage(1);
            }}
            size={32}
            color={`${currentPage === 1 ? "white" : "gray"}`}
          />
        </Link>

        <Link href="/search">
          <Search
            onClick={() => {
              setCurrentPage(2);
            }}
            size={32}
            color={`${currentPage === 2 ? "white" : "gray"}`}
          />
        </Link>

        <Link href="/thread/new">
          <Edit
            onClick={() => {
              setCurrentPage(3);
            }}
            size={32}
            color={`${currentPage === 3 ? "white" : "gray"}`}
          />
        </Link>

        <Link href="/activity">
          <Heart
            onClick={() => {
              setCurrentPage(4);
            }}
            size={32}
            color={`${currentPage === 4 ? "white" : "gray"}`}
          />
        </Link>

        <Link href="/profile">
          <UserCircle
            onClick={() => {
              setCurrentPage(5);
            }}
            size={32}
            color={`${currentPage === 5 ? "white" : "gray"}`}
          />
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
