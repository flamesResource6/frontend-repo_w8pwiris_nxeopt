export default function Footer() {
  return (
    <footer className="relative z-10 bg-black py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/70 text-sm">© {new Date().getFullYear()} Apex Motorworks. All rights reserved.</div>
        <div className="flex items-center gap-6 text-white/60 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
