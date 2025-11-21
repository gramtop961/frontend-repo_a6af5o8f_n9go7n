export default function Services() {
  const services = [
    { title: 'Short-form Editing', desc: 'TikTok, Reels, Shorts with snappy pacing, captions, and hooks that retain.', price: 'From $300' },
    { title: 'Long-form Editing', desc: 'YouTube and documentaries with narrative structure, sound design, and color.', price: 'From $800' },
    { title: 'Commercial Spots', desc: 'Polished ads for brands and agencies. Motion graphics, SFX, licensed music.', price: 'From $1200' },
    { title: 'Color Grading', desc: 'Balanced, cinematic looks. Matching cameras, noise reduction, final delivery.', price: 'From $250' },
  ]
  return (
    <section id="services" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6">
              <p className="text-white font-semibold">{s.title}</p>
              <p className="mt-2 text-sm text-blue-200/80">{s.desc}</p>
              <p className="mt-4 text-sm font-semibold text-cyan-300">{s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
