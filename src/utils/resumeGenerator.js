import { jsPDF } from 'jspdf'

export const generateResume = () => {
  const doc = new jsPDF()
  
  // MCS Resume Format is typically 10-12pt for body, 14-16pt for sections
  const fontBody = 'times' // MCS usually uses standard serif/sans-serif fonts
  const fontSizeName = 18
  const fontSizeSection = 12
  const fontSizeBody = 10
  const marginX = 20
  let y = 20

  // ── HEADER (Centered) ──────────────────────────────────────────
  doc.setFont(fontBody, 'bold')
  doc.setFontSize(fontSizeName)
  doc.text('JOHN REX M. JALOTJOT', 105, y, { align: 'center' })
  
  y += 7
  doc.setFont(fontBody, 'normal')
  doc.setFontSize(fontSizeBody)
  doc.text('johnrexjalotjot@gmail.com | 09703322984 | Marinduque, Philippines', 105, y, { align: 'center' })
  
  y += 10

  // ── EDUCATION ───────────────────────────────────────────────
  doc.setFont(fontBody, 'bold')
  doc.setFontSize(fontSizeSection)
  doc.text('EDUCATION', marginX, y)
  y += 2
  doc.setLineWidth(0.2)
  doc.line(marginX, y, 190, y)
  y += 7

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
  
  y += 10

  // ── EXPERIENCE ──────────────────────────────────────────────
  doc.setFont(fontBody, 'bold')
  doc.setFontSize(fontSizeSection)
  doc.text('TECHNICAL EXPERIENCE', marginX, y)
  y += 2
  doc.line(marginX, y, 190, y)
  y += 7

  // OJT Experience
  doc.setFont(fontBody, 'bold')
  doc.text('Municipality of Boac (Local Government Unit)', marginX, y)
  doc.setFont(fontBody, 'normal')
  doc.text('Boac, PH', 190, y, { align: 'right' })
  y += 5
  doc.setFont(fontBody, 'italic')
  doc.text('System Developer Intern (Graduation OJT)', marginX, y)
  doc.setFont(fontBody, 'normal')
  doc.text('2026 – Present', 190, y, { align: 'right' })
  y += 7

  const expBullets = [
    'Developed and deployed the Inventory Management and Personnel (Plantilla) portals using Laravel and React, automating previously manual office workflows.',
    'Engineered a 3D Wayfinding mobile application and an Expense Tracker using React Native and Firebase to enhance municipal technical infrastructure.',
    'Designed a Printer Driver Portal to streamline driver distribution across LGU departments, improving technical support efficiency.',
    'Optimized complex MySQL database structures for local government databases, ensuring high performance and data integrity.',
    'Collaborated with the technical department to identify and resolve critical bugs in existing internal government systems.'
  ]

  expBullets.forEach(bullet => {
    const splitText = doc.splitTextToSize('• ' + bullet, 165)
    doc.text(splitText, marginX + 5, y)
    y += (splitText.length * 5)
  })

  y += 5

  // ── TECHNICAL SKILLS ────────────────────────────────────────
  doc.setFont(fontBody, 'bold')
  doc.setFontSize(fontSizeSection)
  doc.text('TECHNICAL SKILLS', marginX, y)
  y += 2
  doc.line(marginX, y, 190, y)
  y += 7

  doc.setFont(fontBody, 'bold')
  doc.text('Languages: ', marginX, y)
  doc.setFont(fontBody, 'normal')
  doc.text('JavaScript (ES6+), PHP, Python, SQL, HTML5, CSS3', marginX + 25, y)
  y += 6

  doc.setFont(fontBody, 'bold')
  doc.text('Frameworks: ', marginX, y)
  doc.setFont(fontBody, 'normal')
  doc.text('React.js, Laravel, React Native, Next.js, Vue.js, Tailwind CSS', marginX + 25, y)
  y += 6

  doc.setFont(fontBody, 'bold')
  doc.text('Tools & Cloud: ', marginX, y)
  doc.setFont(fontBody, 'normal')
  doc.text('Git, GitHub, Firebase, MySQL, Vite, Expo, Android SDK', marginX + 25, y)
  
  y += 10

  // ── ACHIEVEMENTS ────────────────────────────────────────────
  doc.setFont(fontBody, 'bold')
  doc.setFontSize(fontSizeSection)
  doc.text('CERTIFICATIONS & ACHIEVEMENTS', marginX, y)
  y += 2
  doc.line(marginX, y, 190, y)
  y += 7

  doc.setFont(fontBody, 'normal')
  const achieveBullets = [
    'Civil Service Certificate (Professional Eligibility) - Recognized for excellence in public service qualification.',
    'Cyber Security Certification - Specialized in technical security protocols and digital safety.',
    'Regional CpE Challenge Participant - Competed in regional engineering and coding competitions.'
  ]

  achieveBullets.forEach(bullet => {
    const splitText = doc.splitTextToSize('• ' + bullet, 165)
    doc.text(splitText, marginX + 5, y)
    y += (splitText.length * 5)
  })

  // Save the PDF
  doc.save('John_Rex_Jalotjot_Resume.pdf')
}
