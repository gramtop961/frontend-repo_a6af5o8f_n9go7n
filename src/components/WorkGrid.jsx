export default function WorkGrid() {
  const projects = [
    { id: 1, title: 'Ad Spot — Streetwear', tags: ['Editing', 'Color'], thumb: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, title: 'Product Teaser — Tech', tags: ['Motion', 'SFX'], thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop' },
    { id: 3, title: 'Event Recap — Festival', tags: ['Cuts', 'Grade'], thumb: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop' },
    { id: 4, title: 'Creator Short — Lifestyle', tags: ['Shortform', 'Sound'], thumb: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop' },
    { id: 5, title: 'Brand Film — Cosmetics', tags: ['Narrative', 'Color'], thumb: 'https://images.unsplash.com/photo-1621784562772-6a6e99d0f0d2?q=80&w=1200&auto=format&fit=crop' },
    { id: 6, title: 'YouTube — Tech Review', tags: ['Pacing', 'Graphics'], thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <section id="work" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Selected Work</h2>
          <a href="#contact" className="text-sm font-semibold text-cyan-300 hover:text-white">Request full portfolio →</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.id} href="#contact" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={p.thumb} alt="" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4">
                <p className="font-semibold text-white">{p.title}</p>
                <p className="text-xs text-blue-200/80">{p.tags.join(' • ')}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
