import { Event } from '@/lib/events-data'

const categoryColors: Record<string, string> = {
  Family: 'bg-blue-100 text-blue-700',
  Outdoors: 'bg-green-100 text-green-700',
  'Food & Drink': 'bg-amber-100 text-amber-700',
  Nightlife: 'bg-purple-100 text-purple-700',
  Arts: 'bg-rose-100 text-rose-700',
}

export default function EventCard({ event, blurred }: { event: Event; blurred?: boolean }) {
  return (
    <div className={`bg-white rounded-2xl p-5 shadow-sm border border-gray-100 transition-all ${blurred ? 'blur-sm select-none pointer-events-none' : 'hover:shadow-md'}`}>
      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${categoryColors[event.category] || 'bg-gray-100 text-gray-700'}`}>
        {event.category}
      </span>
      <h3 className="font-playfair text-lg font-bold text-gray-900 mb-1">{event.name}</h3>
      <p className="text-gray-600 text-sm mb-2 leading-relaxed">{event.description}</p>
      <p className="text-gray-400 text-xs">{event.location}</p>
    </div>
  )
}
