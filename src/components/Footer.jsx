import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-500/12 py-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-5 sm:px-8 md:flex-row">
        <p className="font-mono text-[9.5px] tracking-[0.3em] text-dim">
          PORTFOLIO <span className="text-gold-500/70">//</span> 2026
        </p>
        <p className="font-mono text-[9.5px] tracking-[0.3em] text-dim">
          DESIGNED & ENGINEERED BY <span className="text-gold-300">MANISH DHUBKARYA</span>
        </p>
        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[9.5px] tracking-[0.25em] text-mute transition-colors hover:text-gold-200"
          >
            GITHUB ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[9.5px] tracking-[0.25em] text-mute transition-colors hover:text-gold-200"
          >
            LINKEDIN ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
