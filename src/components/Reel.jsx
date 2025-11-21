export default function Reel() {
  return (
    <section id="reel" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Showreel</h2>
          <p className="text-blue-200/80 text-sm">Short, punchy, and to the point</p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&color=white"
              title="Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
