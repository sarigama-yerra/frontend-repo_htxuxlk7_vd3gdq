import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-6 flex items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/70 dark:bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-900 dark:text-white shadow">
              Modern • Minimal • Creative
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              I craft clean, modern experiences
            </h1>
            <p className="mt-5 text-lg text-slate-700/90 dark:text-slate-200/90">
              Designer turned developer focused on photography-inspired, technology-forward interfaces.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:-translate-y-0.5 transition-transform">
                View projects
              </a>
              <a href="#contact" className="inline-flex items-center rounded-xl bg-white/80 dark:bg-slate-900/60 backdrop-blur px-5 py-3 text-sm font-semibold text-slate-900 dark:text-white border border-black/10 dark:border-white/10 hover:-translate-y-0.5 transition-transform">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white dark:from-slate-900/60 dark:to-slate-900" />
    </section>
  )
}
