'use client'

import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    localStorage.setItem('whatsup-tyler-email', email)
    try { await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) }) } catch {}
    setSubmitted(true)
    window.dispatchEvent(new Event('email-unlocked'))
  }

  return (
    <section id="subscribe" className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4">
          What&apos;s Up Tyler?
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-2">
          The best local news, events, and things to do - delivered every morning. Free.
        </p>
        <p className="text-white/70 mb-8 text-sm">
          Join your neighbors getting the daily scoop.
        </p>

        {/* beehiiv subscribe form - swap WHATSUP_TYLER_BEEHIIV_ID with your publication embed ID from beehiiv.com */}
        {/*
        <iframe
          src="https://embeds.beehiiv.com/WHATSUP_TYLER_BEEHIIV_ID"
          data-test-id="beehiiv-embed"
          height="52"
          frameBorder="0"
          scrolling="no"
          style={{ width: '100%', borderRadius: '8px' }}
        />
        */}

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <p className="text-white text-lg font-semibold">You&apos;re in!</p>
            <p className="text-white/80 text-sm mt-1">Check your inbox tomorrow morning.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full bg-white/95 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
