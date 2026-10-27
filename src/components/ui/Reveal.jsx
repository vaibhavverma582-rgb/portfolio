import { motion } from "motion/react";

export const EASE = [0.21, 0.47, 0.32, 0.98];

export function Reveal({ children, delay = 0, y = 28, className = "", once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Gold mono eyebrow used by every numbered section: `01 / ABOUT ME` */
export function Eyebrow({ index, label, className = "" }) {
  return (
    <Reveal className={className}>
      <p className="font-mono text-[11px] tracking-[0.35em] text-gold-400 uppercase">
        {index} <span className="mx-1 text-dim">/</span>{" "}
        <span className="text-gold-200/90">{label}</span>
        <span className="mt-3 block h-px w-14 bg-gradient-to-r from-gold-500/70 to-transparent" />
      </p>
    </Reveal>
  );
}

/** Two-line display heading where the second line carries the gold gradient.
 *  The whileInView trigger must live on the un-clipped heading itself: an
 *  inner span translated y:112% is fully clipped by its overflow-hidden
 *  wrapper, so IntersectionObserver reports it as never intersecting. */
export function SplitHeading({ lines, className = "", as: Tag = "h2" }) {
  const MotionTag = motion[Tag] ?? motion.h2;
  return (
    <MotionTag
      className={`font-display uppercase leading-[0.98] ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={`inline-block ${line.gold ? "text-gold-grad" : "text-cream"}`}
            variants={{ hidden: { y: "112%" }, visible: { y: 0 } }}
            transition={{ duration: 0.85, delay: 0.12 + i * 0.14, ease: EASE }}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
