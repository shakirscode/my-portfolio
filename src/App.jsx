// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;