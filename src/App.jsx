import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Category from './pages/Category'
import Product from './pages/Product'
import HairLossSupport from './pages/HairLossSupport'
import Services from './pages/Services'
import WigGuide from './pages/WigGuide'
import Lookbook from './pages/Lookbook'
import About from './pages/About'
import Booking from './pages/Booking'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/category/:slug" element={<Category />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/hair-loss-support" element={<HairLossSupport />} />
      <Route path="/services" element={<Services />} />
      <Route path="/wig-guide" element={<WigGuide />} />
      <Route path="/lookbook" element={<Lookbook />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  )
}
