import Link from "next/link";

/** Plain text page for Marketio's public documents (home, privacy, terms). */
export function Doc({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans px-6 py-12 md:px-12">
            <article className="mx-auto max-w-2xl space-y-4 leading-relaxed text-gray-700 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-gray-900 [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6">
                <nav className="flex gap-4 text-sm text-gray-500">
                    <Link href="/marketio">Marketio</Link>
                    <Link href="/marketio/privacy">Privacy Policy</Link>
                    <Link href="/marketio/terms">Terms of Service</Link>
                </nav>
                <a href="https://www.youtube.com" aria-label="YouTube" className="!no-underline inline-block">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/developed-with-youtube.png" alt="Developed with YouTube" width={210} height={75} className="-ml-4" />
                </a>
                <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
                <p className="text-sm text-gray-400">Last updated: {updated}</p>
                {children}
            </article>
        </div>
    );
}
