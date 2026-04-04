"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { MainNavbar } from "@/components/MainNavbar";

const skills = [
  {
    name: "React",
    icon: "RC",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/React.svg"],
  },
  {
    name: "Next.js",
    icon: "NX",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Next.js.svg"],
  },
  {
    name: "TypeScript",
    icon: "TS",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/TypeScript.svg"],
  },
  {
    name: "Tailwind CSS",
    icon: "TW",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"],
  },
  {
    name: "JavaScript",
    icon: "JS",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/JavaScript.svg"],
  },
  {
    name: "PostgreSQL",
    icon: "PG",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/PostgresSQL.svg"],
  },
  {
    name: "SQL Server",
    icon: "MS",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Microsoft-SQL-Server.svg"],
  },
  { name: "AI / LLMs", icon: "AI" },
  {
    name: "Figma",
    icon: "FG",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Figma.svg"],
  },
  {
    name: "Vercel",
    icon: "VC",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Vercel.svg"],
  },
  {
    name: "Node.js",
    icon: "ND",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Node.js.svg"],
  },
  {
    name: "Express",
    icon: "EX",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Express.svg"],
  },
  {
    name: "PHP",
    icon: "PHP",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/PHP.svg"],
  },
  {
    name: "C#",
    icon: "C#",
    iconUrls: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"],
  },
  {
    name: "REST APIs",
    icon: "API",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/OpenAPI.svg"],
  },
  {
    name: "Git",
    icon: "GT",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Git.svg"],
  },
  {
    name: "GitHub",
    icon: "GH",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/GitHub.svg"],
  },
  {
    name: "Postman",
    icon: "PM",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Postman.svg"],
  },
  {
    name: "Redis",
    icon: "RD",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Redis.svg"],
  },
  {
    name: "Redux",
    icon: "RX",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Redux.svg"],
  },
  {
    name: "SQLite",
    icon: "SQ",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/SQLite.svg"],
  },
  {
    name: "Vite.js",
    icon: "VT",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Vite.js.svg"],
  },
  {
    name: "Webpack",
    icon: "WP",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Webpack.svg"],
  },
  {
    name: "Bash",
    icon: "SH",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Bash.svg"],
  },
  {
    name: "Linux",
    icon: "LX",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/Linux.svg"],
  },
  { name: "Shopify", icon: "SY" },
  { name: "Tiendanube", icon: "TN" },
  { name: "Wix", icon: "WX" },
  {
    name: "WooCommerce",
    icon: "WC",
    iconUrls: ["https://icon.icepanel.io/Technology/svg/WooCommerce.svg"],
  },
  { name: "React Native", icon: "RN" },
];

