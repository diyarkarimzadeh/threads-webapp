"use client";

import React, { useEffect } from "react";
import BottomNavigation, {
  useStore,
} from "@/components/Navigation/BottomNavigation";

const Search = () => {
  const { setCurrentPage } = useStore();

  useEffect(() => {
    setCurrentPage(2);
  }, []);
  return (
    <div>
      <div className="p-6">
        <header className="flex flex-row items-center justify-start text-2xl font-semibold">
          Search
        </header>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Search;
