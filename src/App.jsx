import { useEffect, useState } from 'react';
import './App.css';
import { About } from './components/About';
import { BackToTop } from './components/BackToTop';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('pawlos-theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pawlos-theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))} />
      <main className="page-shell">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