export default function Home() {
  const { t, locale } = useLanguage();
  const projects = [
    {
      name: "Autogestion CMPC",
      description: t("projects.autogestioncmpc.description"),
      logo: "/cmpc-logo.webp",
      link: "https://autogestion.cmpc.org.ar/",
      tag: t("projects.autogestioncmpc.tag"),
      logoClassName: "rounded-2xl bg-white p-2 object-contain",
      banner: "/Autogestion CMPC/1.png",
      gallery: [
        "/Autogestion CMPC/2.png",
        "/Autogestion CMPC/3.png",
        "/Autogestion CMPC/4.png",
        "/Autogestion CMPC/5.png",
      ],
    },
    {
      name: "MirrorLook AI Virtual Try-On",
      description: t("projects.mirrorlook.description"),
      logo: "/mirrorlook-logo.webp",
      link: "https://mirrorlook.app",
      tag: t("projects.mirrorlook.tag"),
      logoClassName: "rounded-2xl object-contain",
      banner: "/mirrorlook.png",
      featuredImage: "/mirrorlook.png",
      gallery: ["/1.webp", "/2.webp", "/3.webp", "/4.webp", "/5.webp", "/6.webp"],
    },
    {
      name: "Interiores AI",
      description: t("projects.interioresai.description"),
      logo: "/interioresai-logo.png",
      link: "https://interiores-ai.com",
      tag: t("projects.interioresai.tag"),
      sold: true,
      banner: "/interiores-ai-banenr.png",
      video: "/interiores-ai-video.mp4",
      logoClassName: "rounded-2xl object-cover",
      featuredImage: "/interiores-ai-1.png",
      gallery: [
        "/interioresai1.webp",
        "/interioresai2.webp",
        "/interioresai3.webp",
        "/interioresai4.webp",
        "/interioresai5.webp",
        "/interioresai6.webp",
      ],
    },
  ];
  const [carouselIndexes, setCarouselIndexes] = useState<Record<string, number>>({});

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCarouselIndexes((current) => {
        const next = { ...current };

        for (const project of projects) {
          if (project.featuredImage) continue;
          const slides = [project.banner, ...project.gallery];
          if (!slides.length) continue;
          const currentIndex = current[project.name] ?? 0;
          next[project.name] = (currentIndex + 1) % slides.length;
        }

        return next;
      });
    }, 7000);

    return () => window.clearInterval(interval);
  }, [locale]);

  return (
    <div className="overflow-x-hidden font-sans">
      {/* ─── HERO ─── */}
      <section className="relative bg-[#0d0d0d] min-h-screen overflow-hidden">
        {/* Nav */}
        <MainNavbar />

        {/* Person photo — full width on mobile, right half on desktop */}
        <div className="absolute right-0 top-0 w-full md:w-[55%] h-full">
          <Image
            src="/me.webp"
            alt="Franco Mendez"
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover object-top"
            priority
          />
          {/* Fade from left — desktop only */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent" />
          {/* Fade from bottom — stronger on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/70 to-[#0d0d0d]/30 md:from-[#0d0d0d]/80 md:via-transparent md:to-transparent" />
        </div>

        {/* Oversized heading — bottom of hero */}
        <div className="relative z-10 flex flex-col justify-end h-[calc(100vh-70px)] md:h-[calc(100vh-80px)] pb-10 md:pb-14 px-6 md:px-16">
          <h1
            className="font-black text-white leading-[0.88] tracking-tight md:whitespace-nowrap"
            style={{ fontSize: "clamp(42px, 10.5vw, 148px)" }}
          >
            {t("hero.title1")}
          </h1>
          <h1
            className="font-black text-white leading-[0.88] tracking-tight md:whitespace-nowrap"
            style={{ fontSize: "clamp(42px, 10.5vw, 148px)" }}
          >
            {t("hero.title2")}
          </h1>
        </div>
      </section>

      {/* ─── BIO ─── */}
      <section className="bg-white px-6 md:px-16 py-14 md:py-20">
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
      <section id="work" className="bg-white px-6 md:px-16 pb-16 md:pb-20">
        <h2
          className="font-black text-black leading-none mb-10"
          style={{ fontSize: "clamp(40px, 7.5vw, 96px)" }}
        >
          {t("projects.title")}
        </h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-[28px] border border-black/8 bg-[#111] p-4 md:p-6"
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={project.logo}
                      alt=""
                      width={56}
                      height={56}
                      className={`h-14 w-14 flex-shrink-0 ${project.logoClassName}`}
                    />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                        {project.sold && (
                          <span className="rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                            {t("projects.sold")}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 max-w-2xl text-sm text-white/60">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                      {project.tag}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-opacity hover:opacity-80"
                    >
                      {t("projects.liveSite")}
                    </a>
                  </div>
                </div>

                {project.video && (
                  <div className="overflow-hidden md:rounded-3xl border border-white/10 bg-black">
                    <video
                      className="block h-auto w-full"
                      controls
                      preload="metadata"
                      playsInline
                      autoPlay={false}
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  </div>
                )}

                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    {t("projects.gallery")}
                  </p>
                  {project.featuredImage ? (
                    <div className="space-y-4">
                      <div className="overflow-hidden md:rounded-3xl border border-white/10 bg-black/30">
                        <Image
                          src={project.featuredImage}
                          alt={`${project.name} featured`}
                          width={1800}
                          height={1200}
                          sizes="100vw"
                          className="h-auto w-full object-cover"
                        />
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                        {project.gallery.map((image, index) => (
                          <div
                            key={`${project.name}-${image}`}
                            className="overflow-hidden md:rounded-2xl border border-white/10 bg-black/30"
                          >
                            <Image
                              src={image}
                              alt={`${project.name} ${index + 1}`}
                              width={1200}
                              height={900}
                              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            setCarouselIndexes((current) => {
                              const slides = [project.banner, ...project.gallery];
                              const activeIndex = current[project.name] ?? 0;
                              const nextIndex =
                                activeIndex === 0 ? slides.length - 1 : activeIndex - 1;

                              return {
                                ...current,
                                [project.name]: nextIndex,
                              };
                            })
                          }
                          className="cursor-pointer rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-white/30 hover:text-white"
                        >
                          Prev
                        </button>
                        <div className="w-full overflow-hidden md:rounded-3xl border border-white/10 bg-black/30">
                          <div
                            className="flex h-full transition-transform duration-700 ease-out"
                            style={{
                              transform: `translateX(-${
                                (carouselIndexes[project.name] ?? 0) * 100
                              }%)`,
                            }}
                          >
                            {[project.banner, ...project.gallery].map((image, index) => (
                              <div
                                key={`${project.name}-${image}`}
                                className="w-full flex-shrink-0"
                              >
                                <Image
                                  src={image}
                                  alt={`${project.name} ${index + 1}`}
                                  width={1600}
                                  height={1200}
                                  sizes="100vw"
                                  className="h-auto w-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            setCarouselIndexes((current) => {
                              const slides = [project.banner, ...project.gallery];
                              const activeIndex = current[project.name] ?? 0;
                              const nextIndex = (activeIndex + 1) % slides.length;

                              return {
                                ...current,
                                [project.name]: nextIndex,
                              };
                            })
                          }
                          className="cursor-pointer rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-white/30 hover:text-white"
                        >
                          Next
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-center gap-2">
                        {[project.banner, ...project.gallery].map((_, index) => (
                          <button
                            key={`${project.name}-dot-${index}`}
                            type="button"
                            aria-label={`Show ${project.name} image ${index + 1}`}
                            onClick={() =>
                              setCarouselIndexes((current) => ({
                                ...current,
                                [project.name]: index,
                              }))
                            }
                            className={`h-2 rounded-full transition-all ${
                              (carouselIndexes[project.name] ?? 0) === index
                                ? "w-8 bg-white"
                                : "w-2 bg-white/25"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="bg-[#111] px-6 md:px-16 py-16 md:py-20">
        <h2 className="text-white font-bold leading-tight mb-3" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          {t("skills.title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#1a1a1a] rounded-xl p-5 flex flex-col gap-3 hover:bg-[#222] transition-colors"
            >
              <div className="flex min-h-8 items-center gap-2">
                {skill.iconUrls?.length ? (
                  skill.iconUrls.map((iconUrl) => (
                    <img
                      key={iconUrl}
                      src={iconUrl}
                      alt=""
                      loading="lazy"
                      className="h-7 w-7 object-contain"
                    />
                  ))
                ) : (
                  <span className="text-white/50 text-lg font-mono leading-none">{skill.icon}</span>
                )}
              </div>
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="bg-white px-6 md:px-16 py-16 md:py-20">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-8">
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
            className="flex-shrink-0 rounded-full bg-[#3355FF] text-white font-medium text-sm flex items-center justify-center text-center leading-tight hover:bg-[#2244ee] transition-colors self-start sm:self-auto"
            style={{ width: "clamp(96px, 10vw, 140px)", height: "clamp(96px, 10vw, 140px)" }}
          >
            <span className="inline-flex max-w-[72px] items-center justify-center whitespace-pre-line text-center">
              {t("contact.cta")}
            </span>
          </a>
        </div>
        <hr className="my-8 border-gray-200" />
        <div className="flex flex-wrap gap-6 sm:gap-12">
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
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/francomendezok/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-900 hover:opacity-60 transition-opacity"
            >
              linkedin.com/in/francomendezok
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-black px-6 md:px-16 pt-8 pb-10 overflow-hidden">
        <h2
          className="font-black text-white leading-none tracking-tight"
          style={{ fontSize: "clamp(36px, 11vw, 160px)" }}
        >
          Franco Mendez
        </h2>
      </footer>
    </div>
  );
}
