import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { contactSection, profile } from "../data.js";
import { EASE, Eyebrow, Reveal, SplitHeading } from "./ui/Reveal.jsx";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="font-mono text-[9.5px] tracking-[0.3em] text-dim">{label}</span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 block font-mono text-[9px] tracking-[0.15em] text-red-400/90"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
    setSent(false);
  };

  const validate = () => {
    const er = {};
    if (values.name.trim().length < 2) er.name = "ERR // NAME REQUIRED (MIN 2 CHARS)";
    if (!EMAIL_RE.test(values.email.trim())) er.email = "ERR // VALID EMAIL REQUIRED";
    if (values.message.trim().length < 10) er.message = "ERR // MESSAGE TOO SHORT (MIN 10 CHARS)";
    return er;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length > 0) return;
    const subject = encodeURIComponent(`Portfolio signal — ${values.name.trim()}`);
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputCls =
    "mt-2 w-full rounded-sm border border-white/10 bg-black/45 px-4 py-3.5 font-mono text-[12px] tracking-wide text-cream placeholder:text-dim/70 outline-none transition-colors duration-300 focus:border-gold-400/70 focus:bg-black/60";

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-[-10%] left-[30%] h-[420px] w-[560px] rounded-full bg-gold-600/10 blur-[150px]" />
        <div className="bg-grain absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Eyebrow index={contactSection.index} label={contactSection.label} />
          <SplitHeading
            lines={contactSection.heading}
            className="mt-6 text-[clamp(2.6rem,5.6vw,5rem)]"
          />
          <Reveal delay={0.25}>
            <p className="mt-7 max-w-md text-[14.5px] leading-relaxed text-mute">
              {contactSection.body}
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center justify-between gap-6 border-b border-white/8 pb-4 transition-colors hover:border-gold-500/40"
              >
                <span className="font-mono text-[9.5px] tracking-[0.3em] text-dim">EMAIL</span>
                <span className="font-mono text-[12px] text-cream transition-colors group-hover:text-gold-200">
                  {profile.email}
                </span>
              </a>
              <a
                href={profile.phoneHref}
                className="group flex items-center justify-between gap-6 border-b border-white/8 pb-4 transition-colors hover:border-gold-500/40"
              >
                <span className="font-mono text-[9.5px] tracking-[0.3em] text-dim">PHONE</span>
                <span className="font-mono text-[12px] text-cream transition-colors group-hover:text-gold-200">
                  {profile.phone}
                </span>
              </a>
              <div className="flex items-center justify-between gap-6 border-b border-white/8 pb-4">
                <span className="font-mono text-[9.5px] tracking-[0.3em] text-dim">LOCATION</span>
                <span className="font-mono text-[12px] text-cream">{profile.location}</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* signal form */}
        <Reveal delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
            className="relative rounded-2xl border border-gold-500/25 bg-gradient-to-b from-ink-800 to-ink-900 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-10"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(70%_50%_at_50%_0%,rgba(223,180,85,0.07),transparent_65%)]" />
            <p className="relative font-mono text-[10px] tracking-[0.3em] text-dim">
              <span className="text-gold-500/80">//</span> SIGNAL
            </p>

            <form onSubmit={onSubmit} noValidate className="relative mt-7 space-y-6">
              <Field label="NAME" error={errors.name}>
                <input
                  type="text"
                  value={values.name}
                  onChange={set("name")}
                  placeholder="Your name"
                  className={inputCls}
                  aria-invalid={!!errors.name}
                />
              </Field>
              <Field label="EMAIL" error={errors.email}>
                <input
                  type="email"
                  value={values.email}
                  onChange={set("email")}
                  placeholder="you@domain.com"
                  className={inputCls}
                  aria-invalid={!!errors.email}
                />
              </Field>
              <Field label="MESSAGE" error={errors.message}>
                <textarea
                  rows={5}
                  value={values.message}
                  onChange={set("message")}
                  placeholder="Describe the system you want to build…"
                  className={`${inputCls} resize-none`}
                  aria-invalid={!!errors.message}
                />
              </Field>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-sm border border-gold-500/45 bg-gold-400/10 px-6 py-4 font-mono text-[11px] tracking-[0.28em] text-gold-100 transition-all duration-300 hover:bg-gold-400 hover:text-ink-950"
              >
                {sent ? (
                  <>
                    TRANSMISSION SENT
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 14 }}
                    >
                      ✓
                    </motion.span>
                  </>
                ) : (
                  <>
                    EXECUTE TRANSMIT
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </>
                )}
              </button>
              <p className="text-center font-mono text-[8.5px] tracking-[0.2em] text-dim/80">
                {sent
                  ? "YOUR MAIL CLIENT IS OPEN WITH THE MESSAGE PRE-FILLED"
                  : "TRANSMISSION ROUTES THROUGH YOUR MAIL CLIENT"}
              </p>
            </form>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
