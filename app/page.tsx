"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { MainNavbar } from "@/components/MainNavbar";

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
  const { t } = useLanguage();
  const projects = [
    {
      name: "Interiores AI",
      description: t("projects.interioresai.description"),
      image: "/interioresai1.webp",
      logo: "/interioresai-logo.png",
      link: "https://interiores-ai.com",
      internalLink: "/interioresai",
      tag: t("projects.interioresai.tag"),
      sold: true,
    },
    {
      name: "Mirror Look App",
      description: t("projects.mirrorlook.description"),
      image: "/mirrorlook1.jpg",
      logo: "/mirrorlook-logo.png",
      link: "https://mirrorlook.app",
      internalLink: "/mirrorlook",
      tag: t("projects.mirrorlook.tag"),
    },
  ];

  return (
    <div className="overflow-x-hidden font-sans">
      {/* ─── HERO ─── */}
      <section className="relative bg-[#0d0d0d] min-h-screen overflow-hidden">
        {/* Nav */}
        <MainNavbar />

        {/* Person photo — right half */}
        <div className="absolute right-0 top-0 w-[55%] h-full">
          <Image
            src="/me.webp"
            alt="Franco Mendez"
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
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
            {t("hero.title1")}
          </h1>
          <h1
            className="font-black text-white leading-[0.88] tracking-tight whitespace-nowrap"
            style={{ fontSize: "clamp(52px, 10.5vw, 148px)" }}
          >
            {t("hero.title2")}
          </h1>
        </div>
      </section>

      {/* ─── BIO ─── */}
      <section className="bg-white px-8 md:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-start">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t("bio.description")}
            </p>
            <a
              href="#contact"
              className="text-black font-medium text-sm hover:opacity-50 transition-opacity"
            >
              {t("bio.moreAbout")}
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t("bio.tagline")}
            </p>
            <div className="flex gap-5 mt-8">
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
                href="https://www.linkedin.com/in/francomendezok/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1h.02C3.87 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.83v2.19h.05c.53-1 1.84-2.19 3.79-2.19 4.05 0 4.8 2.67 4.8 6.14V24h-4v-8.74c0-2.09-.04-4.78-2.91-4.78-2.91 0-3.36 2.27-3.36 4.63V24h-4V8z" />
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
          {t("projects.title")}
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
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={project.logo}
                      alt=""
                      width={32}
                      height={32}
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
                    {project.sold && (
                      <span className="text-xs font-bold text-white bg-red-600 px-2 py-1 rounded uppercase tracking-wide">
                        {t("projects.sold")}
                      </span>
                    )}
                    <span className="text-white/30 text-xs border border-white/10 px-2 py-1 rounded whitespace-nowrap">
                      {project.tag}
                    </span>
                  </div>
                </div>
              </a>
              <div className="px-5 pb-5">
                <Link
                  href={project.internalLink!}
                  className="text-white/30 text-xs hover:text-white/70 transition-colors"
                >
                  {t("projects.viewCaseStudy")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="bg-[#111] px-8 md:px-16 py-20">
        <h2 className="text-white font-bold leading-tight mb-3" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          {t("skills.title")}
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
          {t("contact.eyebrow")}
        </p>
        <div className="flex items-start justify-between gap-8">
          <h2
            className="font-black text-black leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 60px)" }}
          >
            {t("contact.titleLine1")}
            <br />
            {t("contact.titleLine2")}
          </h2>
          <a
            href="mailto:francomendezok@gmail.com"
            className="flex-shrink-0 rounded-full bg-[#3355FF] text-white font-medium text-sm flex items-center justify-center text-center leading-snug hover:bg-[#2244ee] transition-colors"
            style={{ width: "clamp(96px, 10vw, 140px)", height: "clamp(96px, 10vw, 140px)" }}
          >
            {t("contact.cta").split("\n").map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </a>
        </div>
        <hr className="my-8 border-gray-200" />
        <div className="flex gap-12">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("contact.emailLabel")}</p>
            <p className="text-sm text-gray-900">francomendezok@gmail.com</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("contact.whatsAppLabel")}</p>
            <a
              href="https://wa.me/5493513930405"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-900 hover:opacity-60 transition-opacity"
            >
              +549 351 393 0405
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-black px-8 md:px-16 pt-8 pb-10 overflow-hidden">
        <div className="flex items-center justify-end mb-4">
          <a
            href="https://www.linkedin.com/in/francomendezok/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-colors text-base"
            aria-label="LinkedIn"
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
