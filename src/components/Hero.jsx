import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="mw-section">
      <div className="mw-container grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <h1 className="text-3xl md:text-5xl leading-tight">100% Human Hair Wigs, Designed for Confidence</h1>
          <p className="text-neutral-700 max-w-xl">At Michelle Wigs, every piece is crafted with the highest-quality human hair and curated with care—to help every woman feel like the best version of herself.</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/shop" className="mw-button">Shop Collections</Link>
            <Link to="/booking" className="mw-button">Book a Consultation</Link>
          </div>
          <div className="mw-tagline">Every wig, crafted with care.</div>
        </div>
        <div className="order-1 md:order-2">
          <div className="mw-card aspect-[4/5] bg-[var(--mw-champagne)]"/>
        </div>
      </div>
    </section>
  )
}
