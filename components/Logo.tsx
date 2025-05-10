import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl font-black tracking-wider uppercase"
        )}
      >
        BymGeam
      </h2>
    </Link>
  );
};

export default Logo;
