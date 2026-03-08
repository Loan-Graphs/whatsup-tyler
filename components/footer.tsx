export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-serif text-2xl text-white mb-2">What&apos;s Up Tyler</p>
        <p className="text-sm mb-6">Your daily guide to what&apos;s happening in Tyler, TX</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="/events" className="hover:text-amber transition">Events</a>
          <a href="/food-trucks" className="hover:text-amber transition">Food Trucks</a>
          <a href="/restaurants" className="hover:text-amber transition">Restaurants</a>
        </div>
        <p className="text-xs mt-8">2026 What&apos;s Up Tyler. All rights reserved.</p>
      </div>
    </footer>
  );
}
