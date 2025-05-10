'use client';
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <div>
      <header className=" border-b border-gray-400 p-4 px-5 text-light-color ">
        <div className="headerContainer max-w-[1250px] flex justify-between gap-7 m-auto items-center">
          <Menu />
          <div className="flex items-center text-dark-color justify-center w-auto md:w-1/3 gap-2.5">
            <MobileMenu />
            <Logo />
          </div>
          <div className="w-auto md:w-1/3 flex items-center justify-end gap-5 text-sm capitalize font-semibold">
            <button
              onClick={handleLogout}
              className="hover:text-[#FF4100] hoverEffect  text-dark-color"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
