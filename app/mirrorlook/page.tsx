
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

export default function MirrorLookPage() {
    const project = {
        name: "Mirror Look App",
        description: "Virtual try-on for Shopify stores.",
        logo: "/mirrorlook-logo.png",
        link: "https://mirrorlook.app"
    };

    const images = [
        "/mirrorlook1.jpg",
        "/mirrorlook2.jpg",
        "/mirrorlook3.png",
    ];

    return (
        <div className="min-h-screen p-6 md:p-12 lg:p-20 bg-background text-foreground font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">← Back</Link>
                </div>

                <div className="max-w-md mx-auto mb-16">
                    <ProjectCard {...project} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {images.map((img, i) => (
                        <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                            <img src={img} alt={`${project.name} Screenshot ${i + 1}`} className="w-full h-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
