import { useEffect, useState } from 'react'

export default function Test() {
  const [backend, setBackend] = useState(null)

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL
    if (!base) return setBackend('VITE_BACKEND_URL not set')
    fetch(`${base}/test`).then(r => r.json()).then(setBackend).catch(() => setBackend('Error'))
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-2xl font-bold">Connectivity Test</h1>
      <pre className="mt-4 p-4 bg-white/5 border border-white/10 rounded-xl">{JSON.stringify(backend, null, 2)}</pre>
    </div>
  )
}
