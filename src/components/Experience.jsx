import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experienceSection, timeline } from "../data.js";
import { EASE, Eyebrow, SplitHeading } from "./ui/Reveal.jsx";

function TimelineEntry({ entry, i }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
      className="relative grid gap-2 pb-14 pl-10 sm:grid-cols-[210px_1fr] sm:gap-10 sm:pl-14"
    >
      {/* node */}
      <span className="absolute left-[-5px] top-[7px] h-[11px] w-[11px] rounded-full border-2 border-gold-400 bg-ink-950 shadow-[0_0_12px_rgba(223,180,85,0.55)] sm:left-[-6px]" />

      <p className="pt-1 font-mono text-[10px] tracking-[0.25em] text-gold-400/90 sm:pt-[9px] sm:text-right">
        {entry.period}
      </p>
      <div>
        <h3 className="font-display text-[clamp(1.35rem,2.4vw,2.1rem)] uppercase leading-tight text-cream">
          {entry.title}
        </h3>
        <p className="mt-1.5 font-mono text-[10px] tracking-[0.28em] text-gold-200/75">
          {entry.org}
        </p>
        <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-mute">
          {entry.description}
        </p>
      </div>
    </motion.li>
  );
}

export default function Experience() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[8%] top-[20%] h-[420px] w-[380px] rounded-full bg-gold-600/8 blur-[140px]" />
        <div className="bg-grain absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Eyebrow index={experienceSection.index} label={experienceSection.label} />
        <SplitHeading
          lines={experienceSection.heading}
          className="mt-6 text-[clamp(2.4rem,5.2vw,4.6rem)]"
        />

        <div ref={listRef} className="relative mt-16 sm:ml-6">
          {/* rail */}
          <span className="absolute bottom-2 left-0 top-2 w-px bg-white/8" />
          <motion.span
            style={{ scaleY: lineScale }}
            className="absolute bottom-2 left-0 top-2 w-px origin-top bg-gradient-to-b from-gold-200 via-gold-500 to-gold-700 shadow-[0_0_14px_rgba(223,180,85,0.5)]"
          />
          <ul>
            {timeline.map((entry, i) => (
              <TimelineEntry key={entry.title} entry={entry} i={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
