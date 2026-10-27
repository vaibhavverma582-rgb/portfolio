# Manish Dhubkarya — Developer Portfolio

A dark, animated single-page portfolio built from Manish's resume.

## Stack

- **React 19 + Vite** — fast dev experience
- **Tailwind CSS v4** — utility styling with a custom theme (`@theme` tokens)
- **Motion (Framer Motion v12)** — all animations

## Animation highlights

- Scroll-linked gradient progress bar and experience timeline
- Blur-up scroll reveals with staggered children
- Magnetic buttons (spring-tracked pointer offset)
- 3D tilt + spotlight hover on cards
- Animated metric counters (About) and CGPA bar (Education)
- Infinite tech marquee, floating gradient orbs, cursor glow, role word rotator
- Respects `prefers-reduced-motion` via `<MotionConfig reducedMotion="user">`

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

Content lives in `src/data.js` — edit it to update any section.
