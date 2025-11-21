import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function Services(){
  return (
    <Layout>
      <section className="mw-section">
        <div className="mw-container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl">Wig Cuts & Repairs</h1>
            <p className="text-neutral-700">From soft trims to full refreshes, our services keep your piece feeling natural and beautiful.</p>
          </div>
          <div className="mw-card aspect-[4/3] bg-[var(--mw-champagne)]"/>
        </div>
      </section>

      <section className="mw-section mw-subtle">
        <div className="mw-container grid md:grid-cols-3 gap-8">
          {["Cut & Style","Wash & Set","Repairs","Cap Adjustments","Wig Refresh","Styling Lessons"].map((s,i)=> (
            <div key={i} className="mw-card p-6">
              <div className="text-xl mb-2" style={{fontFamily:'Playfair Display'}}>{s}</div>
              <p className="text-neutral-700">Gentle care with minimalist precision.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl mb-3" style={{fontFamily:'Playfair Display'}}>Why maintenance matters</h2>
            <p className="text-neutral-700">Thoughtful care preserves softness, shape, and longevity.</p>
          </div>
          <div>
            <h2 className="text-2xl mb-3" style={{fontFamily:'Playfair Display'}}>Service process</h2>
            <ol className="list-decimal pl-6 text-neutral-700 space-y-1">
              <li>Consultation and goals</li>
              <li>Gentle cleanse and prep</li>
              <li>Cut, repair, and finish</li>
            </ol>
          </div>
        </div>
        <div className="mw-container mt-10">
          <Link to="/booking" className="mw-button">Book a Service Appointment</Link>
        </div>
      </section>
    </Layout>
  )
}
