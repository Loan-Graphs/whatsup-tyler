'use client'

import { useState, useEffect } from 'react'
import { events } from '@/lib/events-data'
import EventCard from './event-card'
import EmailGate from './email-gate'

export default function EventsList() {
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    setUnlocked(!!localStorage.getItem('whatsup-tyler-email'))
    const handler = () => setUnlocked(true)
    window.addEventListener('email-unlocked', handler)
    return () => window.removeEventListener('email-unlocked', handler)
  }, [])

  const visibleEvents = unlocked ? events : events.slice(0, 4)
  const gatedEvents = unlocked ? [] : events.slice(4, 8)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
          Things to Do in Tyler
        </h2>
        <p className="text-center text-gray-500 mb-10">Your guide to the best of East Texas</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          {gatedEvents.map((event) => (
            <EventCard key={event.id} event={event} blurred />
          ))}
        </div>
        {!unlocked && (
          <EmailGate onUnlock={() => setUnlocked(true)} />
        )}
      </div>
    </section>
  )
}
