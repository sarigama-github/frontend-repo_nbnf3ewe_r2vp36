import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function HairLossSupport(){
  return (
    <Layout>
      <section className="mw-section">
        <div className="mw-container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl">Support, Comfort, and Confidence — Every Step of the Way</h1>
            <p className="text-neutral-700">We offer a calm, private experience with gentle guidance at every stage. From selecting the right cap to aftercare, we’re here for you.</p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Hand-tied wigs for superior comfort</li>
              <li>Private consultations in a warm, boutique setting</li>
              <li>Personal recommendations tailored to your needs</li>
            </ul>
            <div className="flex gap-3 pt-2">
              <Link to="/booking" className="mw-button">Book a Private Consultation</Link>
            </div>
          </div>
          <div className="mw-card aspect-[4/3] bg-[var(--mw-champagne)]"/>
        </div>
      </section>

      <section className="mw-section mw-subtle">
        <div className="mw-container grid md:grid-cols-3 gap-10">
          {[{t:'01. Consultation',d:'A calm, private experience.'},{t:'02. Selection',d:'Thoughtful curation just for you.'},{t:'03. Aftercare',d:'Ongoing support and maintenance.'}].map((s,i)=> (
            <div key={i} className="space-y-3">
              <h3 className="text-xl" style={{fontFamily:'Playfair Display'}}>{s.t}</h3>
              <p className="text-neutral-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container">
          <h2 className="text-2xl mb-4" style={{fontFamily:'Playfair Display'}}>FAQ</h2>
          <div className="space-y-4 max-w-3xl">
            {[['What should I bring to my consultation?','Just yourself. We’ll guide you through everything.'],
              ['Do you offer custom sizing?','Yes, we offer cap adjustments and tailored fits.'],
              ['How often should I wash my wig?','Every 8–10 wears, or as needed for your lifestyle.']].map((f,i)=> (
              <div key={i} className="border rounded p-4" style={{borderColor:'var(--mw-taupe)'}}>
                <div className="font-medium" style={{fontFamily:'Playfair Display'}}>{f[0]}</div>
                <p className="text-neutral-700 mt-1">{f[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
