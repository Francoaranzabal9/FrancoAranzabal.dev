
import { ThemeToggle } from "../components/ThemeToggle"
import { Navbar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutMe } from "../components/AboutMe"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { AnimatedBackground } from "../components/AnimatedBackground"


export const Home = () => {
  return <div className="min-h-screen text-foreground overflow-x-hidden">
    <ThemeToggle />
    <AnimatedBackground />
    <Navbar />

    <main>
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
}