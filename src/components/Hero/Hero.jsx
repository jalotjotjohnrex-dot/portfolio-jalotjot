import { useEffect, useRef } from 'react'
import { generateCV } from '../../utils/cvGenerator'
import { generateResume } from '../../utils/resumeGenerator'
import './Hero.css'

export default function Hero() {
  const orbRef = useRef(null)

  // Subtle parallax on the floating orb
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!orbRef.current) return
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 30
      const y = (e.clientY / innerHeight - 0.5) * 30
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Background decorations */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" ref={orbRef} />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        {/* Text side */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Computer Engineer
          </div>

          <h1 className="hero__title">
            I'm <span className="gradient-text">John Rex M. Jalotjot</span>
            <br />
            Full‑Stack Developer
          </h1>

          <p className="hero__subtitle">
            A 22-year-old **Graduate Computer Engineer** dedicated to building
            impactful web systems and mobile applications. Specializing in
            <strong> React, Laravel & PHP</strong> for government efficiency.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary" id="hero-view-work-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              View My Work
            </a>
            <div className="hero__download-btns" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                className="btn btn-outline btn-cv-download" 
                id="hero-download-cv-btn"
                onClick={generateCV}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download CV
              </button>
              <button 
                className="btn btn-outline btn-cv-download" 
                id="hero-download-resume-btn"
                onClick={generateResume}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                Download Resume
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            {[
              { value: '4+',  label: 'Projects Built' },
              { value: 'LGU', label: 'Gov. Systems' },
              { value: '3',   label: 'Tech Stacks' },
            ].map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-value">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo side */}
        <div className="hero__photo-wrap">
          <div className="hero__photo-ring" />
          <div className="hero__photo-container">
            <img
              src="/images/ID_Pic.png"
              alt="Developer profile photo"
              className="hero__photo"
              loading="eager"
            />
          </div>
          {/* Floating badges */}
          <div className="hero__float hero__float--react">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="22" />
            React
          </div>
          <div className="hero__float hero__float--laravel">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" width="22" />
            Laravel
          </div>
          <div className="hero__float hero__float--php">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" width="22" />
            PHP
          </div>
          <div className="hero__float hero__float--python">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="22" />
            Python
          </div>
          <div className="hero__float hero__float--tailwind">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" width="22" />
            Tailwind
          </div>
          <div className="hero__float hero__float--nextjs">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" width="22" />
            Next.js
          </div>
          <div className="hero__float hero__float--vuejs">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" width="22" />
            Vue.js
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about" className="hero__scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
