export const profile = {
  name: "Manish Dhubkarya",
  firstName: "Manish",
  logo: "MANISH.",
  role: "Full Stack Developer",
  location: "Madhya Pradesh, India",
  email: "manishdhubkarya@gmail.com",
  phone: "+91 83193 43656",
  phoneHref: "tel:+918319343656",
  linkedin: "https://linkedin.com/in/manish-dhubkarya",
  github: "https://github.com/Manish-Dhubkarya-Codes",
  resume: "/Manish_Resume.pdf",
};

export const hero = {
  lines: [
    { text: "I BUILD", gold: false },
    { text: "DIGITAL", gold: true },
    { text: "EXPERIENCES", gold: true },
  ],
  roles: "FULL STACK DEVELOPER · REACT.JS SPECIALIST · NODE.JS ENGINEER",
  tagline:
    "I turn bold ideas into seamless digital experiences. Where frontend meets powerful backend, and code transforms vision into impact.",
  creed: ["CODE IS MY CRAFT.", "IMPACT IS MY GOAL."],
};

export const about = {
  index: "01",
  label: "ABOUT ME",
  heading: [
    { text: "I DON'T JUST WRITE CODE.", gold: false },
    { text: "I BUILD WHAT'S NEXT.", gold: true },
  ],
  body: [
    "I'm ",
    { strong: true, text: "Manish Dhubkarya" },
    ", a Full Stack Developer with 2+ years of experience building scalable web applications across the front end and back end using JavaScript, TypeScript, React.js, and Node.js.",
    " With a focus on secure, high-performance engineering, I turn complex requirements into impactful products.",
  ],
  stats: [
    { value: 2, suffix: "+", label: "YEARS OF\nEXPERIENCE", gold: false },
    { value: 99, suffix: "%", label: "VULNERABILITIES\nREDUCED", gold: true },
    { value: 40, suffix: "%", label: "ENGAGEMENT\nUPLIFT", gold: false },
    { value: 45, suffix: "%", label: "FASTER PAGE\nLOADS", gold: true },
  ],
};

export const projectsSection = {
  index: "02",
  label: "FEATURED WORK",
  heading: [
    { text: "SELECTED WORKS.", gold: false },
    { text: "ENGINEERED VALUE.", gold: true },
  ],
  note: "Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.",
};

export const projects = [
  {
    no: "01",
    eyebrow: "AI / ML · HR-TECH PLATFORM",
    title: "EMPLOYEE PERFORMANCE TRACKING PLATFORM",
    description:
      "AI/ML-assisted HR analytics platform automating performance reviews and anomaly detection across 200+ employee profiles. Implements intelligent scoring pipelines, real-time dashboards, and generative review summaries.",
    metrics: [
      { label: "PLATFORMS", value: "Web Dashboard" },
      { label: "ENGINE", value: "AI/ML APIs" },
      { label: "IMPACT", value: "60% Less Manual Effort" },
    ],
    tags: ["REACT.JS", "NODE.JS", "EXPRESS.JS", "MONGODB", "AI/ML APIS"],
    link: "https://github.com/Manish-Dhubkarya-Codes/employee-performance-tracking",
  },
  {
    no: "02",
    eyebrow: "REAL-TIME · DEV PLATFORM",
    title: "COGNICODE PROJECT MANAGEMENT SYSTEM",
    description:
      "Multi-role project management platform with real-time chat and task tracking over Socket.IO. Engineered live collaboration pipelines that improved team delivery speed by 55% across engineering squads.",
    metrics: [
      { label: "PROTOCOL", value: "Socket.IO" },
      { label: "BACKEND", value: "Node.js + Express" },
      { label: "DATABASE", value: "PostgreSQL" },
    ],
    tags: ["REACT.JS", "NODE.JS", "SOCKET.IO", "POSTGRESQL", "EXPRESS.JS"],
    link: "https://github.com/Manish-Dhubkarya-Codes/CogniCode_Project_Management",
  },
  {
    no: "03",
    eyebrow: "SAAS · RBAC PLATFORM",
    title: "COGNICODE ADMIN PANEL",
    description:
      "Enterprise-grade responsive admin dashboard built for unified management of 2,000+ live records. Architected with strict role-based access control (RBAC), Redux Toolkit state sync, and real-time data updates.",
    metrics: [
      { label: "ACCESS", value: "Role-Based · RBAC" },
      { label: "DATABASE", value: "MySQL" },
      { label: "SYNC", value: "Redux Toolkit Live" },
    ],
    tags: ["REACT.JS", "NODE.JS", "MYSQL", "EXPRESS.JS", "REDUX TOOLKIT"],
    link: "https://github.com/Manish-Dhubkarya-Codes/CogniCodeAdminPanel",
  },
  {
    no: "04",
    eyebrow: "PWA · FINTECH-GRADE SECURITY",
    title: "OFFLINE-FIRST PWA PLATFORM",
    description:
      "Offline-first progressive web application suite supporting seamless usage in low-connectivity environments. Implemented JWT-secured sessions across 1M+ accounts and raised Lighthouse performance from 62 to 94.",
    metrics: [
      { label: "SESSIONS", value: "1M+ Secured" },
      { label: "PERFORMANCE", value: "Lighthouse 94" },
      { label: "LOAD TIME", value: "45% Faster" },
    ],
    tags: ["REACT.JS", "TYPESCRIPT", "VITE", "TAILWIND CSS", "JWT AUTH"],
    link: "https://github.com/Manish-Dhubkarya-Codes",
  },
];

