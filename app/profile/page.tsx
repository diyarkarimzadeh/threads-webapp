"use client";

import HeaderIcons from "@/components/Profile/HeaderIcons";
import Header from "@/components/Profile/Header";
import Information from "@/components/Profile/Information";
import Actions from "@/components/Profile/Actions";
import ProfileTabs from "@/components/Profile/ProfileTabs";
import BottomNavigation from "@/components/Navigation/BottomNavigation";
import { useStore } from "@/components/Navigation/BottomNavigation";
import { useEffect } from "react";

const Profile = () => {
  const { setCurrentPage } = useStore();

  useEffect(() => {
    setCurrentPage(5);
  }, []);
  return (
    <div>
      <main className="p-6">
        <HeaderIcons />
        <Header />
        <Information />
        <Actions />
        <ProfileTabs />
      </main>
      <footer>
        <BottomNavigation />
      </footer>
    </div>
  );
};

export default Profile;
