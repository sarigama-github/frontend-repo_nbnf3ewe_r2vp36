import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Hair Loss Support', to: '/hair-loss-support' },
  { label: 'Services', to: '/services' },
  { label: 'Wig Guide', to: '/wig-guide' },
  { label: 'Lookbook', to: '/lookbook' },
  { label: 'About', to: '/about' },
]

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="mw-container py-6 md:py-8 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl" style={{fontFamily:'Playfair Display'}}>Michelle Wigs</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} className={({isActive})=>`tracking-wide ${isActive? 'text-[var(--mw-espresso)]':'text-neutral-600'}`}>{n.label}</NavLink>
          ))}
          <Link to="/booking" className="mw-button">Book</Link>
        </nav>
      </header>
      <div className="mw-divider" />
      <main>{children}</main>
      <footer className="mw-section mw-subtle">
        <div className="mw-container grid grid-cols-2 md:grid-cols-5 gap-10 text-sm">
          {["Shop","Support","Services","Guide","Company"].map((col,i)=> (
            <div key={i} className="space-y-3">
              <h4 className="text-neutral-700" style={{fontFamily:'Playfair Display'}}>{col}</h4>
              <ul className="space-y-2 text-neutral-600">
                <li>Minimal. Natural. Beautiful.</li>
                <li>Crafted with care.</li>
                <li>100% human hair.</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="mw-container mt-12 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Michelle Wigs — Every wig, crafted with care.</div>
      </footer>
    </div>
  )
}
