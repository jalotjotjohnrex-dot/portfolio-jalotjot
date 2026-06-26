import { jsPDF } from 'jspdf'

export const generateResume = () => {
  const doc = new jsPDF()
  
  // MCS Resume Format is typically 10-12pt for body, 14-16pt for sections
  const fontBody = 'times' 
  const fontSizeName = 18
  const fontSizeSection = 12
  const fontSizeBody = 10
  const marginX = 20
  let y = 15

  // ── HEADER (Centered) ──────────────────────────────────────────
  doc.setFont(fontBody, 'bold')
  doc.setFontSize(fontSizeName)
  doc.text('JOHN REX M. JALOTJOT', 105, y, { align: 'center' })
  
  y += 6
  doc.setFont(fontBody, 'normal')
  doc.setFontSize(fontSizeBody)
  doc.text('johnrexjalotjot@gmail.com | 09703322984 | Marinduque, Philippines', 105, y, { align: 'center' })
  y += 5
  doc.text('Portfolio: portfolio-jalotjot-gu1c.vercel.app | GitHub: jalotjotjohnrex-dot | LinkedIn: john-rex-jalotjot-a52275404', 105, y, { align: 'center' })
  
  y += 8

  // ── PROFESSIONAL SUMMARY ─────────────────────────────────────
  doc.setFont(fontBody, 'bold')
  doc.setFontSize(fontSizeSection)
  doc.text('PROFESSIONAL SUMMARY', marginX, y)
  y += 2
  doc.setLineWidth(0.2)
  doc.line(marginX, y, 190, y)
  y += 5

  doc.setFont(fontBody, 'normal')
  doc.setFontSize(fontSizeBody)
  const summary = '22-year-old Full-Stack Developer & Computer Engineering graduate. Builds impactful web/mobile apps using React, Laravel, PHP, Next.js, and Python. Proven track record delivering secure, efficient software for Local Government Units (LGU). As a values-driven, God-loving professional, I prioritize integrity and trust in my daily work. I am highly punctual, detail-oriented, and accountable, ensuring deadlines are met with high-quality code.'
  const splitSummary = doc.splitTextToSize(summary, 170)
  doc.text(splitSummary, marginX, y)
  y += (splitSummary.length * 5) + 3

  // ── EDUCATION ───────────────────────────────────────────────
  doc.setFont(fontBody, 'bold')
  doc.setFontSize(fontSizeSection)
  doc.text('EDUCATION', marginX, y)
  y += 2
  doc.line(marginX, y, 190, y)
  y += 6

  doc.setFont(fontBody, 'bold')
  doc.setFontSize(fontSizeBody)
  doc.text('Marinduque State University', marginX, y)
  doc.setFont(fontBody, 'normal')
  doc.text('Marinduque, PH', 190, y, { align: 'right' })
  y += 5
  doc.setFont(fontBody, 'italic')
  doc.text('Bachelor of Science in Computer Engineering', marginX, y)
  doc.setFont(fontBody, 'normal')
  doc.text('2022 – 2026', 190, y, { align: 'right' })
  y += 5
  doc.setFont(fontBody, 'normal')
  doc.text('• Relevant Coursework: Web Development, Database Management, Mobile App Development, Software Engineering', marginX + 5, y)
  
  y += 8

  // ── EXPERIENCE ──────────────────────────────────────────────
  doc.setFont(fontBody, 'bold')
  doc.setFontSize(fontSizeSection)
  doc.text('TECHNICAL EXPERIENCE', marginX, y)
  y += 2
  doc.line(marginX, y, 190, y)
  y += 6

  // OJT Experience
  doc.setFontSize(fontSizeBody)
  doc.setFont(fontBody, 'bold')
  doc.text('Municipality of Boac (Local Government Unit)', marginX, y)
  doc.setFont(fontBody, 'normal')
  doc.text('Boac, PH', 190, y, { align: 'right' })
  y += 5
  doc.setFont(fontBody, 'italic')
  doc.text('System Developer Intern (Graduation OJT)', marginX, y)
  doc.setFont(fontBody, 'normal')
  doc.text('2026 – Present', 190, y, { align: 'right' })
  y += 6

  const expBullets = [
    'Developed and deployed the Inventory Management and Personnel (Plantilla) portals using Laravel and React, automating previously manual office workflows.',
    'Engineered a 3D Wayfinding mobile application and an Expense Tracker using React Native and Firebase to enhance municipal technical infrastructure.',
    'Designed a Printer Driver Portal to streamline driver distribution across LGU departments, improving technical support efficiency.',
    'Optimized complex MySQL database structures for local government databases, ensuring high performance and data integrity.',
  ]

  expBullets.forEach(bullet => {
    const splitText = doc.splitTextToSize('• ' + bullet, 165)
    doc.text(splitText, marginX + 5, y)
    y += (splitText.length * 5)
  })

  y += 3

  // ── NOTABLE PROJECTS ─────────────────────────────────────────
  doc.setFont(fontBody, 'bold')
  doc.setFontSize(fontSizeSection)
  doc.text('NOTABLE PROJECTS', marginX, y)
  y += 2
  doc.line(marginX, y, 190, y)
  y += 6

  doc.setFont(fontBody, 'bold')
  doc.setFontSize(fontSizeBody)
  doc.text('Dynamic Developer Portfolio | React.js, Vite, jsPDF', marginX, y)
  y += 5
  doc.setFont(fontBody, 'normal')
  const proj1 = doc.splitTextToSize('• Engineered a fully responsive personal portfolio with real-time PDF generation capabilities for resumes, CVs, and certificates directly in the browser.', 165)
  doc.text(proj1, marginX + 5, y)
  y += (proj1.length * 5)

  y += 3

  // ── TECHNICAL & SOFT SKILLS ─────────────────────────────────
  doc.setFont(fontBody, 'bold')
  doc.setFontSize(fontSizeSection)
  doc.text('SKILLS & TRAITS', marginX, y)
  y += 2
  doc.line(marginX, y, 190, y)
  y += 6

  doc.setFontSize(fontSizeBody)
  doc.setFont(fontBody, 'bold')
  doc.text('Languages: ', marginX, y)
  doc.setFont(fontBody, 'normal')
  doc.text('JavaScript (ES6+), PHP, Python, SQL, HTML5, CSS3', marginX + 28, y)
  y += 5

  doc.setFont(fontBody, 'bold')
  doc.text('Frameworks: ', marginX, y)
  doc.setFont(fontBody, 'normal')
  doc.text('React.js, Laravel, React Native, Next.js, Vue.js, Tailwind CSS', marginX + 28, y)
  y += 5

  doc.setFont(fontBody, 'bold')
  doc.text('Tools & Cloud: ', marginX, y)
  doc.setFont(fontBody, 'normal')
  doc.text('Git, GitHub, Firebase, MySQL, Vite, Android SDK', marginX + 28, y)
  y += 5

  doc.setFont(fontBody, 'bold')
  doc.text('Professional Traits: ', marginX, y)
  doc.setFont(fontBody, 'normal')
  doc.text('Highly Punctual, God-loving, Integrity-driven, Detail-Oriented, Collaborative Teamwork', marginX + 32, y)
  
  y += 8

  // ── ACHIEVEMENTS ────────────────────────────────────────────
  doc.setFont(fontBody, 'bold')
  doc.setFontSize(fontSizeSection)
  doc.text('CERTIFICATIONS & ACHIEVEMENTS', marginX, y)
  y += 2
  doc.line(marginX, y, 190, y)
  y += 6

  doc.setFontSize(fontSizeBody)
  doc.setFont(fontBody, 'normal')
  const achieveBullets = [
    'Civil Service Certificate (Professional Eligibility) - Recognized for excellence in public service qualification.',
    'Cyber Security Certification - Specialized in technical security protocols and digital safety.',
    'CpE Challenge Participant - Competed in regional engineering and coding competitions.'
  ]

  achieveBullets.forEach(bullet => {
    const splitText = doc.splitTextToSize('• ' + bullet, 165)
    doc.text(splitText, marginX + 5, y)
    y += (splitText.length * 5)
  })

  // Save the PDF
  doc.save('John_Rex_Jalotjot_Resume.pdf')
}
