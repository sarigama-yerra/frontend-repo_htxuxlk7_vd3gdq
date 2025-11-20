export default function Projects() {
  const items = [
    { title: 'Lens Studio', tag: 'Web App', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Focus Grid', tag: 'Design System', img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Prism CMS', tag: 'Dashboard', img: 'https://images.unsplash.com/photo-1491446559770-3fc03a481cdf?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Shutter Shop', tag: 'E‑commerce', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Aperture Studio', tag: 'Portfolio', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Optic AI', tag: 'AI Tool', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Projects</h2>
          <a href="#contact" className="text-sm font-semibold text-blue-600 hover:text-blue-500">Let’s work together →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <article key={idx} className="group overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-slate-800/60 backdrop-blur">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">{item.tag}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
