"use client";
import { useState } from "react";
import { restaurants, restaurantCategories } from "@/lib/restaurants-data";
import RestaurantCard from "@/components/restaurant-card";

export default function RestaurantsPage() {
  const [filter, setFilter] = useState("All");
  const categories = filter === "All" ? restaurantCategories : [filter];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-serif text-4xl font-bold text-center mb-2">Tyler TX Restaurants</h1>
        <p className="text-center text-gray-500 mb-8">The best places to eat in Tyler, Texas</p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["All", ...restaurantCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === cat ? "bg-amber text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {categories.map((category) => {
          const items = restaurants.filter((r) => r.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category} className="mb-12">
              <h2 className="font-serif text-2xl font-bold mb-6">{category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((r) => (
                  <RestaurantCard key={r.id} restaurant={r} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
