export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">About</h2>
          <p className="mt-4 text-blue-100/90 leading-relaxed">
            I'm a video editor focused on pacing, story, and sound. I've cut for brands, artists, and agencies — from fast social to narrative spots. I work in Premiere Pro, Davinci Resolve, and After Effects, with a workflow that's organized and client-friendly.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-blue-200/90">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Premiere Pro</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">DaVinci Resolve</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">After Effects</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Sound Design</div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkaW98ZW58MHwwfHx8MTc2MzcwNTU3N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Studio" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
