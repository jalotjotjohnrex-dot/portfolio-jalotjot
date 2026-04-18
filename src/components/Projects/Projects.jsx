import { useState } from 'react'
import { projects } from '../../data/projects'
import './Projects.css'

const allFilters = ['All', 'Web System', 'Web Tool', 'Mobile App']

export default function Projects({ onProjectSelect }) {
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="projects section" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-label">Portfolio</div>
        <h2 id="projects-heading" className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Real-world systems built for government units and daily-use applications.
        </p>
        <div className="divider" />

        {/* Filter Tabs */}
        <div className="projects__filters" role="group" aria-label="Project filters">
          {allFilters.map((f) => (
            <button
              key={f}
              id={`filter-${f.replace(/\s/g, '-').toLowerCase()}`}
              className={`projects__filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="projects__grid">
          {visible.map((project) => (
            <article
              key={project.id}
              className={`project-card glass-card ${project.featured ? 'project-card--featured' : ''}`}
              style={{ '--proj-color': project.color }}
              role="button"
              tabIndex={0}
              onClick={() => onProjectSelect(project)}
              onKeyDown={(e) => e.key === 'Enter' && onProjectSelect(project)}
              aria-label={`View ${project.title} details`}
            >
              {project.featured && (
                <div className="project-card__badge">⭐ Featured</div>
              )}

              {/* Screenshot preview */}
              <div className="project-card__thumb">
                <img
                  src={project.screens[0].src}
                  alt={project.screens[0].caption}
                  loading="lazy"
                />
                <div className="project-card__overlay">
                  <span className="project-card__view-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    View Project
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="project-card__body">
                <div className="project-card__category">{project.category}</div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description.slice(0, 110)}…</p>
                <div className="project-card__tags">
                  {project.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Color accent bar */}
              <div className="project-card__accent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
