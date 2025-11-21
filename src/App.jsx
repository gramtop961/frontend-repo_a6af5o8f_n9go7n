import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import Reel from './components/Reel'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <WorkGrid />
        <Reel />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-blue-200/70 text-sm flex flex-col sm:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Video Editor — All rights reserved.</p>
          <p>
            <a href="#top" className="hover:text-white">Back to top ↑</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
