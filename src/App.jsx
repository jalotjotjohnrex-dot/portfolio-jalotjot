import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ProjectDetails from './components/Projects/ProjectDetails'
import './App.css'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  // Reveal animation logic
  useEffect(() => {
    if (selectedProject) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selectedProject]);

  if (selectedProject) {
    return (
      <ProjectDetails 
        project={selectedProject} 
        onBack={() => {
          setSelectedProject(null)
          setTimeout(() => {
            const el = document.getElementById('projects')
            if (el) el.scrollIntoView({ behavior: 'instant' })
          }, 0)
        }} 
      />
    )
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <div className="reveal">
          <Hero />
        </div>
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <Skills />
        </div>
        <div className="reveal">
          <Projects onProjectSelect={setSelectedProject} />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
