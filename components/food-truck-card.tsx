import { FoodTruck } from "@/lib/food-trucks-data";

export default function FoodTruckCard({ truck }: { truck: FoodTruck }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
      <div className="text-4xl mb-3">{truck.emoji}</div>
      <h3 className="font-serif text-xl font-bold mb-1">{truck.name}</h3>
      <span className="inline-block text-xs font-semibold bg-amber/10 text-amber-dark px-2 py-1 rounded-full mb-3">
        {truck.cuisine}
      </span>
      <p className="text-sm text-gray-600 mb-4">{truck.description}</p>
      <a
        href={truck.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-facebook text-white text-sm font-semibold rounded-lg hover:opacity-90 transition"
      >
        Follow on Facebook
      </a>
    </div>
  );
}
