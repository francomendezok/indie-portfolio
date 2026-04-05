
"use client";

import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { MainNavbar } from "@/components/MainNavbar";

export default function MirrorLookPage() {
    const { t } = useLanguage();
    const project = {
        name: "Mirror Look App",
        description: t("projects.mirrorlook.description"),
        logo: "/mirrorlook-logo.webp",
        link: "https://mirrorlook.app"
    };

    const images = [
        "/1.webp",
        "/2.webp",
        "/3.webp",
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <MainNavbar linkPrefix="/" />

            <div className="px-6 pb-12 pt-8 md:px-12 lg:px-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-8 flex items-center gap-2 text-sm text-gray-400">
                        <Link href="/" className="transition-colors hover:text-gray-900">{t("caseStudy.home")}</Link>
                        <span>/</span>
                        <Link href="/#work" className="transition-colors hover:text-gray-900">{t("caseStudy.work")}</Link>
                        <span>/</span>
                        <span className="text-gray-900">{project.name}</span>
                    </div>

                    <div className="mb-8">
                        <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">{t("caseStudy.back")}</Link>
                    </div>

                    <div className="max-w-md mx-auto mb-16">
                        <ProjectCard {...project} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {images.map((img, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                                <Image
                                    src={img}
                                    alt={`${project.name} ${t("caseStudy.screenshot")} ${i + 1}`}
                                    width={1600}
                                    height={1000}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
