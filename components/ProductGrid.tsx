"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { AnimatePresence, motion } from "motion/react";

interface ProductGridProps {
  selectedCategory: string;
}

const ProductGrid = ({ selectedCategory }: ProductGridProps) => {
  const [products, setProducts] = useState<any[]>([]); // State to store fetched products
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading

  useEffect(() => {
    // Fetch products from the Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // Set the fetched products
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading products...</div>;
  }

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) =>
          selectedCategory === "Men"
            ? product.category === "men's clothing"
            : selectedCategory === "Women"
            ? product.category === "women's clothing"
            : product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4 sm:gap-8 px-2 w-full">
      {filteredProducts.map((product) => (
        <AnimatePresence key={product?.id}>
          <motion.div
            layout
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={product?.id}
          >
            <ProductCard product={product} />
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default ProductGrid;
