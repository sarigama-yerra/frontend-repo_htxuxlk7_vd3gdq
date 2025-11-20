export default function Testimonials() {
  const quotes = [
    { name: 'Maya P.', role: 'Founder, Prism', text: 'Delivered a spotless experience. Thoughtful details and reliable execution.' },
    { name: 'Jon S.', role: 'CTO, Optic AI', text: 'A rare mix of design sensitivity and engineering rigor. Highly recommended.' },
    { name: 'Elena V.', role: 'PM, Aperture', text: 'Communication was seamless and timelines were met without compromise.' },
  ]

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Testimonials</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/70 dark:bg-slate-800/60 backdrop-blur">
              <blockquote className="text-slate-800 dark:text-slate-200">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-600 dark:text-slate-400">{q.name} • {q.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
