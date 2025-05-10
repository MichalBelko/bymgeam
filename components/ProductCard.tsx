import Link from "next/link";
import React from "react";
import PriceView from "./PriceView";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group text-sm rounded-lg overflow-hidden">
      <div className="border overflow-hidden">
        {product?.image && (
          <Link href={`/product/${product.id}`}>
            <img
              src={product?.image}
              alt={product?.title}
              className="group-hover:scale-106 hoverEffect w-full h-72 overflow-hidden object-contain"
            />
          </Link>
        )}
      </div>
      <div className="py-3 px-2 flex flex-col gap-1.5 bg-zinc-50 border border-t-0 rounded-lg rounded-tl-none rounded-tr-none">
        <h2 className="font-bold line-clamp-1">{product?.title}</h2>
        {/* <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {product.description}
        </p> */}
        <PriceView price={product?.price} />
        <Button
          className={cn(
            "w-full bg-transparent text-dark-color shadow-none border border-dark-color/30 tracking-wide hover:bg-[#ff4100] font-semibold hover:text-white hoverEffect"
          )}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
