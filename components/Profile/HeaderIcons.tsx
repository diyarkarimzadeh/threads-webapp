"use client";

import React from "react";
import { Lock, Instagram, AlignRight } from "lucide-react";

const HeaderIcons = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <Lock size={24} />
      </div>
      <div className="flex flex-row gap-6">
        <Instagram size={24} />
        <AlignRight size={24} />
      </div>
    </div>
  );
};

export default HeaderIcons;
