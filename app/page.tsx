import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Interiores AI",
    description: "Redesign your interior with AI in seconds.",
    revenue: "$19/mo",
    image: "/interioresai1.webp",
    logo: "/interioresai-logo.png",
    link: "https://interiores-ai.com",
    internalLink: "/interioresai",
    tag: "SaaS · AI",
    badge: (
      <a
        href="https://trustmrr.com/startup/interiores-ai"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://trustmrr.com/api/embed/interiores-ai?format=svg"
          alt="TrustMRR verified revenue badge"
          width={160}
          height={65}
        />
      </a>
    ),
  },
  {
    name: "Mirror Look App",
    description: "Virtual try-on for Shopify stores.",
    image: "/mirrorlook1.jpg",
    logo: "/mirrorlook-logo.png",
    link: "https://mirrorlook.app",
    internalLink: "/mirrorlook",
    tag: "Shopify · AI",
  },
];

const skills = [
  { name: "React / Next.js", icon: "⚛" },
  { name: "TypeScript", icon: "Ts" },
  { name: "Tailwind CSS", icon: "✦" },
  { name: "Supabase", icon: "◈" },
  { name: "PostgreSQL", icon: "◉" },
  { name: "AI / LLMs", icon: "◎" },
  { name: "Figma", icon: "▣" },
  { name: "Vercel", icon: "▲" },
  { name: "Node.js", icon: "⬡" },
  { name: "REST APIs", icon: "⊕" },
  { name: "Git / GitHub", icon: "⑂" },
  { name: "Stripe", icon: "◇" },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden font-sans">
      {/* ─── HERO ─── */}
      <section className="relative bg-[#0d0d0d] min-h-screen overflow-hidden">
        {/* Nav */}
        <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 py-6">
          <span className="text-white/80 text-sm font-medium tracking-wide">
            Franco · Solopreneur
          </span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-white/40 hover:text-white text-sm transition-colors">
              Work
            </a>
            <a href="#skills" className="text-white/40 hover:text-white text-sm transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-white/40 hover:text-white text-sm transition-colors">
              Contact
            </a>
          </div>
        </nav>

        {/* Person photo — right half */}
        <div className="absolute right-0 top-0 w-[55%] h-full">
          <Image
            src="/me.webp"
            alt="Franco Mendez"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Fade into dark bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent" />
        </div>

        {/* Oversized heading — bottom of hero */}
        <div className="relative z-10 flex flex-col justify-end h-[calc(100vh-80px)] pb-14 px-8 md:px-16">
          <h1
            className="font-black text-white leading-[0.88] tracking-tight whitespace-nowrap"
            style={{ fontSize: "clamp(52px, 10.5vw, 148px)" }}
          >
            Indie Developer &
          </h1>
          <h1
            className="font-black text-white leading-[0.88] tracking-tight whitespace-nowrap"
            style={{ fontSize: "clamp(52px, 10.5vw, 148px)" }}
          >
            Solopreneur
          </h1>
        </div>
      </section>

      {/* ─── BIO ─── */}
      <section className="bg-white px-8 md:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-start">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Driven by curiosity and a love for building, I create simple,
              functional, and visually striking digital products. As a solopreneur,
              I'm always shipping and exploring new ideas.
            </p>
            <a
              href="#contact"
              className="text-black font-medium text-sm hover:opacity-50 transition-opacity"
            >
              More about me →
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              My passion for design, development, and making things people actually
              use drives every project I take on. Based in Córdoba, Argentina.
            </p>
            <div className="flex gap-5 mt-8">
              <a
                href="https://x.com/francomendezok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black transition-colors"
                aria-label="X"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/francomendezok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/francomendezok/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="work" className="bg-white px-8 md:px-16 pb-20">
        <h2
          className="font-black text-black leading-none mb-10"
          style={{ fontSize: "clamp(40px, 7.5vw, 96px)" }}
        >
          Impressive Works
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-[#111] rounded-2xl overflow-hidden group"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={project.logo}
                      alt=""
                      className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="text-white font-semibold text-sm leading-tight">
                        {project.name}
                      </p>
                      <p className="text-white/40 text-xs mt-0.5">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                    {project.revenue && (
                      <span className="text-xs font-bold text-white bg-indigo-600 px-2 py-1 rounded">
                        {project.revenue}
                      </span>
                    )}
                    <span className="text-white/30 text-xs border border-white/10 px-2 py-1 rounded whitespace-nowrap">
                      {project.tag}
                    </span>
                  </div>
                </div>
              </a>
              <div className="px-5 pb-5 flex items-center justify-between">
                <Link
                  href={project.internalLink!}
                  className="text-white/30 text-xs hover:text-white/70 transition-colors"
                >
                  View case study →
                </Link>
                {project.badge && (
                  <div className="relative z-10">{project.badge}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="bg-[#111] px-8 md:px-16 py-20">
        <h2 className="text-white font-bold leading-tight mb-3" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          Skills that fuel my passion
        </h2>
        <div className="flex gap-1.5 mb-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/20"}`}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#1a1a1a] rounded-xl p-5 flex flex-col gap-3 hover:bg-[#222] transition-colors"
            >
              <span className="text-white/50 text-lg font-mono leading-none">{skill.icon}</span>
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="bg-white px-8 md:px-16 py-20">
        <p className="text-gray-400 text-sm font-medium mb-4 tracking-wide">
          That&apos;s all for now.
        </p>
        <div className="flex items-start justify-between gap-8">
          <h2
            className="font-black text-black leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 60px)" }}
          >
            Got a project in mind?
            <br />
            Let&apos;s talk
          </h2>
          <a
            href="mailto:francomendezok@gmail.com"
            className="flex-shrink-0 rounded-full bg-[#3355FF] text-white font-medium text-sm flex items-center justify-center text-center leading-snug hover:bg-[#2244ee] transition-colors"
            style={{ width: "clamp(96px, 10vw, 140px)", height: "clamp(96px, 10vw, 140px)" }}
          >
            Get In
            <br />
            touch
          </a>
        </div>
        <hr className="my-8 border-gray-200" />
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</p>
          <p className="text-sm text-gray-900">francomendezok@gmail.com</p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-black px-8 md:px-16 pt-8 pb-10 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <p className="text-white/30 text-sm">your friendly chaos creator</p>
          <a
            href="https://x.com/francomendezok"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-colors text-base"
          >
            ↗
          </a>
        </div>
        <h2
          className="font-black text-white leading-none tracking-tight whitespace-nowrap"
          style={{ fontSize: "clamp(44px, 11vw, 160px)" }}
        >
          Franco Mendez
        </h2>
      </footer>
    </div>
  );
}
