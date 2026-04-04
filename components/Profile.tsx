import Image from "next/image";
import { Socials } from "./Socials";

export const Profile = () => {
    return (
        <div className="flex flex-col">
            {/* Avatar Container */}
            <div className="relative mb-6 group">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-gray-100">
                    <Image
                        src="/me.webp"
                        alt="Profile"
                        fill
                        sizes="128px"
                        className="object-cover"
                    />
                </div>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-gray-900 mb-2">
                Franco Mendez
            </h1>

            <div className="flex items-center gap-2 text-gray-500 mb-6 text-sm font-medium">
                <span className="flex items-center gap-1">📍 Cordoba, Argentina</span>
                <span className="flex items-center gap-1">💸 $19/month</span>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed max-w-sm">
                <p className="italic">
                    🚀 Building useful products and launching them fast.
                </p>
            </div>

            <Socials />
        </div>
    );
};
