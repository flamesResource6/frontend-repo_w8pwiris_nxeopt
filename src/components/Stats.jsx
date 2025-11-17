import { motion } from 'framer-motion'
import { Gauge, Zap, Wind } from 'lucide-react'

const statItems = [
  { icon: Gauge, label: 'Top Speed', value: '420 km/h', note: 'Limited' },
  { icon: Zap, label: '0-100 km/h', value: '1.9 s', note: 'Launch Control' },
  { icon: Wind, label: 'Downforce', value: '1500 N', note: 'At 250 km/h' },
]

export default function Stats() {
  return (
    <section id="performance" className="relative z-10 bg-[#070812] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.05),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Performance, Unleashed
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-4 text-white/70 max-w-2xl"
        >
          Precision‑engineered components working in perfect harmony yield mind‑bending acceleration, stability, and efficiency.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {statItems.map(({ icon: Icon, label, value, note }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl shadow-black/30"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/30 border border-white/10 flex items-center justify-center text-white">
                  <Icon size={22} />
                </div>
                <span className="text-white/70 text-sm uppercase tracking-widest">{label}</span>
              </div>
              <div className="mt-6 text-4xl font-black text-white">{value}</div>
              <div className="mt-2 text-white/60 text-sm">{note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
