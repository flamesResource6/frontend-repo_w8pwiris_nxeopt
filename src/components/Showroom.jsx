import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

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

          <div className="mt-10 relative rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/40 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10">
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.06),transparent_60%)]" />
            <div className="absolute inset-0 mix-blend-screen opacity-30 bg-[radial-gradient(circle_at_30%_20%,#22d3ee,transparent_40%),radial-gradient(circle_at_70%_80%,#e879f9,transparent_40%)]" />
            <div className="aspect-[21/9] relative">
              <div className="absolute inset-0">
                <Spline scene={altScene} />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060f]/40 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
