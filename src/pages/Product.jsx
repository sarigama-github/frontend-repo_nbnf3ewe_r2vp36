import Layout from '../components/Layout'
import { Link, useParams } from 'react-router-dom'

export default function Product(){
  const { id } = useParams()
  return (
    <Layout>
      <section className="mw-section">
        <div className="mw-container grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <div className="mw-card aspect-[4/5] bg-[var(--mw-champagne)]"/>
            <div className="grid grid-cols-4 gap-2">
              {[1,2,3,4].map(i => (<div key={i} className="aspect-square bg-[var(--mw-champagne)] rounded border" style={{borderColor:'var(--mw-taupe)'}}/>))}
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl">Maya — Silk Top, 18 inches</h1>
            <p className="text-neutral-700">A softly layered silk top piece with a natural hairline and lightweight movement.</p>
            <div className="overflow-hidden rounded border" style={{borderColor:'var(--mw-taupe)'}}>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Cap Type','Silk Top'],
                    ['Length','18 inches'],
                    ['Color','Warm brunette'],
                    ['Density','Medium-light'],
                    ['Size','Small'],
                    ['Hair Origin','European']
                  ].map((row,i)=> (
                    <tr key={i} className="border-b last:border-none" style={{borderColor:'var(--mw-taupe)'}}>
                      <td className="p-3 text-neutral-600 w-40">{row[0]}</td>
                      <td className="p-3">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="mw-button">Request Pricing</button>
              <button className="mw-button">Inquire About This Wig</button>
              <Link to="/booking" className="mw-button">Book a Consultation</Link>
            </div>
            <div className="space-y-10 pt-4">
              {[{t:'Description',d:'Minimalist, softly layered silhouette designed for everyday elegance.'},
                {t:'Features',d:'Hand-tied silk top • Natural hairline • Lightweight feel'},
                {t:'Ideal For',d:'Women seeking a natural, effortless look with soft movement.'},
                {t:'Cap Construction Details',d:'Silk top with closed wefting for comfort and breathability.'},
                {t:'Care Instructions',d:'Gentle wash, air-dry on a stand, avoid excessive heat.'},
                {t:'Related Styles',d:'Maya Petite • Aria • Elise'}].map((s,i)=> (
                <section key={i}>
                  <h2 className="text-2xl mb-2" style={{fontFamily:'Playfair Display'}}>{s.t}</h2>
                  <p className="text-neutral-700">{s.d}</p>
                </section>
              ))}
              <section>
                <h2 className="text-2xl mb-2" style={{fontFamily:'Playfair Display'}}>Inquiry Form</h2>
                <form className="grid gap-3 max-w-lg">
                  <input className="border p-3 rounded" style={{borderColor:'var(--mw-taupe)'}} placeholder="Name"/>
                  <input className="border p-3 rounded" style={{borderColor:'var(--mw-taupe)'}} placeholder="Email"/>
                  <textarea className="border p-3 rounded" style={{borderColor:'var(--mw-taupe)'}} rows="4" placeholder="Tell us what you’re looking for"/>
                  <button className="mw-button w-max">Inquire About This Wig</button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
