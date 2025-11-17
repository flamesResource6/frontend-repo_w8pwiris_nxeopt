import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function ModelPage() {
  const modelScene = import.meta.env.VITE_SPLINE_MODEL_URL ||
    'https://prod.spline.design/8GQH2r0GcGQxXHzf/scene.splinecode'

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold tracking-widest">APEX<span className="text-cyan-400">•</span>GT<span className="text-fuchsia-400">R</span></a>
          <a href="/" className="text-sm rounded-full px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors">Back</a>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-6 py-10">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Apex GT-R — Track Spec
        </motion.h1>
        <p className="mt-3 text-white/70 max-w-3xl">A deeper look at the aero, chassis balance, and cooling channels. Interact with the model below.</p>

        <div className="mt-8 relative rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/40 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10">
          <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.06),transparent_60%)]" />
          <div className="absolute inset-0 mix-blend-screen opacity-30 bg-[radial-gradient(circle_at_30%_20%,#22d3ee,transparent_40%),radial-gradient(circle_at_70%_80%,#e879f9,transparent_40%)]" />
          <div className="aspect-[16/9] relative">
            <div className="absolute inset-0">
              <Spline scene={modelScene} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {["Chassis balance","Cooling","Downforce"].map((t,i)=> (
            <div key={t} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-white font-semibold">{t}</div>
              <div className="text-white/70 text-sm mt-2">Detailed telemetry overlays and scene variants can be added here. Provide separate Spline URLs per trim.</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
