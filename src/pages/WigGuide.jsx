import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function WigGuide(){
  return (
    <Layout>
      <section className="mw-section">
        <div className="mw-container">
          <h1 className="text-3xl md:text-4xl mb-4">Wig Guide</h1>
          <p className="text-neutral-700 mb-12">A calm guide to choosing the right piece.</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {["Silk Top","Lace Front","Lace Top","Hand-Tied","Band Falls"].map((t,i)=> (
              <div key={i} className="mw-card p-4 flex flex-col gap-3">
                <div className="aspect-square bg-[var(--mw-champagne)] rounded" />
                <div className="font-medium" style={{fontFamily:'Playfair Display'}}>{t}</div>
                <p className="text-sm text-neutral-600">Quiet, natural beauty.</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded border mb-12" style={{borderColor:'var(--mw-taupe)'}}>
            <table className="w-full text-sm">
              <thead className="bg-[var(--mw-champagne)]/60">
                <tr>
                  {['Cap','Realism','Comfort','Maintenance'].map((h,i)=> (<th key={i} className="p-3 text-left">{h}</th>))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Silk Top','High','High','Low'],
                  ['Lace Front','Very High','Medium','Medium'],
                  ['Hand-Tied','High','Very High','Low'],
                ].map((r, i)=> (
                  <tr key={i} className="border-t" style={{borderColor:'var(--mw-taupe)'}}>
                    {r.map((c,j)=> (<td key={j} className="p-3">{c}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {[{t:'How to choose',d:'Consider lifestyle, cap comfort, and desired styling.'},
              {t:'Color selection basics',d:'Match undertone and softly blend with your features.'},
              {t:'Care instructions',d:'Gentle wash, air dry, protect from heat.'}].map((s,i)=> (
              <div key={i}>
                <h2 className="text-xl mb-2" style={{fontFamily:'Playfair Display'}}>{s.t}</h2>
                <p className="text-neutral-700">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 max-w-3xl">
            <h2 className="text-2xl" style={{fontFamily:'Playfair Display'}}>FAQ</h2>
            {[['Can I heat style?','Yes, gently and sparingly—100% human hair.'],['How long do they last?','With proper care, years.'],['What size do I need?','We’ll guide you during your consultation.']].map((f,i)=> (
              <div key={i} className="border rounded p-4" style={{borderColor:'var(--mw-taupe)'}}>
                <div className="font-medium" style={{fontFamily:'Playfair Display'}}>{f[0]}</div>
                <p className="text-neutral-700 mt-1">{f[1]}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/booking" className="mw-button">Book a Consultation</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
