export default function NewsletterCard({ title, date, preview }: { title: string; date: string; preview: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <p className="text-amber-600 text-xs font-semibold mb-2">{date}</p>
      <h3 className="font-playfair text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{preview}</p>
      <p className="text-amber-600 text-sm font-semibold mt-3 cursor-pointer hover:underline">Read more &rarr;</p>
    </div>
  )
}
