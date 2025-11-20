import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:bg-slate-900/60 border border-white/50 dark:border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Portfolio</a>
            <nav className="hidden md:flex items-center gap-6">
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-sm text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
            <button aria-label="Menu" className="md:hidden rounded-lg p-2 hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setOpen(!open)}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {links.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-800 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
