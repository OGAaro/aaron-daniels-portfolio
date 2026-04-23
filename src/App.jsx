import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Interests from './components/Interests';
import Footer from './components/Footer';

/**
 * App — the composition root.
 *
 * Notice how clean this is: App doesn't know HOW any section works, it just
 * decides the ORDER they render in. Each imported component is a black box
 * with its own internal logic. Want to reorder sections? Move lines around
 * here. Want to hide a section? Delete a line. Want to add one? Add a line.
 *
 * This is what people mean by "composition" — building complex UIs by
 * combining simple, focused pieces.
 */
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Interests />
      <Footer />
    </>
  );
}
