import AboutMeSection from "@/Components/MainPage/AboutMeSection";
import ContactSection from "@/Components/MainPage/ContactSection";
import HeroSection from "@/Components/MainPage/HeroSection";
import ProjectsSection from "@/Components/MainPage/ProjectsSection";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutMeSection></AboutMeSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
    </div>
  );
}
