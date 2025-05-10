"use client";
import { AlignLeft } from "lucide-react";
import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className="hover:text-dark-color hoverEffect md:hidden" />
      </button>
      <div className="md:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
