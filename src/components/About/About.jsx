import { generateCV } from '../../utils/cvGenerator'
import './About.css'

const timeline = [
  {
    year:  '2026',
    title: 'Full-Stack Developer (OJT)',
    place: 'Municipality of Boac, LGU',
    desc:  'Lead developer for the Inventory and Personnel (Plantilla) Management systems, modernizing government workflows with Laravel and React.',
  },
  {
    year:  '2026',
    title: 'Mobile App Specialist (OJT)',
    place: 'Municipality of Boac, LGU',
    desc:  'Designed and implemented the 3D Wayfinding system and Expense Tracking mobile apps using React Native and Firebase cloud services.',
  },
  {
    year:  '2026',
    title: 'Database & Technical Support (OJT)',
    place: 'Municipality of Boac, LGU',
    desc:  'Engineered internal tools like the Printer Driver Portal and optimized local PHP/MySQL databases for municipal office efficiency.',
  },
]

const education = [
  {
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'Marinduque State University',
    year:   '2022 – 2026',
    icon:   '🎓',
  },
  {
    degree: 'Senior High School (With Honors)',
    school: 'Marinduque National High School',
    year:   '2020 – 2022',
    icon:   '📜',
  },
  {
    degree: 'Junior High School (With Honors)',
    school: 'Ilaya National High School',
    year:   '2016 – 2020',
    icon:   '📖',
  },
  {
    degree: 'Elementary School (With Honors)',
    school: 'Balimbing Elementary School',
    year:   '2011 – 2016',
    icon:   '🏫',
  },
]

const achievements = [
  { name: 'Civil Service Certificate', type: 'Professional Eligibility', icon: '🏛️', path: '/images/achievements/Civil Service Certificate.jfif' },
  { name: 'Cyber Security Certificate', type: 'Technical Security', icon: '🛡️', path: '/images/achievements/Cyber Security Certificate.jfif' },
  { name: 'CpE Challenge Certificate', type: 'Engineering Competition', icon: '🏆', path: '/images/achievements/Certificate CpE Challenge.pdf' },
  { name: 'Regional Participation', type: 'Regional Engineering Event', icon: '🌐', path: '/images/achievements/Certificate of participation regional.pdf' },
  { name: 'Technical Proficiency', type: 'Specialized Training', icon: '⚙️', path: '/images/achievements/Certificate_toxic.pdf' },
]

export default function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-label">Profile</div>
        <h2 id="about-heading" className="section-title">
          Engineering the <span className="gradient-text">Future</span>
        </h2>
        <div className="divider" />

        <div className="about__grid">
          {/* Bio Side */}
          <div className="about__left">
            <div className="about__bio glass-card">
              <div className="about__bio-header">
                <div className="about__avatar-wrap">
                  <img
                    src="/images/ID_Pic.png"
                    alt="John Rex M. Jalotjot"
                    className="about__avatar"
                  />
                </div>
                <div>
                  <h3 className="about__name">John Rex M. Jalotjot</h3>
                  <p className="about__location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Marinduque, Philippines
                  </p>
                </div>
              </div>
              <div className="about__bio-content">
                <p className="about__text">
                  I am a 22-year-old <strong>Graduate Computer Engineer</strong> from Marinduque State University. My passion lies in creating robust digital ecosystems that streamline complex operations into seamless user experiences.
                </p>
                <p className="about__text">
                  Specializing in <strong>Full-Stack Development</strong>, I bridge the gap between back-end data management and front-end interactivity. My work with local government units has shaped my ability to build secure, scalable, and efficient systems for inventory, personnel, and public tools.
                </p>
                <p className="about__text">
                  With a solid foundation in <strong>React, Laravel, and PHP</strong>, I am committed to delivering high-quality engineering solutions that solve real-world problems.
                </p>
              </div>
              <div className="about__links">
                <a href="#contact" className="btn btn-primary" id="about-hire-btn">
                  Hire Me
                </a>
                <button 
                  className="btn btn-outline btn-cv-download" 
                  id="about-download-cv-btn"
                  onClick={generateCV}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download CV
                </button>
              </div>
            </div>

            {/* Achievements Card */}
            <h3 className="about__timeline-title" style={{ marginTop: '2.5rem' }}>Certifications & Achievements</h3>
            <div className="about__achievements glass-card">
              {achievements.map((item, i) => (
                <div key={i} className="about__achievement-item">
                  <span className="about__achievement-icon">{item.icon}</span>
                  <div className="about__achievement-info">
                    <p className="about__achievement-name">{item.name}</p>
                    <p className="about__achievement-type">{item.type}</p>
                  </div>
                  <a href={item.path} target="_blank" rel="noreferrer" className="about__achievement-view" title="View Certificate">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Side */}
          <div className="about__right">
            <h3 className="about__timeline-title">Experience</h3>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={i} className="timeline__item">
                  <div className="timeline__dot" />
                  <div className="timeline__content glass-card">
                    <span className="timeline__year">{item.year}</span>
                    <h4 className="timeline__role">{item.title}</h4>
                    <p className="timeline__place">{item.place}</p>
                    <p className="timeline__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="about__timeline-title" style={{ marginTop: '2rem' }}>Education</h3>
            <div className="about__edu-list">
              {education.map((edu, i) => (
                <div key={i} className="about__edu glass-card">
                  <span className="about__edu-icon">{edu.icon}</span>
                  <div className="about__edu-info">
                    <h4 className="about__edu-degree">{edu.degree}</h4>
                    <p className="about__edu-school">{edu.school}</p>
                    <p className="about__edu-year">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
