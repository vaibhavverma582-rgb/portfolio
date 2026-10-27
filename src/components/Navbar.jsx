import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, profile } from "../data.js";
import { EASE } from "./ui/Reveal.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "border-b border-gold-500/10 bg-ink-950/80 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8">
          <a href="#home" className="font-display text-xl tracking-wide text-cream">
            {profile.logo}
            <span className="text-gold-400">.</span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`font-mono text-[11px] tracking-[0.22em] transition-colors duration-300 ${
                    active === l.id ? "text-gold-300" : "text-mute hover:text-cream"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-sm border border-gold-500/35 px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-gold-200 transition-all duration-300 hover:bg-gold-400 hover:text-ink-950 sm:inline-flex"
            >
              LET'S TALK <span className="text-gold-400">↗</span>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid h-10 w-10 place-items-center rounded-sm border border-white/10 text-cream lg:hidden"
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-px w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
                />
                <span
                  className={`block h-px w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink-950/95 px-8 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-6">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.45, ease: EASE }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl uppercase text-cream transition-colors hover:text-gold-300"
                  >
                    <span className="mr-4 font-mono text-xs text-gold-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
