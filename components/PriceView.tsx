import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  price: number;
}

const PriceView = ({ price }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <span className={cn("text-lg font-semibold text-[#FF4410]")}>
        {price.toFixed(2)}€
      </span>
      <span className={cn("text-sm font-medium text-zinc-500 line-through")}>
        {(price * 1.25).toFixed(2)}€
      </span>
    </div>
  );
};

export default PriceView;
