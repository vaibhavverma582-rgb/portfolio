import { motion } from "motion/react";
import { skillGroups, skillsSection } from "../data.js";
import { EASE, Eyebrow, SplitHeading } from "./ui/Reveal.jsx";

function SkillCard({ group, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay: 0.1 + i * 0.1, ease: EASE }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-gold-500/20 bg-gradient-to-b from-ink-800 to-ink-900 p-7 transition-colors duration-300 hover:border-gold-500/45 sm:p-9 ${group.span}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(223,180,85,0.05),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="absolute right-5 top-5 rounded-sm border border-gold-500/25 px-2.5 py-1 font-mono text-[8.5px] tracking-[0.22em] text-gold-400/80">
        {group.corner}
      </span>

      <p className="font-mono text-[9.5px] tracking-[0.3em] text-gold-400/90">{group.eyebrow}</p>
      <h3 className="mt-4 font-display text-[clamp(1.4rem,2.2vw,2rem)] uppercase leading-tight text-cream">
        {group.title}
      </h3>
      <p className="mt-4 max-w-md text-[13.5px] leading-relaxed text-mute">{group.description}</p>
      <div className="mt-auto flex flex-wrap gap-2.5 pt-7">
        {group.tags.map((t) => (
          <span
            key={t}
            className="rounded-sm border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[9.5px] tracking-[0.18em] text-mute transition-colors duration-300 group-hover:border-gold-500/25 group-hover:text-gold-100/80"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[20%] top-[30%] h-[380px] w-[520px] rounded-full bg-gold-600/7 blur-[150px]" />
        <div className="bg-grain absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Eyebrow index={skillsSection.index} label={skillsSection.label} />
        <SplitHeading
          lines={skillsSection.heading}
          className="mt-6 text-[clamp(2.4rem,5.2vw,4.6rem)]"
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {skillGroups.map((g, i) => (
            <SkillCard key={g.title} group={g} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
