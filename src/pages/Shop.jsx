import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const cats = [
  { slug:'silk-top', title:'Silk Top', desc:'Seamless realism with multi-directional parting.' },
  { slug:'lace-front', title:'Lace Front', desc:'Soft lace hairline for a natural finish.' },
  { slug:'lace-top', title:'Lace Top', desc:'Breathable, lightweight coverage.' },
  { slug:'hand-tied', title:'Hand-Tied', desc:'Ultra-comfortable, premium construction.' },
  { slug:'band-falls', title:'Band Falls', desc:'Effortless throw-on coverage.' },
  { slug:'new-arrivals', title:'New Arrivals', desc:'Freshly curated pieces, limited availability.' },
]

export default function Shop(){
  return (
    <Layout>
      <section className="mw-section">
        <div className="mw-container">
          <h1 className="text-3xl md:text-4xl mb-4">Explore Our Collections</h1>
          <p className="text-neutral-700 mb-12">100% human hair, curated with care.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cats.map(c => (
              <Link key={c.slug} to={`/category/${c.slug}`} className="mw-card p-6 flex flex-col gap-4">
                <div className="aspect-[4/5] bg-[var(--mw-champagne)] rounded"></div>
                <div className="text-xl" style={{fontFamily:'Playfair Display'}}>{c.title}</div>
                <p className="text-sm text-neutral-600">{c.desc}</p>
                <span className="mw-button w-max mt-auto">Shop {c.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
