import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Reel", href: "#reel" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="group inline-flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 ring-2 ring-white/20 shadow-lg shadow-blue-500/30" />
              <div className="leading-tight">
                <p className="text-sm text-blue-200/80">Portfolio</p>
                <p className="text-base font-semibold text-white group-hover:text-blue-200 transition-colors">
                  Video Editor
                </p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-blue-100/80 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:brightness-110 transition"
              >
                Hire Me
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white/80 hover:bg-white/5"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-blue-100/90 rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white"
                >
                  Hire Me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
