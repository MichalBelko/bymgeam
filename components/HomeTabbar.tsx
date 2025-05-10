"use client";
import React, { useEffect, useState } from "react";

interface HomeTabbarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const HomeTabbar = ({
  selectedCategory,
  onCategorySelect,
}: HomeTabbarProps) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const formatCategoryName = (category: string) => {
    if (category === "men's clothing") return "Men";
    if (category === "women's clothing") return "Women";
    return category;
  };

  return (
    <div className="flex items-center flex-wrap gap-2 my-5 text-sm justify-center px-5 font-semibold">
      <div className="flex items-center gap-1 sm:gap-2">
        {categories.map((category, index) => (
          <button
            className={`border border-dark-color px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full capitalize hover:bg-dark-color hover:text-white hoverEffect ${
              selectedCategory === category ? "bg-dark-color text-white" : ""
            }`}
            key={index}
            onClick={() => onCategorySelect(category)}
          >
            {formatCategoryName(category)}
          </button>
        ))}
        <button
          onClick={() => onCategorySelect("All")}
          className={`border border-dark-color px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full capitalize hover:bg-dark-color hover:text-white hoverEffect`}
        >
          All
        </button>
      </div>
    </div>
  );
};

export default HomeTabbar;
