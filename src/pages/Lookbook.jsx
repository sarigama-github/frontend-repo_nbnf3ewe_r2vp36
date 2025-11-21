import Layout from '../components/Layout'

export default function Lookbook(){
  return (
    <Layout>
      <section className="mw-section">
        <div className="mw-container">
          <h1 className="text-3xl md:text-4xl mb-4">Lookbook</h1>
          <div className="flex gap-3 mb-8 text-sm">
            {['All','Blonde','Brunette','Black','Short','Long','Silk Top','Lace Front','Hand-Tied'].map((f,i)=> (
              <button key={i} className="mw-button">{f}</button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({length:9}).map((_,i)=> (
              <figure key={i} className="mw-card overflow-hidden">
                <div className="aspect-[4/5] bg-[var(--mw-champagne)]" />
                <figcaption className="p-3 text-sm text-neutral-600">Minimal caption</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
