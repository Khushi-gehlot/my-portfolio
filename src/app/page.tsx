import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import BuildingNow from "@/components/BuildingNow";
import Certs from "@/components/Certs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <hr className="divider" />
      <About />
      <hr className="divider" />
      <Experience />
      <hr className="divider" />
      <Projects />
      <hr className="divider" />
      <Skills />
      <hr className="divider" />
      <BuildingNow />
      <hr className="divider" />
      <Certs />
      <hr className="divider" />
      <Contact />
      <Footer />
    </main>
  );
}
