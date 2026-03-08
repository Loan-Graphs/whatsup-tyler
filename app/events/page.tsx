import Nav from '@/components/nav'
import EventsList from '@/components/events-list'
import Footer from '@/components/footer'

export default function EventsPage() {
  return (
    <main>
      <Nav />
      <div className="pt-20">
        <EventsList />
      </div>
      <Footer />
    </main>
  )
}
