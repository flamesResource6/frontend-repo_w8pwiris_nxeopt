import { motion } from 'framer-motion'
import SplineCanvas from './SplineCanvas'

export default function Showroom() {
  const altScene = import.meta.env.VITE_SPLINE_ALT_URL ||
    'https://prod.spline.design/8GQH2r0GcGQxXHzf/scene.splinecode'

  return (
    <section id="showroom" className="relative z-10 bg-[#05060f] py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Showroom</h2>
              <p className="mt-3 text-white/70 max-w-2xl">Explore an alternate spec — different aero, stance, and lighting tuned for night circuits.</p>
            </div>
            <a href="/model" className="rounded-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-sm">Open Full View</a>
          </div>

          <div className="mt-10">
            <SplineCanvas scene={altScene} aspect="21/9" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
