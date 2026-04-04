import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  detectLocaleFromAcceptLanguage,
  detectLocaleFromCountry,
  isLocale,
  LOCALE_COOKIE_NAME,
} from "@/app/i18n/config";

export function proxy(request: NextRequest) {
  const existingLocale = request.cookies.get(LOCALE_COOKIE_NAME)?.value;

  if (isLocale(existingLocale)) {
    return NextResponse.next();
  }

  const country = request.headers.get("x-vercel-ip-country");
  const acceptLanguage = request.headers.get("accept-language");
  const locale = country
    ? detectLocaleFromCountry(country)
    : detectLocaleFromAcceptLanguage(acceptLanguage);

  const response = NextResponse.next();
  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|favicon|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|pdf)$).*)",
  ],
};
