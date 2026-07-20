import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import IndustryProjects from "./components/IndustryProjects";
import AcademicProjects from "./components/AcademicProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <IndustryProjects />
      <AcademicProjects />
      <Experience />
      <Achievements />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;