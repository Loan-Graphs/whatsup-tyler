import Nav from '@/components/nav'
import Hero from '@/components/hero'
import Testimonials from '@/components/testimonials'
import EventsList from '@/components/events-list'
import NewsletterCard from '@/components/newsletter-card'
import Footer from '@/components/footer'

const issues = [
  { title: "Tyler's Best Kept Secret Patios", date: "Mar 7, 2026", preview: "We found 8 hidden patios around Tyler perfect for weekend brunch. Plus: a new coffee shop just opened on the square." },
  { title: "Spring Events You Can't Miss", date: "Mar 5, 2026", preview: "From the Azalea Trail to live music at Liberty Hall - here's your spring calendar for Tyler and East Texas." },
  { title: "The Ultimate Tyler Food Guide", date: "Mar 3, 2026", preview: "BBQ, Tex-Mex, craft beer, and more. Our readers voted on the best restaurants in Tyler. The results are in." },
]

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Testimonials />
      <div id="events">
        <EventsList />
      </div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
            Latest Issues
          </h2>
          <p className="text-center text-gray-500 mb-10">Catch up on what you missed</p>
          <div className="grid md:grid-cols-3 gap-6">
            {issues.map((issue, i) => (
              <NewsletterCard key={i} {...issue} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
