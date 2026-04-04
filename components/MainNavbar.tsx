"use client";

import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageContext";

interface MainNavbarProps {
  linkPrefix?: string;
}

export function MainNavbar({ linkPrefix = "" }: MainNavbarProps) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <nav className="relative z-20 px-5 pt-5 md:px-16 md:pt-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-white px-5 py-3 text-black shadow-xl md:px-6">
        <Link href="/" className="text-sm font-medium tracking-wide text-black">
          {t("nav.brand")}
        </Link>
        <div className="flex items-center gap-5 md:gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link
              href={`${linkPrefix}#work`}
              className="text-sm text-black/65 transition-transform duration-200 hover:scale-105 hover:text-black"
            >
              {t("nav.work")}
            </Link>
            <Link
              href={`${linkPrefix}#skills`}
              className="text-sm text-black/65 transition-transform duration-200 hover:scale-105 hover:text-black"
            >
              {t("nav.skills")}
            </Link>
            <Link
              href={`${linkPrefix}#contact`}
              className="text-sm text-black/65 transition-transform duration-200 hover:scale-105 hover:text-black"
            >
              {t("nav.contact")}
            </Link>
          </div>
          <div
            className="flex items-center gap-1 rounded-full border border-black/10 bg-black/5 p-1"
            aria-label={t("nav.language")}
          >
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-transform duration-200 hover:scale-105 ${
                locale === "en"
                  ? "bg-black text-white"
                  : "text-black/55 hover:text-black"
              }`}
              aria-pressed={locale === "en"}
            >
              {t("nav.english")}
            </button>
            <button
              type="button"
              onClick={() => setLocale("es")}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-transform duration-200 hover:scale-105 ${
                locale === "es"
                  ? "bg-black text-white"
                  : "text-black/55 hover:text-black"
              }`}
              aria-pressed={locale === "es"}
            >
              {t("nav.spanish")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
