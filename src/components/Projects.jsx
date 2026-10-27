import { motion } from "motion/react";
import { projects, projectsSection } from "../data.js";
import { EASE, Eyebrow, Reveal, SplitHeading } from "./ui/Reveal.jsx";

function ProjectCard({ project, i, total }) {
  return (
    <div
      className="sticky"
      style={{ top: `calc(5.5rem + ${i} * 1.9rem)`, zIndex: i + 1 }}
    >
      <motion.article
        initial={{ opacity: 0, y: 70, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative overflow-hidden rounded-2xl border border-gold-500/25 bg-gradient-to-b from-ink-800 via-ink-850 to-ink-900 shadow-[0_-20px_60px_rgba(0,0,0,0.55)]"
        style={{ marginBottom: i === total - 1 ? 0 : "1.9rem" }}
      >
        {/* faint inner glow + grain */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(223,180,85,0.06),transparent_60%)]" />
        <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.05]" />
        {/* index watermark */}
        <span className="pointer-events-none absolute -right-4 -top-8 select-none font-display text-[10rem] leading-none text-cream/[0.04]">
          {project.no}
        </span>

        <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:p-14">
          {/* left: identity */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-gold-400">
              {project.no} <span className="mx-1 text-dim">//</span>{" "}
              <span className="text-gold-200/80">{project.eyebrow}</span>
            </p>
            <h3 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,3.4rem)] uppercase leading-[0.98] text-cream [text-shadow:0_0_28px_rgba(243,221,154,0.18)]">
              {project.title}
            </h3>
            <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-mute">
              {project.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-sm border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[9.5px] tracking-[0.18em] text-mute"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* right: architecture metrics */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-dim">
                <span className="text-gold-500/80">//</span> ARCHITECTURE METRICS
              </p>
              <div className="mt-4 space-y-2.5">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center justify-between gap-4 rounded-md border border-white/8 bg-black/40 px-4 py-3"
                  >
                    <span className="font-mono text-[9.5px] tracking-[0.25em] text-dim">
                      {m.label}
                    </span>
                    <span className="text-right font-mono text-[11px] tracking-wide text-gold-200">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-md border border-gold-500/35 px-6 py-3.5 font-mono text-[10.5px] tracking-[0.25em] text-gold-200 transition-all duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-ink-950"
            >
              VIEW ON GITHUB
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-[-6%] top-[8%] h-[420px] w-[420px] rounded-full bg-gold-600/8 blur-[150px]" />
        <div className="bg-grain absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <Eyebrow index={projectsSection.index} label={projectsSection.label} />
            <SplitHeading
              lines={projectsSection.heading}
              className="mt-6 text-[clamp(2.4rem,5.2vw,4.6rem)]"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-[13px] leading-relaxed text-dim lg:ml-auto lg:text-left">
              {projectsSection.note}
            </p>
          </Reveal>
        </div>

        {/* sticky stacking deck */}
        <div className="mt-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.no} project={p} i={i} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
