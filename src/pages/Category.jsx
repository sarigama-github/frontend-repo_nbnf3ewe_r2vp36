import Layout from '../components/Layout'
import { useParams, Link } from 'react-router-dom'

const sampleProducts = Array.from({length:8}).map((_,i)=> ({
  id: i+1,
  name: `Maya ${i+1}`,
  tags: ['100% human hair','Lightweight','Natural line'],
}))

export default function Category(){
  const { slug } = useParams()
  const title = slug.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' ') + ' Wigs'
  return (
    <Layout>
      <section className="mw-section">
        <div className="mw-container">
          <h1 className="text-3xl md:text-4xl mb-3">{title}</h1>
          <p className="text-neutral-700 mb-12">Soft, minimal pieces crafted with care.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sampleProducts.map(p => (
              <div key={p.id} className="mw-card p-4 flex flex-col gap-3">
                <div className="aspect-[4/5] bg-[var(--mw-champagne)] rounded" />
                <div className="flex items-center justify-between">
                  <div className="" style={{fontFamily:'Playfair Display'}}>{p.name}</div>
                  <Link to={`/product/${p.id}`} className="text-xs underline">View</Link>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-neutral-600">
                  {p.tags.map((t, i)=> (<span key={i}>{t}</span>))}
                </div>
                <div className="flex gap-2 pt-2">
                  <button className="mw-button">Request Pricing</button>
                  <button className="mw-button">Inquire About This Wig</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/booking" className="mw-button">Not sure where to start? Book a consultation.</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
