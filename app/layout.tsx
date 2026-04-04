import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/app/i18n/LanguageContext";
import { isLocale, LOCALE_COOKIE_NAME } from "@/app/i18n/config";
import { FloatingDock } from "@/components/FloatingDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Franco Mendez | Solopreneur",
  description: "25 years old from Argentina",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  const initialLocale = isLocale(cookieLocale) ? cookieLocale : "en";

  return (
    <html lang={initialLocale}>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider initialLocale={initialLocale}>
          {children}
          <FloatingDock />
        </LanguageProvider>
      </body>
    </html>
  );
}
