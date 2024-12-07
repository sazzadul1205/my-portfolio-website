export const dynamic = "force-dynamic"

import HeroSection from "@/Components/MainPage/HeroSection";
import AboutMeSection from "@/Components/MainPage/AboutMeSection";
import ProjectsSection from "@/Components/MainPage/ProjectsSection";
import ContactSection from "@/Components/MainPage/ContactSection";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
