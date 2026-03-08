import { foodTrucks } from "@/lib/food-trucks-data";
import FoodTruckCard from "@/components/food-truck-card";

export default function FoodTrucksPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-serif text-4xl font-bold text-center mb-2">Tyler&apos;s Best Food Trucks</h1>
        <p className="text-center text-gray-500 mb-4">Follow them on Facebook to catch today&apos;s location</p>
        <div className="bg-amber/10 text-amber-dark text-sm text-center rounded-lg px-4 py-3 mb-10 max-w-xl mx-auto">
          Most food trucks post their daily location on Facebook - follow them to stay updated!
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodTrucks.map((truck) => (
            <FoodTruckCard key={truck.id} truck={truck} />
          ))}
        </div>
      </div>
    </div>
  );
}
