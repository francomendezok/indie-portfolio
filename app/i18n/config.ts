export const LOCALE_COOKIE_NAME = "locale";

export const SUPPORTED_LOCALES = ["en", "es"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

const SPANISH_SPEAKING_COUNTRIES = new Set([
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "ES",
  "GQ",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PE",
  "PR",
  "PY",
  "SV",
  "UY",
  "VE",
]);

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "es";
}

export function detectLocaleFromCountry(country: string | null | undefined): Locale {
  if (!country) return "en";
  return SPANISH_SPEAKING_COUNTRIES.has(country.toUpperCase()) ? "es" : "en";
}

export function detectLocaleFromAcceptLanguage(header: string | null | undefined): Locale {
  if (!header) return "en";
  return header.toLowerCase().includes("es") ? "es" : "en";
}
