import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active, setActive]       = useState('#home')
  const [theme, setTheme]         = useState('light')

  useEffect(() => {
    // Check saved preference, default to 'light' for new visitors
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Scroll listener
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__inner container">
        {/* Logo + Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <a href="#home" className="navbar__logo" id="nav-logo" onClick={() => handleNav('#home')}>
            <span className="logo-bracket">&lt;</span>
            JRJ
            <span className="logo-bracket">/&gt;</span>
          </a>
          <button
            onClick={toggleTheme}
            className="navbar__theme-toggle"
            aria-label="Toggle Light/Dark Mode"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--clr-text)', display: 'flex', alignItems: 'center' }}
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="navbar__links" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`navbar__link ${active === href ? 'navbar__link--active' : ''}`}
                onClick={() => handleNav(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="btn btn-primary navbar__cta" onClick={() => handleNav('#contact')}>
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          id="menu-toggle"
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul role="list">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`navbar__mobile-link ${active === href ? 'active' : ''}`}
                onClick={() => handleNav(href)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }} onClick={() => handleNav('#contact')}>
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
