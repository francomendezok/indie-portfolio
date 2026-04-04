import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ProjectProps {
    name: string;
    description: string;
    revenue?: string;
    logo: string;
    link: string;

    internalLink?: string;
    color?: string; // Optional now if we use original images
    badge?: ReactNode;
}

export const ProjectCard = ({ name, description, revenue, logo, link, internalLink, color = "#000", badge }: ProjectProps) => {
    const isImageLogo = logo.includes(".") || logo.startsWith("/");

    return (
        <div className="group relative bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
            <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0" aria-label={`View ${name}`} />

            <div className="relative z-10 pointer-events-none flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden ${!isImageLogo ? 'text-xl text-white font-bold' : ''}`} style={!isImageLogo ? { backgroundColor: color } : {}}>
                            {isImageLogo ? (
                                <Image src={logo} alt={name} width={48} height={48} className="w-full h-full object-cover" />
                            ) : (
                                logo
                            )}
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg group-hover:text-brand transition-colors">{name}</h3>
                        </div>
                    </div>
                    {revenue && (
                        <div className="bg-[#6366f1] text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                            {revenue}
                        </div>
                    )}
                </div>

                <p className="text-gray-500 text-sm mb-6 flex-grow">{description}</p>

                {internalLink && (
                    <div className="mb-4 relative z-20 pointer-events-auto">
                        <Link href={internalLink} className="text-sm font-medium text-gray-900 hover:text-black underline">
                            View details
                        </Link>
                    </div>
                )}

                {badge && (
                    <div className="mt-auto pt-4 relative z-20 pointer-events-auto">
                        {badge}
                    </div>
                )}
            </div>
        </div>
    );
};
