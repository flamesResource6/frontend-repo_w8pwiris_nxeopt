import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const features = [
  {
    title: 'Monocoque Core',
    text: 'Single‑piece carbon‑titanium tub with integrated battery channels for optimal rigidity and crash safety.',
  },
  {
    title: 'Active Aero',
    text: 'Adaptive front splitters, rear wing, and underbody vanes orchestrated by neural control at 1000Hz.',
  },
  {
    title: 'Thermal Symphony',
    text: 'Phase‑change cooling, venturi heat extraction, and nano‑ceramic coatings for peak repeatability.',
  },
]

export default function Design() {
  const designScene = import.meta.env.VITE_SPLINE_DESIGN_URL ||
    'https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode'

  return (
    <section id="design" className="relative z-10 bg-[#05060f] py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Design Without Compromise</h2>
            <p className="mt-4 text-white/70 max-w-xl">
              Sculpted by airflow. Every surface, edge, and shadow serves performance. Materials shimmer with a liquid‑metal sheen under cinematic light.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="text-white text-lg font-semibold">{f.title}</div>
                  <div className="text-white/70 text-sm mt-2">{f.text}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 shadow-2xl shadow-black/40 overflow-hidden">
              {/* Glows and light play */}
              <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.06),transparent_60%)]" />
              <div className="absolute inset-0 mix-blend-screen opacity-30 bg-[radial-gradient(circle_at_30%_20%,#22d3ee,transparent_40%),radial-gradient(circle_at_70%_80%,#e879f9,transparent_40%)]" />

              {/* 3D Car Model */}
              <div className="absolute inset-0">
                <Spline scene={designScene} />
              </div>

              {/* Subtle overlay for readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060f]/40 via-transparent to-transparent" />
            </div>
            <p className="mt-3 text-xs text-white/50">
              Tip: Provide your own Spline scene URL via VITE_SPLINE_DESIGN_URL to showcase your exact model.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
