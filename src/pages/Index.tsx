import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Passions from "./Passions";
import Contact from "./Contact";
import Reveal from "@/components/Reveal";

const Index = () => {
  return (
    <>
      <section id="home" className="scroll-mt-20">
        <Home />
      </section>

      <section id="skills" className="scroll-mt-20 bg-secondary/30">
        <Reveal>
          <Skills />
        </Reveal>
      </section>

      <section id="projects" className="scroll-mt-20">
        <Reveal>
          <Projects />
        </Reveal>
      </section>

      <section id="passions" className="scroll-mt-20 bg-secondary/30">
        <Reveal>
          <Passions />
        </Reveal>
      </section>

      <section id="contact" className="scroll-mt-20">
        <Reveal>
          <Contact />
        </Reveal>
      </section>
    </>
  );
};

export default Index;
