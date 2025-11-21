import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function About(){
  return (
    <Layout>
      <section className="mw-section">
        <div className="mw-container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl">Wigs With Heart Behind Them</h1>
            <p className="text-neutral-700">Michelle Wigs began with a simple belief: beauty should feel calm, honest, and kind. We craft human-hair pieces with a boutique approach—minimalist, elegant, and deeply personal.</p>
            <p className="text-neutral-700">Our values are craftsmanship, care, and confidence. Every detail matters, from the softness of the hair to the warmth of your experience.</p>
            <Link to="/booking" className="mw-button">Book Consultation</Link>
          </div>
          <div className="mw-card aspect-[4/3] bg-[var(--mw-champagne)]"/>
        </div>
      </section>
    </Layout>
  )
}
