import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Design from './components/Design'
import Technology from './components/Technology'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <Navbar />
      <Hero />
      <Stats />
      <Design />
      <Technology />
      <Footer />
    </div>
  )
}

export default App