export const skillsSection = {
  index: "03",
  label: "TECH MATRIX",
  heading: [
    { text: "ARCHITECTURAL MASTERY.", gold: false },
    { text: "PRECISION APPLIED.", gold: true },
  ],
};

export const skillGroups = [
  {
    title: "FRONTEND ARCHITECTURE",
    eyebrow: "CORE STACK",
    corner: "UI / UX",
    span: "lg:col-span-7",
    description:
      "Specialized in building high-performance client applications, custom component libraries, and immersive web & mobile interfaces.",
    tags: ["REACT.JS", "NEXT.JS", "REACT NATIVE", "TAILWIND CSS", "REDUX TOOLKIT"],
  },
  {
    title: "DISTRIBUTED BACKEND",
    eyebrow: "WEB ARCHITECTURE",
    corner: "API DESIGN",
    span: "lg:col-span-5",
    description:
      "Engineered RESTful APIs, JWT role-based access control, real-time communication layers, and secure backend isolation.",
    tags: ["NODE.JS", "EXPRESS.JS", "SOCKET.IO", "DOCKER", "AWS"],
  },
  {
    title: "DATA PLATFORMS",
    eyebrow: "PERSISTENCE",
    corner: "ACID & NOSQL",
    span: "lg:col-span-5",
    description:
      "Designing resilient relational and document schemas with optimized indexing and transaction isolation.",
    tags: ["POSTGRESQL", "MYSQL", "MONGODB"],
  },
  {
    title: "ALGORITHMS & ENGINEERING",
    eyebrow: "INTELLIGENCE",
    corner: "PROBLEM SOLVING",
    span: "lg:col-span-7",
    description:
      "Disciplined data-structures and systems engineering applied to production features, performance budgets, and secure architectures.",
    tags: ["TYPESCRIPT", "JAVA", "C++", "PYTHON", "SQL", "GIT · GITHUB"],
  },
];

export const experienceSection = {
  index: "04",
  label: "EXPERIENCE & MILESTONES",
  heading: [
    { text: "EXPERIENCE &", gold: false },
    { text: "MILESTONES.", gold: true },
  ],
};

export const timeline = [
  {
    period: "MAY 2025 — PRESENT",
    title: "FULL STACK DEVELOPER",
    org: "COGNICODE · GWALIOR",
    description:
      "Building React.js / Node.js applications with RBAC and security controls — reducing identified vulnerabilities by 99%. Migrated 1M+ legacy records with zero downtime and created reusable component libraries, cutting feature delivery time by 35%.",
  },
  {
    period: "JUL 2024 — MAY 2025",
    title: "REACT.JS DEVELOPER · FULL STACK",
    org: "AIGETAI · PATNA",
    description:
      "Built offline-first progressive web apps with Vite, TypeScript, and Tailwind CSS — increasing engagement by 40%. Secured 1M+ accounts with JWT and HTTP-only cookies, raising Lighthouse from 62 to 94.",
  },
  {
    period: "NOV 2023 — MAY 2024",
    title: "FULL STACK DEVELOPER INTERN",
    org: "NUMERIC INFOSYSTEM PVT. LTD. · GWALIOR",
    description:
      "Delivered features for 3+ client projects using React.js, Node.js, and React Native within Agile/Scrum teams.",
  },
  {
    period: "2020 — 2024",
    title: "B.TECH IN COMPUTER SCIENCE",
    org: "GWALIOR INSTITUTE OF INFORMATION TECHNOLOGY",
    description:
      "Graduated with 8.27/10 CGPA. Foundations across data structures, databases, operating systems, and system design.",
  },
  {
    period: "2023 — 2024",
    title: "CERTIFICATIONS",
    org: "GOOGLE CLOUD · FULL STACK WEB DEVELOPMENT",
    description:
      "Google Cloud skill badges, Full Stack Web Development certification, and C / C++ programming certifications.",
  },
];

export const contactSection = {
  index: "05",
  label: "CONTACT",
  heading: [
    { text: "INITIALIZE", gold: false },
    { text: "TRANSMISSION.", gold: true },
  ],
  body: "Have an ambitious system to architect, an engineering challenge to collaborate upon? Send a direct signal.",
};

export const navLinks = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "contact", label: "CONTACT" },
];
