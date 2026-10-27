import { motion } from "motion/react";
import { about, profile } from "../data.js";
import { EASE, Eyebrow, Reveal, SplitHeading } from "./ui/Reveal.jsx";
import Counter from "./ui/Counter.jsx";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      {/* warm wash behind the section, like the reference's about glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-8%] top-[16%] h-[460px] w-[460px] rounded-full bg-gold-600/10 blur-[140px]" />
        <div className="absolute bottom-[4%] right-[10%] h-[300px] w-[380px] rounded-full bg-gold-500/6 blur-[120px]" />
        <div className="bg-grain absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Eyebrow index={about.index} label={about.label} />
          <SplitHeading
            lines={about.heading}
            className="mt-6 text-[clamp(2.4rem,5.2vw,4.6rem)]"
          />

          <Reveal delay={0.25}>
            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-mute">
              {about.body.map((part, i) =>
                typeof part === "string" ? (
                  part
                ) : (
                  <span key={i} className="font-semibold text-gold-200">
                    {part.text}
                  </span>
                )
              )}
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {about.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: EASE }}
              >
                <p
                  className={`font-display text-4xl tracking-wide ${s.gold ? "text-gold-grad" : "text-cream"}`}
                >
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 whitespace-pre-line font-mono text-[9px] leading-relaxed tracking-[0.25em] text-dim">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* gold-framed portrait */}
        <Reveal delay={0.2} className="relative mx-auto w-full max-w-[400px]">
          <div className="relative">
            {/* offset frame */}
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, x: 14, y: 14 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
              className="absolute -right-3 -top-3 h-full w-full border border-gold-500/45"
            />
            <div className="relative overflow-hidden border border-gold-500/60 shadow-[0_0_60px_rgba(200,150,50,0.12)]">
              <motion.img
                src="/portrait-dark.jpg"
                alt={`${profile.name} portrait`}
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
                className="h-full w-full object-cover"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
            </div>
            {/* corner brackets */}
            <span className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-gold-400" />
            <span className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-gold-400" />
          </div>
          <p className="mt-4 text-right font-script text-3xl text-gold-300/90">Manish D.</p>
        </Reveal>
      </div>
    </section>
  );
}
