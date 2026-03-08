"use client";
import { useState, useEffect } from "react";
import { events, eventCategories } from "@/lib/events-data";
import EventCard from "@/components/event-card";
import SubscribeForm from "@/components/subscribe-form";

export default function EventsPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (localStorage.getItem("whatsup-tyler-email")) setUnlocked(true);
  }, []);

  const filtered = filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-serif text-4xl font-bold text-center mb-2">Tyler TX Events</h1>
        <p className="text-center text-gray-500 mb-8">Things to do in Tyler, Texas</p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["All", ...eventCategories].map((cat) => (
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

        <div className="grid md:grid-cols-2 gap-6 relative">
          {filtered.map((event, i) => (
            <div key={event.id} className="relative">
              <EventCard event={event} blurred={!unlocked && i >= 4} />
              {!unlocked && i === 4 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setShowModal(true)}
                    className="px-6 py-3 bg-amber text-white font-semibold rounded-lg shadow-lg hover:bg-amber-dark transition z-10"
                  >
                    Unlock All Events - Free
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
            <div className="bg-white rounded-2xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <h2 className="font-serif text-2xl font-bold mb-2">Unlock All Tyler TX Events</h2>
              <p className="text-gray-500 text-sm mb-6">Enter your email to see every event. Free forever.</p>
              <SubscribeForm onSuccess={() => { setUnlocked(true); setShowModal(false); }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
