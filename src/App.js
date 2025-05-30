import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CvResume from './components/CvResume';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <CvResume />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;
