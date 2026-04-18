import { useState } from 'react'
import './Skills.css'

const categories = [
  {
    label: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React JS',    level: 90, color: '#61dafb' },
      { name: 'React Native',level: 80, color: '#61dafb' },
      { name: 'JavaScript', level: 85, color: '#f7df1e' },
      { name: 'HTML / CSS',  level: 95, color: '#e34f26' },
      { name: 'Tailwind CSS',level: 85, color: '#38bdf8' },
      { name: 'Next.js',     level: 75, color: '#ffffff' },
      { name: 'Vue.js',      level: 65, color: '#42b883' },
      { name: 'Vite',        level: 80, color: '#646cff' },
    ],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'PHP',         level: 88, color: '#777bb4' },
      { name: 'Laravel',     level: 85, color: '#ff2d20' },
      { name: 'Node.js',     level: 65, color: '#68a063' },
      { name: 'REST APIs',   level: 82, color: '#00e5ff' },
      { name: 'Python',      level: 70, color: '#3776ab' },
    ],
  },
  {
    label: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MySQL',       level: 88, color: '#4479a1' },
      { name: 'Firebase',    level: 78, color: '#ffca28' },
      { name: 'SQLite',      level: 70, color: '#003b57' },
    ],
  },
  {
    label: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub',level: 85, color: '#f05032' },
      { name: 'VS Code',     level: 95, color: '#007acc' },
      { name: 'Expo',        level: 78, color: '#000000' },
      { name: 'Linux / Nginx',level: 65, color: '#22c55e' },
    ],
  },
]

const techIcons = [
  { name: 'React',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Laravel',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'PHP',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'MySQL',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Firebase',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Git',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'HTML5',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Python',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Next.js',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Vue.js',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
]

function SkillBar({ name, level, color }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: `${level}%`, '--skill-color': color }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState(0)

  return (
    <section id="skills" className="skills section" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-label">Skills</div>
        <h2 id="skills-heading" className="section-title">
          My <span className="gradient-text">Tech Stack</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life.
        </p>
        <div className="divider" />

        {/* Tech icon strip */}
        <div className="skills__icons" aria-label="Technology icons">
          {techIcons.map(({ name, src }) => (
            <div key={name} className="skills__icon-item glass-card" title={name}>
              <img src={src} alt={name} width="36" height="36" />
              <span>{name}</span>
            </div>
          ))}
        </div>

        {/* Category tabs + bars */}
        <div className="skills__panel glass-card">
          <div className="skills__tabs" role="tablist">
            {categories.map(({ label, icon }, i) => (
              <button
                key={label}
                id={`skills-tab-${i}`}
                role="tab"
                aria-selected={active === i}
                className={`skills__tab ${active === i ? 'skills__tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span>{icon}</span> {label}
              </button>
            ))}
          </div>

          <div className="skills__bars" role="tabpanel" aria-labelledby={`skills-tab-${active}`}>
            {categories[active].skills.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
