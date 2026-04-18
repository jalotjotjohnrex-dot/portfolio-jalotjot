import { useState } from 'react'
import './Contact.css'

const socials = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
    label: 'GitHub',
    href:  'https://github.com/jalotjotjohnrex-dot',
    value: 'github.com/jalotjotjohnrex-dot',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    label: 'Instagram',
    href:  'https://www.instagram.com/johnrexjalotjot2003?igsh=ZGhkMDBkOHV2M3Fx',
    value: '@johnrexjalotjot2003',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    label: 'Facebook',
    href:  'https://www.facebook.com/johnrex.jalotjot.3',
    value: 'facebook.com/johnrex.jalotjot.3',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    href:  'mailto:johnrexjalotjot@gmail.com',
    value: 'johnrexjalotjot@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    href:  'tel:09703322984',
    value: '09703322984',
  },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'sent' | 'error'

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic Gmail validation if you want to enforce it (optional)
    if (!form.email.includes('@')) {
      alert('Please enter a valid email address.')
      return
    }

    setStatus('sending')

    try {
      // Using your new Formspree ID
      const response = await fetch('https://formspree.io/f/mnjldray', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (response.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
        
        // Auto-reset status after 5 seconds so user can send another message
        setTimeout(() => {
          setStatus(null)
        }, 5000)
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-label">Contact</div>
        <h2 id="contact-heading" className="section-title">
          Let's <span className="gradient-text">Work Together</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind? I'd love to hear about it. Drop me a message below.
        </p>
        <div className="divider" />

        <div className="contact__grid">
          {/* Info Side */}
          <div className="contact__info">
            <div className="glass-card contact__info-card">
              <h3 className="contact__info-title">Get in Touch</h3>
              <p className="contact__info-text">
                Available for freelance work and full-time opportunities.
                Let's discuss how I can help bring your ideas to life.
              </p>

              <div className="contact__socials">
                {socials.map(({ icon, label, href, value }) => (
                  <a key={label} href={href} className="contact__social-item" target="_blank" rel="noopener noreferrer">
                    <div className="contact__social-icon">{icon}</div>
                    <div className="contact__social-info">
                      <span className="contact__social-label">{label}</span>
                      <span className="contact__social-value">{value}</span>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="contact__social-arrow"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="contact__availability glass-card">
              <div className="availability-dot" />
              <div>
                <p className="availability-title">Available for Hire</p>
                <p className="availability-sub">Open to freelance & full-time roles</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form
            id="contact-form"
            className="glass-card contact__form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                className="form-input"
                placeholder="Project Inquiry / Job Opportunity"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="form-input form-textarea"
                placeholder="Tell me about your project or opportunity..."
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              id="contact-submit-btn"
              type="submit"
              className="btn btn-primary contact__submit"
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'sending' && (
                <span className="contact__spinner" />
              )}
              {status === 'sent' ? '✓ Message Sent!' : status === 'sending' ? 'Sending…' : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </>
              )}
            </button>

            {status === 'sent' && (
              <p className="contact__success">
                🎉 Your message has been sent! I'll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p className="contact__error" style={{ color: '#ef4444', marginTop: '1rem', fontSize: '0.9rem' }}>
                ❌ Something went wrong. Please try again or email me directly at johnrexjalotjot@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
