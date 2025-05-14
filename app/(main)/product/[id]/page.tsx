"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PriceView from "@/components/PriceView";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BoxIcon,
  FileQuestion,
  Heart,
  ListOrderedIcon,
  Share,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="text-center my-10 text-xl text-">Product not found.</div>
    );
  }

  return (
    <main className="max-w-[1250px] m-auto py-10 px-10 flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
        <AnimatePresence mode="wait">
          <motion.div className="w-full max-h-[550px] min-h-[450px] border border-dark-color/10 rounded-md group overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 max-h-[550px] min-h-[500px] object-contain group-hover:scale-110 hoverEffect rounded-md"
              width={700}
              height={700}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div>
          <h2 className="text-2xl md:text-4l font-bold mb-2">
            {product.title}
          </h2>
          <PriceView price={product.price} />
        </div>
        <p className="bg-green-100 w-24 text-center text-green-600 text-sm py-2.5 font-semibold rounded-lg">
          In Stock
        </p>
        <p className="text-sm text-gray-600 tracking-wide">
          {product.description}
        </p>
        <div className="flex items-center gap-2.5 lg:gap-5 w-full">
          <Button className=" bg-[#FF4100] text-white shadow-none border flex-1 border-dark-color/30 tracking-wide font-semibold hover:bg-[#CC3000] hoverEffect">
            Add to cart
          </Button>
          <button className=" border-2 border-dark-color/30 text-dark-color/60 px-2.5 py-1.5 rounded-md hover:text-red hover:border-red hoverEffect">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        <div className="">
          <Accordion
            type="single"
            collapsible
            className="border-b border-b-gray-200"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold">
                {product.title}: Charasteristics
              </AccordionTrigger>
              <AccordionContent className=" flex flex-col gap-1">
                <p className="flex items-center justify-between">
                  Brand: <span>Supreme</span>
                </p>
                <p className="flex items-center justify-between">
                  Items in stock: <span>{product?.rating.count}</span>
                </p>
                <p className="flex items-center justify-between">
                  Category: <span>{product.category}</span>
                </p>
                <p className="flex items-center justify-between">
                  Customer Rating: <span>{product.rating.rate}</span>
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-200 py-5 mt-2">
          <div className="flex items-center text-black hover:text-[#FF4100] hoverEffect gap-2 text-sm">
            <BoxIcon className="w-5 h-5" />
            <p>Compare color</p>
          </div>
          <div className="flex items-center text-black  hover:text-[#FF4100] hoverEffect gap-2 text-sm">
            <FileQuestion className="w-5 h-5" />
            <p>Ask a question</p>
          </div>
          <div className="flex items-center text-black  hover:text-[#FF4100] hoverEffect gap-2 text-sm">
            <ListOrderedIcon className="w-5 h-5" />
            <p>Delivery & Return</p>
          </div>
          <div className="flex items-center text-black hover:text-[#FF4100] hoverEffect gap-2 text-sm">
            <Share className="w-5 h-5" />
            <p>Share</p>
          </div>
        </div>
        <div className="flex flex-warp items-center justify-center gap-5">
          <div className="border border-dark-blue/20 text-center p-3 hover:border-[#FF4100] rounded-md hoverEffect">
            <p className="text-base text-dark-color font-semibold">
              Free Shipping
            </p>
            <p className="text-sm text-gray-500">
              Free Shipping over order 100€
            </p>
          </div>
          <div className="border border-dark-blue/20 text-center p-3 hover:border-[#FF4100] rounded-md hoverEffect">
            <p className="text-base text-dark-color font-semibold">
              Flexible Payment
            </p>
            <p className="text-sm text-gray-500">
              Pay with Multiple credit cards
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;
