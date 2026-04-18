import { useEffect } from 'react'
import Footer from '../Footer/Footer'
import './ProjectDetails.css'

export default function ProjectDetails({ project, onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="project-details-page">
      <nav className="project-details__nav">
        <div className="container">
          <button className="back-btn" onClick={onBack}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Projects
          </button>
        </div>
      </nav>

      <header className="project-details__header container">
        <span className="project-details__badge">{project.category}</span>
        <h1 className="project-details__title">{project.title}</h1>
        <p className="project-details__desc">{project.description}</p>
        <div className="project-details__tags">
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </header>

      <main className="project-details__gallery container">
        {project.screens.map((screen, idx) => (
          <div key={idx} className="project-details__card glass-card">
            <div className="project-details__img-wrap">
              <img src={screen.src} alt={screen.caption} className="project-details__img" />
            </div>
            {screen.caption && (
              <div className="project-details__caption">
                {screen.caption}
              </div>
            )}
          </div>
        ))}
      </main>
      
      <Footer />
    </div>
  )
}
