"use client";
import Link from "next/link"; 
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();

  const links = ["Home", "Blog", "About", "Contact", "FAQ"];

  return (
    <ul className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold">
      {links.map((link) => (
        <li key={link}>
          <Link
            href={link === "Home" ? "/" : `#`} 
            className={`hover:text-dark-color hoverEffect relative group`}
          >
            {link}
            <span
              className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-dark-color hoverEffect group-hover:w-1/2 group-hover:left-0`}
            />
            <span
              className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-dark-color hoverEffect group-hover:w-1/2 group-hover:right-0`}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
