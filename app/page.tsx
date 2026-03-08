import Link from "next/link";
import { events } from "@/lib/events-data";
import EventCard from "@/components/event-card";
import HeroSubscribe from "@/components/hero-subscribe";

const testimonials = [
  { name: "Sarah M.", text: "I never miss a weekend in Tyler anymore. This newsletter is my go-to!", emoji: "🌹" },
  { name: "Jake R.", text: "Found my favorite food truck through What's Up Tyler. Game changer.", emoji: "🚚" },
  { name: "Maria L.", text: "Best way to stay in the loop about Tyler events. Love it!", emoji: "🎉" },
];

export default function Home() {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-2xl" id="subscribe">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4">What&apos;s Up Tyler?</h1>
          <p className="text-lg text-gray-200 mb-8">Your daily guide to what&apos;s happening in Tyler, TX</p>
          <HeroSubscribe />
          <p className="text-sm text-gray-300 mt-6">Join 1,000+ Tyler locals getting the best events, eats, and things to do - free.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">What Tyler Locals Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{t.emoji}</div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-sm">&mdash; {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">Upcoming Events in Tyler</h2>
          <p className="text-center text-gray-500 mb-12">Here&apos;s a taste - subscribe for the full list</p>
          <div className="grid md:grid-cols-2 gap-6">
            {events.slice(0, 4).map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/events" className="inline-block px-8 py-3 bg-amber text-white font-semibold rounded-lg hover:bg-amber-dark transition">
              See All Events
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Latest Newsletter Issues</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Weekend Roundup: Best Tyler Events", "Top 5 Food Trucks This Week", "New Restaurant Alert: Downtown Tyler"].map((title, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-xs text-amber font-semibold mb-2">Issue #{3 - i}</div>
                <h3 className="font-serif text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-500">Coming soon - subscribe to get every issue in your inbox.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
