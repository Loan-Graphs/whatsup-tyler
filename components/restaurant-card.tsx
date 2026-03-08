import { Restaurant } from "@/lib/restaurants-data";

const categoryColors: Record<string, string> = {
  "BBQ & Smokehouse": "bg-red-100 text-red-700",
  "Mexican & Tex-Mex": "bg-green-100 text-green-700",
  "American & Burgers": "bg-blue-100 text-blue-700",
  "Seafood": "bg-cyan-100 text-cyan-700",
  "Brunch & Cafe": "bg-yellow-100 text-yellow-700",
  "Pizza & Italian": "bg-orange-100 text-orange-700",
  "Bars & Nightlife": "bg-purple-100 text-purple-700",
};

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-serif text-lg font-bold">{restaurant.name}</h3>
        <span className="text-sm font-medium text-gray-500">{restaurant.priceRange}</span>
      </div>
      <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-3 ${categoryColors[restaurant.category] || "bg-gray-100 text-gray-700"}`}>
        {restaurant.category}
      </span>
      <p className="text-sm text-gray-600 mb-3">{restaurant.description}</p>
      <p className="text-xs text-gray-400">{restaurant.address}</p>
    </div>
  );
}
