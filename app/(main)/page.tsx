"use client";
import Hero from "@/components/Hero";
import HomeTabbar from "@/components/HomeTabbar";
import ProductGrid from "@/components/ProductGrid";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn !== "true") {
        router.replace("/login");
      }
    }
  }, [router]);

  return (
    <div className="p-2">
      <main className="max-w-[1250px] m-auto py-10">
        <Hero />
        <HomeTabbar
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        <ProductGrid selectedCategory={selectedCategory} />
      </main>
    </div>
  );
}
