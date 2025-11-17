import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  const scene = 'https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode'

  return (
    <section className="relative h-[90vh] md:h-[92vh] overflow-hidden bg-[#05060f]">
      <div className="absolute inset-0">
        <Spline scene={scene} />
      </div>

      <div className="relative z-10 h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 mix-blend-screen opacity-20 bg-[radial-gradient(circle_at_30%_20%,#22d3ee,transparent_40%),radial-gradient(circle_at_70%_80%,#e879f9,transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-end pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-7xl font-bold text-white drop-shadow-[0_8px_32px_rgba(34,211,238,0.25)]">
              Apex GT‑R
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              A hyper‑electric silhouette carved by air and light.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#design" className="rounded-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-sm">Explore Design</a>
              <a href="#performance" className="rounded-full px-6 py-3 bg-white/10 text-white text-sm hover:bg-white/20 transition-colors">See Performance</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
