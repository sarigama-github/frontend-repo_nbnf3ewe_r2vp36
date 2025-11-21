import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

const categories = [
  { slug:'silk-top', title:'Silk Top', desc:'Seamless realism with multi-directional parting.' },
  { slug:'lace-front', title:'Lace Front', desc:'Soft lace hairline for a natural finish.' },
  { slug:'lace-top', title:'Lace Top', desc:'Breathable, lightweight coverage.' },
  { slug:'band-falls', title:'Band Falls', desc:'Effortless throw-on coverage.' },
  { slug:'hand-tied', title:'Hand-Tied', desc:'Ultra-comfortable, premium construction.' },
]

export default function Home(){
  return (
    <Layout>
      <Hero />

      <section className="mw-section mw-subtle">
        <div className="mw-container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl">Hand-Tied Wigs</h2>
            <Link to="/category/hand-tied" className="mw-button">Explore Hand-Tied Wigs</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="mw-card aspect-[4/5]" />
            ))}
          </div>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container">
          <h2 className="text-2xl md:text-3xl mb-10">Shop by Category</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map(cat => (
              <Link key={cat.slug} to={`/category/${cat.slug}`} className="mw-card p-5 flex flex-col gap-3 group">
                <div className="aspect-[4/5] bg-[var(--mw-champagne)] rounded"></div>
                <div className="font-medium" style={{fontFamily:'Playfair Display'}}>{cat.title}</div>
                <p className="text-sm text-neutral-600">{cat.desc}</p>
                <span className="mw-button w-max mt-auto">Shop {cat.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mw-section mw-subtle">
        <div className="mw-container grid md:grid-cols-3 gap-10">
          {[{t:'100% natural human hair',d:'Only the finest ethically sourced human hair.'},{t:'Personalized experience',d:'Private consultations and thoughtful guidance.'},{t:'Minimalist luxury craftsmanship',d:'Soft details, precise construction, timeless quality.'}].map((f,i)=> (
            <div key={i} className="space-y-3">
              <h3 className="text-xl" style={{fontFamily:'Playfair Display'}}>{f.t}</h3>
              <p className="text-neutral-600">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl">Hair Loss Support</h2>
            <p className="text-neutral-700">Support, comfort, and confidence—every step of the way. Private consultations and thoughtful recommendations tailored to you.</p>
            <Link to="/hair-loss-support" className="mw-button w-max">Learn More</Link>
          </div>
          <div className="mw-card aspect-[4/3] bg-[var(--mw-champagne)]"/>
        </div>
      </section>

      <section className="mw-section mw-subtle">
        <div className="mw-container grid md:grid-cols-3 gap-10">
          {[{t:'01. Consultation',d:'A calm, private experience.'},{t:'02. Selection',d:'We curate styles to fit your life.'},{t:'03. Aftercare',d:'We respond personally to every inquiry.'}].map((s,i)=> (
            <div key={i} className="space-y-3">
              <h3 className="text-xl" style={{fontFamily:'Playfair Display'}}>{s.t}</h3>
              <p className="text-neutral-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl">Lookbook</h2>
            <Link to="/lookbook" className="mw-button">View All</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (<div key={i} className="mw-card aspect-[4/5] bg-[var(--mw-champagne)]" />))}
          </div>
        </div>
      </section>

      <section className="mw-section mw-subtle">
        <div className="mw-container grid md:grid-cols-3 gap-10">
          {[{t:'Cut & Style',d:'Tailored to you.'},{t:'Repair & Refresh',d:'Extend the life of your wig.'},{t:'Wash & Set',d:'Soft, clean, and ready to wear.'}].map((s,i)=> (
            <div key={i} className="space-y-3">
              <h3 className="text-xl" style={{fontFamily:'Playfair Display'}}>{s.t}</h3>
              <p className="text-neutral-600">{s.d}</p>
            </div>
          ))}
          <div className="md:col-span-3 mt-6">
            <Link to="/services" className="mw-button">Explore Services</Link>
          </div>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container">
          <h2 className="text-2xl md:text-3xl mb-8">What clients say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["So natural and lightweight.","Beautiful quality and such kind care.","I felt like myself again."].map((q,i)=> (
              <blockquote key={i} className="mw-card p-6 text-neutral-700">“{q}”</blockquote>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
