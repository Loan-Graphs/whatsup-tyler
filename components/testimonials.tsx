const testimonials = [
  { name: "Sarah M.", area: "South Tyler", quote: "I moved here from Dallas and had no idea what was going on. Now I wake up to the best Tyler tips every morning." },
  { name: "Marcus T.", area: "Hollytree", quote: "Finally a newsletter that actually knows Tyler. The events list alone is worth it - my kids love it." },
  { name: "Jennifer L.", area: "Old Town", quote: "What's Up Tyler is the first thing I read with my coffee. It's like having a friend who knows everything happening in town." },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Tyler Locals Are Saying
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
              <p className="text-gray-700 mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
