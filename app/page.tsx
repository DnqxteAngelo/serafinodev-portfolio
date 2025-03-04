import DockNav from "@/components/docknav";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

// import { MainNav } from "@/components/main-nav";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Angelo Serafino",
  description:
    "Personal portfolio of Angelo Serafino, a web developer specializing in React and Next.js",
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-6">
      <div className="fixed inset-0 -z-10">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
        />
      </div>
      <DockNav />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
