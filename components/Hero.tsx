import { cn } from "@/lib/utils";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h2 className={cn("text-3xl md:text-4xl font-bold text-center")}>
        Welcome to the BymGeam Store!
      </h2>
      <p className="text-sm  text-center text-light-color/80 font-medium max-[480px]:text-sm mt-2">
        Find Everything you need to look and feel your best, and shop the latest
        men&apos;s fashion
      </p>
    </div>
  );
};

export default Hero;
