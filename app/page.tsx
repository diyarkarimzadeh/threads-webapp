'use client'

import BottomNavigation from "@/components/Navigation/BottomNavigation"
import { useStore } from "@/components/Navigation/BottomNavigation"
import { useEffect } from "react";

export default function Home() {
  const { setCurrentPage } = useStore();

  useEffect(() => {
    setCurrentPage(1);
  }, [])

  return (
    <div>
      <p>Home</p>
      <BottomNavigation/>
    </div>
  )
}
