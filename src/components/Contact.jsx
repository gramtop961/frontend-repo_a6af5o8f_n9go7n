import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Let’s work together</h2>
        <p className="mt-2 text-blue-200/80">Tell me about your project and timeline. I’ll reply within 24 hours.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
            <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          </div>
          <input name="budget" placeholder="Budget (optional)" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <textarea name="message" required rows={5} placeholder="Project details" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <button disabled={status==='loading'} className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:brightness-110 transition">
            {status==='loading' ? 'Sending…' : 'Send inquiry'}
          </button>
          {status==='success' && <p className="text-sm text-green-300">Thanks! I’ll be in touch soon.</p>}
          {status==='error' && <p className="text-sm text-red-300">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}
