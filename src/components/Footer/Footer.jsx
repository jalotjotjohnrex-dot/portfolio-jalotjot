import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Logo */}
        <div className="footer__logo">
          <span className="logo-bracket">&lt;</span>Dev<span className="logo-bracket">/&gt;</span>
          <p className="footer__tagline">Building systems that matter.</p>
        </div>

        {/* Quick links */}
        <nav className="footer__nav" aria-label="Footer navigation">
          {['#home', '#about', '#skills', '#projects', '#contact'].map((href) => (
            <a key={href} href={href} className="footer__link">
              {href.replace('#', '').charAt(0).toUpperCase() + href.slice(2)}
            </a>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} John Rex M. Jalotjot · Built with{' '}
            <span className="footer__react">React</span> + Vite
          </p>
          <p className="footer__made">
            Made with ❤️ in Marinduque, Philippines
          </p>
        </div>
      </div>
    </footer>
  )
}
