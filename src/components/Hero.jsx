import { motion } from "motion/react";
import { hero, profile } from "../data.js";
import { EASE } from "./ui/Reveal.jsx";

const PARTICLES = [
  { left: "12%", top: "30%", size: 3, delay: 0, dur: 12 },
  { left: "22%", top: "62%", size: 2, delay: 2.2, dur: 15 },
  { left: "34%", top: "18%", size: 2.5, delay: 4.1, dur: 11 },
  { left: "45%", top: "48%", size: 2, delay: 1.3, dur: 17 },
  { left: "52%", top: "70%", size: 3, delay: 5.4, dur: 13 },
  { left: "60%", top: "26%", size: 2, delay: 3.2, dur: 14 },
  { left: "68%", top: "56%", size: 2.5, delay: 0.8, dur: 16 },
  { left: "74%", top: "38%", size: 3, delay: 2.9, dur: 12 },
  { left: "82%", top: "20%", size: 2, delay: 4.8, dur: 15 },
  { left: "88%", top: "64%", size: 2.5, delay: 1.7, dur: 13 },
  { left: "93%", top: "44%", size: 2, delay: 3.6, dur: 18 },
  { left: "40%", top: "82%", size: 2, delay: 5.1, dur: 14 },
];

function CircularBadge() {
  return (
    <div className="animate-spin-slow relative h-28 w-28">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <path id="badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <circle cx="50" cy="50" r="47" fill="none" stroke="rgba(223,180,85,0.28)" strokeWidth="0.75" />
        <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(223,180,85,0.16)" strokeWidth="0.75" />
        <text className="fill-gold-300" style={{ fontSize: 8.2, letterSpacing: 2.6, fontFamily: "Space Mono, monospace" }}>
          <textPath href="#badge-circle">FULL STACK · REACT · NODE ·</textPath>
        </text>
        <text x="50" y="56" textAnchor="middle" className="fill-gold-300" style={{ fontSize: 15, fontFamily: "Space Mono, monospace" }}>
          ↗
        </text>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col overflow-hidden">
      {/* ── cinematic backdrop ─────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* spotlight cone from top-right */}
        <div
          className="animate-pulse-soft absolute -top-[10%] right-[4%] h-[130%] w-[52%] origin-top rotate-[14deg]"
          style={{
            background:
              "linear-gradient(178deg, rgba(244,232,200,0.34) 0%, rgba(233,215,170,0.16) 34%, rgba(210,180,120,0.05) 62%, transparent 82%)",
            clipPath: "polygon(38% 0%, 62% 0%, 100% 100%, 0% 100%)",
            filter: "blur(22px)",
          }}
        />
        <div className="absolute right-[8%] top-[-6%] h-[36%] w-[26%] rounded-full bg-[#f6ecd2]/25 blur-[90px]" />
        {/* warm haze blobs */}
        <div className="absolute left-[8%] top-[52%] h-[420px] w-[420px] rounded-full bg-gold-600/10 blur-[130px]" />
        <div className="absolute bottom-[8%] right-[30%] h-[300px] w-[420px] rounded-full bg-gold-500/8 blur-[110px]" />
        {/* gold dust */}
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="animate-drift absolute rounded-full bg-gold-200"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              boxShadow: "0 0 8px 1px rgba(243,221,154,0.8)",
            }}
          />
        ))}
        {/* stage floor */}
        <div
          className="absolute inset-x-0 bottom-0 h-[22%]"
          style={{
            background:
              "radial-gradient(60% 120% at 62% 100%, rgba(190,175,145,0.30) 0%, rgba(120,110,90,0.12) 42%, transparent 72%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-200/25 to-transparent" />
        {/* vignette + grain */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_35%,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
        <div className="bg-grain absolute inset-0 opacity-[0.05]" />
      </div>

      {/* ── content ────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] flex-1 items-center gap-10 px-5 pb-40 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32">
        <div>
          <h1 className="font-display uppercase leading-[0.92] text-cream">
            {hero.lines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                <motion.span
                  className={`inline-block text-[clamp(3.4rem,9.5vw,8.6rem)] ${line.gold ? "text-gold-grad-anim" : ""}`}
                  initial={{ y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, delay: 0.35 + i * 0.14, ease: EASE }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
            className="mt-7 font-mono text-[11px] tracking-[0.3em] text-gold-200/90 sm:text-xs"
          >
            {hero.roles}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.02, ease: EASE }}
            className="mt-4 max-w-md text-[15px] leading-relaxed text-mute"
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.14, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 border border-gold-500/40 bg-gold-400/10 px-7 py-3.5 font-mono text-[11px] tracking-[0.22em] text-gold-100 transition-all duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-ink-950"
            >
              EXPLORE MY WORK
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 border border-white/12 px-7 py-3.5 font-mono text-[11px] tracking-[0.22em] text-mute transition-all duration-300 hover:border-white/30 hover:text-cream"
            >
              DOWNLOAD RESUME
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
          </motion.div>
        </div>

        {/* right side: portrait + creed (desktop) */}
        <div className="relative hidden h-full min-h-[560px] lg:block">
          <motion.img
            src="/portrait-cutout.png"
            alt={`${profile.name} — ${profile.role}`}
            initial={{ opacity: 0, y: 46 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.7, ease: EASE }}
            className="absolute bottom-0 right-[6%] h-[86%] max-h-[760px] w-auto object-contain object-bottom"
            style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.65)) drop-shadow(0 0 45px rgba(233,215,170,0.14))" }}
            draggable="false"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="absolute right-0 top-[30%] text-right"
          >
            {hero.creed.map((c) => (
              <p key={c} className="font-mono text-[10px] tracking-[0.3em] text-cream/80">
                {c}
              </p>
            ))}
            <p className="mt-2 rotate-[-7deg] font-script text-4xl text-gold-300">Manish</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 1.45, ease: EASE }}
            className="absolute bottom-[26%] right-[2%]"
          >
            <CircularBadge />
          </motion.div>
        </div>
      </div>

      {/* mobile portrait strip */}
      <div className="relative z-10 -mt-24 pb-10 lg:hidden">
        <motion.img
          src="/portrait-cutout.png"
          alt={`${profile.name} — ${profile.role}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          className="mx-auto h-[46vh] object-contain object-bottom"
          style={{ filter: "drop-shadow(0 22px 44px rgba(0,0,0,0.6))" }}
          draggable="false"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="-mt-2 rotate-[-5deg] text-center font-script text-3xl text-gold-300"
        >
          Manish
        </motion.p>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 left-5 z-10 hidden items-center gap-3 sm:left-8 md:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-dim">SCROLL</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold-400"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
