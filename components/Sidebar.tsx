"use client";
import React from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: Props) => {
  const pathname = usePathname();

  // Hardcoded links array
  const links = ["Home", "Blog", "About", "Contact", "FAQ"];

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-dark-color/50 w-full shadow-xl hoverEffect ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="min-w-72 max-w-96 bg-dark-color text-white/90 h-full p-10 border-r border-r-white flex flex-col gap-6"
        >
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <h2
                onClick={onClose}
                className={cn(
                  "text-2xl text-white font-black tracking-wider uppercase"
                )}
              >
                BymGeam
              </h2>
            </Link>
            <button
              className="hover:text-red-500 hoverEffect text-xl"
              onClick={onClose}
            >
              <X />
            </button>
          </div>
          <ul className="flex flex-col gap-3.5 text-base tracking-wide capitalize font-semibold">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  onClick={onClose}
                  href={link === "Home" ? "/" : `#`}
                  className={`hover:text-white hoverEffect relative group ${
                    pathname === `/${link.toLowerCase()}`
                      ? "text-white"
                      : "text-white/50"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <SocialMedia />
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;
