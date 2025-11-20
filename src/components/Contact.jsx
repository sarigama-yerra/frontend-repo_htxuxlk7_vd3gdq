import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    setStatus({ type: 'loading', message: 'Sending…' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to send message')
      const data = await res.json()
      setStatus({ type: 'success', message: 'Message sent! I will get back to you shortly.' })
      e.currentTarget.reset()
      console.log(data)
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong' })
    }
  }

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Let’s build something</h2>
            <p className="mt-4 text-slate-700/90 dark:text-slate-300/90">Tell me about your project and timeline. I usually reply within 24 hours.</p>
            <div className="mt-8 rounded-2xl border border-black/10 dark:border-white/10 p-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Email: hello@example.com</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Location: Remote / Worldwide</p>
            </div>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur grid gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-slate-800/60 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-slate-800/60 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
              <input name="subject" required className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-slate-800/60 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-slate-800/60 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-transform">Send message</button>
            {status && (
              <p className={`text-sm ${status.type === 'success' ? 'text-green-600' : status.type === 'error' ? 'text-red-600' : 'text-slate-600'}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
