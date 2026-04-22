import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import SkillsAdvanced from "./components/SkillsAdvanced";
import Projects from "./components/Projects";
import SocialMediaSection from "./components/SocialMediaSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <SkillsAdvanced />
        <Projects />
        <SocialMediaSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
