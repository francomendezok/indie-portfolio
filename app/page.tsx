import { Profile } from "@/components/Profile";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    name: "Interiores AI",
    description: "Redesign your interior with AI in seconds.",
    revenue: "$19/mo",
    logo: "/interioresai-logo.png",
    link: "https://interiores-ai.com",
    internalLink: "/interioresai",
    badge: (
      <a href="https://trustmrr.com/startup/interiores-ai" target="_blank">
        <img src="https://trustmrr.com/api/embed/interiores-ai?format=svg" alt="TrustMRR verified revenue badge" width="220" height="90" />
      </a>
    )
  },
  {
    name: "Mirror Look App",
    description: "Virtual try-on for Shopify stores.",
    logo: "/mirrorlook-logo.png",
    link: "https://mirrorlook.app",
    internalLink: "/mirrorlook"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-20 bg-background text-foreground font-sans">
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Column: Profile */}
        <div className="lg:col-span-4 xl:col-span-3">
          <div className="lg:sticky lg:top-24">
            <Profile />
          </div>
        </div>

        {/* Right Column: Projects */}
        <div className="lg:col-span-8 xl:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
