import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function SplineCanvas({ scene, className = '', aspect = '16/9', rounded = 'rounded-3xl' }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    setLoaded(false)
    setError(null)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    // Show an error if nothing loads in 12s
    timeoutRef.current = setTimeout(() => {
      if (!loaded) setError('The 3D scene is taking too long to load. This can be due to network blocks or WebGL being unavailable.')
    }, 12000)
    return () => timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [scene])

  const onLoad = () => {
    setLoaded(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  const onError = (e) => {
    setError('Could not load the 3D scene.')
  }

  return (
    <div className={`relative overflow-hidden border border-white/10 shadow-2xl shadow-black/40 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 ${rounded} ${className}`}>
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 mix-blend-screen opacity-30 bg-[radial-gradient(circle_at_30%_20%,#22d3ee,transparent_40%),radial-gradient(circle_at_70%_80%,#e879f9,transparent_40%)]" />

      <div className={`aspect-[${aspect}] relative`}>
        <div className="absolute inset-0">
          <Spline scene={scene} onLoad={onLoad} onError={onError} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {!loaded && !error && (
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-cyan-400 animate-spin" />
              <p className="text-sm text-white/70">Loading 3D experience…</p>
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 grid place-items-center px-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 max-w-md text-center">
              <p className="text-white font-semibold">{error}</p>
              <ul className="text-white/70 text-xs mt-3 space-y-1 text-left list-disc list-inside">
                <li>Try a hard refresh (Shift + Reload).</li>
                <li>Disable ad/script blockers for this page.</li>
                <li>Ensure your browser supports WebGL.</li>
              </ul>
              <button onClick={() => { setError(null); setLoaded(false) }} className="mt-4 text-sm rounded-full px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors text-white">Retry</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
