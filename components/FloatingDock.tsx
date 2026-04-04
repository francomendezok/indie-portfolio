"use client";

import Image from "next/image";
import { FileText, X } from "lucide-react";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";

interface DockItem {
  id: string;
  labelKey: string;
  href: string;
  external?: boolean;
}

const items: DockItem[] = [
  { id: "home",    labelKey: "dock.home",    href: "#" },
  { id: "work",    labelKey: "dock.work",    href: "#work" },
  { id: "skills",  labelKey: "dock.skills",  href: "#skills" },
  { id: "profile", labelKey: "dock.profile", href: "#" },
  { id: "resume",  labelKey: "dock.resume",  href: "#" },
  { id: "github",  labelKey: "dock.github",  href: "https://github.com/francomendezok", external: true },
  { id: "contact", labelKey: "dock.contact", href: "#contact" },
];

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

function SkillsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
    </svg>
  );
}

function DocumentIcon() {
  return <FileText className="w-5 h-5" strokeWidth={1.8} />;
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

const iconMap: Record<string, ReactNode> = {
  home:    <HomeIcon />,
  work:    <CodeIcon />,
  skills:  <SkillsIcon />,
  resume:  <DocumentIcon />,
  github:  <GitHubIcon />,
  contact: <ContactIcon />,
};

function handleScroll(e: MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) {
  if (external) return;
  e.preventDefault();
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function FloatingDock() {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<string | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    if (!isResumeModalOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsResumeModalOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isResumeModalOpen]);

  function handleItemClick(
    e: MouseEvent<HTMLAnchorElement>,
    item: DockItem,
  ) {
    if (item.id === "resume") {
      e.preventDefault();
      setIsResumeModalOpen(true);
      return;
    }

    handleScroll(e, item.href, item.external);
  }

  return (
    <>
      {isResumeModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm"
          onClick={() => setIsResumeModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            className="w-full max-w-md rounded-[2rem] border border-white/10 bg-[#111] p-6 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.24em] text-white/45">
                  {t("resumeModal.eyebrow")}
                </p>
                <h2 id="resume-modal-title" className="text-2xl font-black leading-tight">
                  {t("resumeModal.title")}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {t("resumeModal.description")}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsResumeModalOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                aria-label={t("resumeModal.close")}
              >
                <X className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </div>

            <div className="grid gap-3">
              <a
                href="/cv-english.pdf"
                download
                onClick={() => setIsResumeModalOpen(false)}
                className="rounded-2xl bg-white px-5 py-4 text-black transition-colors hover:bg-[#ece6d8]"
              >
                <span className="block text-xs uppercase tracking-[0.2em] text-black/45">
                  PDF
                </span>
                <span className="mt-1 block text-lg font-semibold">{t("resumeModal.english")}</span>
              </a>
              <a
                href="/cv-spanish.pdf"
                download
                onClick={() => setIsResumeModalOpen(false)}
                className="rounded-2xl border border-white/10 px-5 py-4 text-white transition-colors hover:bg-white/5"
              >
                <span className="block text-xs uppercase tracking-[0.2em] text-white/45">
                  PDF
                </span>
                <span className="mt-1 block text-lg font-semibold">{t("resumeModal.spanish")}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 select-none">
        <div className="bg-[#1c1c1e]/95 backdrop-blur-xl rounded-full px-4 py-3 flex items-center gap-1.5 shadow-2xl border border-white/10">
        {items.map((item) => {
          const isProfile = item.id === "profile";
          const isHovered = hovered === item.id;
          const label = t(item.labelKey);

          return (
            <a
              key={item.id}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={(e) => handleItemClick(e, item)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex items-center justify-center"
              aria-label={label}
            >
              {/* Tooltip */}
              <span
                className={`absolute -top-9 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[11px] font-medium px-2 py-1 rounded-md whitespace-nowrap pointer-events-none transition-all duration-150 ${
                  isHovered ? "opacity-100 -translate-y-0" : "opacity-0 translate-y-1"
                }`}
              >
                {label}
              </span>

              {/* Icon button */}
              <div
                className={`flex items-center justify-center rounded-full transition-all duration-200 ${
                  isProfile
                    ? "w-11 h-11 ring-2 ring-cyan-400 ring-offset-2 ring-offset-[#1c1c1e]"
                    : "w-10 h-10"
                } ${
                  isHovered && !isProfile ? "bg-white/15 scale-110" : ""
                } ${
                  isHovered && isProfile ? "scale-110" : ""
                }`}
              >
                {isProfile ? (
                  <Image
                    src="/me.webp"
                    alt="Franco"
                    width={44}
                    height={44}
                    className="rounded-full object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-white/70">{iconMap[item.id]}</span>
                )}
              </div>
            </a>
          );
        })}
        </div>
      </div>
    </>
  );
}
