import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Performance', href: '#performance' },
    { label: 'Design', href: '#design' },
    { label: 'Technology', href: '#technology' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl/50 bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="text-xl font-semibold tracking-widest text-white">
              APEX
              <span className="text-cyan-400">•</span>
              GT
              <span className="text-fuchsia-400">R</span>
            </a>
            <nav className="hidden md:flex items-center gap-10">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm uppercase tracking-widest text-white/80 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#preorder" className="text-sm rounded-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white hover:from-cyan-400 hover:to-fuchsia-400 transition-colors">
                Pre‑Order
              </a>
            </nav>
            <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-4">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="text-sm uppercase tracking-widest text-white/80 hover:text-white transition-colors">
                    {l.label}
                  </a>
                ))}
                <a href="#preorder" className="text-sm text-center rounded-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white">
                  Pre‑Order
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
