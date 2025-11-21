import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    // Dynamically load Spline viewer to keep bundle small
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.7/build/spline-viewer.js'
    script.type = 'module'
    script.onload = () => {
      // no-op; component renders <spline-viewer>
    }
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Spline Cover */}
        <spline-viewer
          ref={ref}
          url="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/30 to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-blue-100/80">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Available for freelance • Motion, Ads, Social
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Cinematic video editing for brands, creators, and agencies
          </h1>
          <p className="mt-5 text-blue-100/90 text-lg leading-relaxed">
            I turn raw footage into scroll-stopping stories. Fast turnarounds, clean cuts, tasteful sound design, and color that pops.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:brightness-110 transition">
              Get a quote
            </a>
            <a href="#reel" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 hover:bg-white/10">
              Watch reel
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
