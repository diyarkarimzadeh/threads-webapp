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
          {/* <Home
            onClick={() => {
              setCurrentPage(1);
            }}
            size={28}
            color={`${currentPage === 1 ? "white" : "gray"}`}
          /> */}
          <svg
            aria-label="Home"
            color={`${currentPage === 1 ? "white" : "gray"}`}
            fill="rgb(243, 245, 247)"
            height="26"
            role="img"
            viewBox="0 0 26 26"
            width="26"
          >
            <title>Home</title>
            <path
              d="M2.25 12.8855V20.7497C2.25 21.8543 3.14543 22.7497 4.25 22.7497H8.25C8.52614 22.7497 8.75 22.5259 8.75 22.2497V17.6822V17.4997C8.75 15.1525 10.6528 13.2497 13 13.2497C15.3472 13.2497 17.25 15.1525 17.25 17.4997V17.6822V22.2497C17.25 22.5259 17.4739 22.7497 17.75 22.7497H21.75C22.8546 22.7497 23.75 21.8543 23.75 20.7497V12.8855C23.75 11.3765 23.0685 9.94815 21.8954 8.99883L16.1454 4.3454C14.3112 2.86095 11.6888 2.86095 9.85455 4.3454L4.10455 8.99883C2.93153 9.94815 2.25 11.3765 2.25 12.8855Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2.5"
            ></path>
          </svg>
        </Link>

        <Link href="/search">
          {/* <Search
            onClick={() => {
              setCurrentPage(2);
            }}
            size={28}
            color={`${currentPage === 2 ? "white" : "gray"}`}
          /> */}
          <svg
            aria-label="Search"
            color={`${currentPage === 2 ? "white" : "gray"}`}
            fill="transparent"
            height="26"
            role="img"
            viewBox="0 0 26 26"
            width="26"
          >
            <title>Search</title>
            <path
              clip-rule="evenodd"
              d="M3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 15.9183 15.9183 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5ZM11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22C13.949 22 16.2023 21.1615 17.9883 19.756L22.3661 24.1339C22.8543 24.622 23.6457 24.622 24.1339 24.1339C24.622 23.6457 24.622 22.8543 24.1339 22.3661L19.756 17.9883C21.1615 16.2023 22 13.949 22 11.5C22 5.70101 17.299 1 11.5 1Z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </Link>

        <Link href="/thread/new">
          <svg
            aria-label="Create"
            color={`${currentPage === 3 ? "white" : "gray"}`}
            fill="transparent"
            height="26"
            role="img"
            viewBox="0 0 26 26"
            width="26"
          >
            <title>Create</title>
            <path
              d="M22.75 13L22.75 13.15C22.75 16.5103 22.75 18.1905 22.096 19.4739C21.5208 20.6029 20.6029 21.5208 19.4739 22.096C18.1905 22.75 16.5103 22.75 13.15 22.75L12.85 22.75C9.48969 22.75 7.80953 22.75 6.52606 22.096C5.39708 21.5208 4.4792 20.6029 3.90396 19.4739C3.25 18.1905 3.25 16.5103 3.25 13.15L3.25 12.85C3.25 9.48968 3.25 7.80953 3.90396 6.52606C4.4792 5.39708 5.39708 4.4792 6.52606 3.90396C7.80953 3.25 9.48968 3.25 12.85 3.25L13 3.25"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2.5"
            ></path>
            <path
              d="M21.75 4.25L13.75 12.25"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2.5"
            ></path>
          </svg>
        </Link>

        <Link href="/activity">
          <svg
            aria-label="Notifications"
            color={`${currentPage === 4 ? "white" : "gray"}`}
            fill={`${currentPage === 4 ? "white" : "gray"}`}
            height="26"
            role="img"
            viewBox="0 0 26 26"
            width="26"
          >
            <title>Notifications</title>
            <path
              d="M2.5 9.85683C2.5 14.224 6.22178 18.5299 12.0332 22.2032C12.3554 22.397 12.7401 22.5909 13 22.5909C13.2703 22.5909 13.655 22.397 13.9668 22.2032C19.7782 18.5299 23.5 14.224 23.5 9.85683C23.5 6.11212 20.8698 3.5 17.4599 3.5C15.4847 3.5 13.9356 4.39792 13 5.74479C12.0851 4.40812 10.5257 3.5 8.5401 3.5C5.14059 3.5 2.5 6.11212 2.5 9.85683Z"
              stroke="currentColor"
              stroke-width="2.5"
            ></path>
          </svg>
        </Link>

        <Link href="/profile">
          <svg
            aria-label="Profile"
            color={`${currentPage === 5 ? "white" : "gray"}`}
            fill={`${currentPage === 5 ? "white" : "gray"}`}
            height="26"
            role="img"
            viewBox="0 0 26 26"
            width="26"
          >
            <title>Profile</title>
            <circle
              cx="13"
              cy="7.25"
              r="4"
              stroke="currentColor"
              stroke-width="2.5"
            ></circle>
            <path
              d="M6.26678 23.75H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 19.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z"
              stroke="currentColor"
              stroke-width="2.5"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
