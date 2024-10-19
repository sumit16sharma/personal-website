import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import RecentProjects from "./components/ProjectShowcase";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import SkillsGlobe from "./components/SkillsGlobe";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <Hero />

        <Experience />

        {/* Projects that I have worked on   */}
        <RecentProjects />

        <SkillsGlobe />

        <Footer />
      </div>
    </main>
  );
}
