import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import TechStrip from "./sections/TechStrip";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
