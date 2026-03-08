'use client'

import { useState } from 'react'

export default function EmailGate({ onUnlock }: { onUnlock: () => void }) {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    localStorage.setItem('whatsup-tyler-email', email)
    try { await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) }) } catch {}
    onUnlock()
  }

  return (
    <div className="relative mt-4">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-4 text-center border border-amber-200">
          <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
            Unlock All Tyler Events
          </h3>
          <p className="text-gray-600 text-sm mb-4">Enter your email to see all 20+ things to do in Tyler.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-full border border-gray-300 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            />
            <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm whitespace-nowrap">
              Unlock
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
