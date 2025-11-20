export default function Services() {
  const services = [
    { title: 'Product Design', desc: 'Interfaces that balance clarity, motion, and accessibility.' },
    { title: 'Front‑end Engineering', desc: 'Production‑ready React with performance at the core.' },
    { title: 'Design Systems', desc: 'Scalable components, tokens, and documentation.' },
  ]

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Services</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-slate-700/90 dark:text-slate-300/90 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
