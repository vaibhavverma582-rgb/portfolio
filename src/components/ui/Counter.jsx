import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { EASE } from "./Reveal.jsx";

export default function Counter({ to, suffix = "", duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration, ease: EASE });
    return () => controls.stop();
  }, [inView, to, duration, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
