export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-playfair text-2xl font-bold mb-2">What&apos;s Up Tyler</p>
        <p className="text-gray-400 text-sm mb-6">Your daily guide to what&apos;s happening in Tyler, TX</p>
        <div className="flex justify-center gap-6 text-gray-500 text-sm mb-6">
          <a href="#subscribe" className="hover:text-amber-500 transition-colors">Subscribe</a>
          <a href="#events" className="hover:text-amber-500 transition-colors">Events</a>
        </div>
        <p className="text-gray-600 text-xs">&copy; 2025 What&apos;s Up Tyler</p>
      </div>
    </footer>
  )
}
