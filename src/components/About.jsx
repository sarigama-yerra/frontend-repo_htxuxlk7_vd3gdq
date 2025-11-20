export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">About</h2>
            <p className="mt-6 text-slate-700/90 dark:text-slate-300/90 leading-relaxed">
              I’m a multidisciplinary creator blending photography aesthetics with modern web technology. My work focuses on clarity, restraint, and delightful details—delivering minimal interfaces that feel alive.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
                <p className="text-3xl font-bold text-slate-900 dark:text-white">8+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">years creating</p>
              </div>
              <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
                <p className="text-3xl font-bold text-slate-900 dark:text-white">40+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">projects shipped</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
            <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <li>• Product design & front-end engineering</li>
              <li>• Performance-first philosophy</li>
              <li>• Accessibility and motion design</li>
              <li>• Systems thinking & component libraries</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
