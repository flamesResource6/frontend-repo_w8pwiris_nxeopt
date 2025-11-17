import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#03040a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.08),transparent_60%),radial-gradient(ellipse_at_top_right,rgba(255,0,255,0.08),transparent_40%)]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/40">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white"
            >
              Apex Hyperion
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="mt-4 text-base md:text-lg text-white/80 max-w-2xl"
            >
              A pure expression of speed. Crafted from aerospace alloys with active aero, neural ride control, and a powertrain that redefines what a road car can do.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#performance" className="pointer-events-auto rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 transition-colors">
                Explore Performance
              </a>
              <a href="#design" className="pointer-events-auto rounded-full px-6 py-3 text-sm font-semibold text-white/90 border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                Exterior Design
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-10 z-10">
        <div className="h-10 w-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/70 animate-bounce">
          ↓
        </div>
      </div>
    </section>
  )
}
