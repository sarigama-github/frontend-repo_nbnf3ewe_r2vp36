import Layout from '../components/Layout'

const schedulerUrl = import.meta.env.VITE_BOOKING_URL || 'https://cal.com/your-brand/consultation'

export default function Booking(){
  return (
    <Layout>
      <section className="mw-section">
        <div className="mw-container max-w-4xl">
          <h1 className="text-3xl md:text-4xl mb-4">Book a Consultation</h1>
          <p className="text-neutral-700 mb-8">Choose a time that works for you. A calm, private experience.</p>
          <div className="mw-card p-2">
            <iframe title="Booking" src={schedulerUrl} className="w-full" style={{minHeight: '700px'}}/>
          </div>
        </div>
      </section>
    </Layout>
  )
}
