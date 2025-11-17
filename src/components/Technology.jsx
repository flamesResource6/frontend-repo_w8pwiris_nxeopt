import { motion } from 'framer-motion'
import { Cpu, BatteryCharging, Activity } from 'lucide-react'

const tech = [
  { icon: Cpu, title: 'Neural Ride', desc: 'An adaptive control stack senses, predicts, and optimizes chassis dynamics in real‑time.' },
  { icon: BatteryCharging, title: 'Hybrid Vectoring', desc: 'Torque split across axles and wheels with millisecond precision for unreal traction.' },
  { icon: Activity, title: 'Telem Actuation', desc: 'Smart dampers, brake‑by‑wire, and aero servos harmonized at 1000Hz.' },
]

export default function Technology() {
  return (
    <section id="technology" className="relative z-10 bg-[#070812] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Technology, Invisible
        </motion.h2>
        <p className="mt-4 text-white/70 max-w-2xl">
          Every system fades into the background—leaving only intent and response.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tech.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl shadow-black/30"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/30 border border-white/10 text-white flex items-center justify-center">
                <Icon size={22} />
              </div>
              <div className="mt-6 text-white text-xl font-semibold">{title}</div>
              <div className="mt-2 text-white/70 text-sm">{desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
