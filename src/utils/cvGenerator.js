import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

export const generateCV = () => {
  const doc = new jsPDF()
  
  // To ensure the plugin is available on the instance
  // (autoTable will automatically attach to doc if imported)
  
  // Colors & Fonts
  const primaryColor = [15, 23, 42] // Slate 900
  const accentColor = [59, 130, 246] // Blue 500

  // ── Header Section ──────────────────────────────────────────
  doc.setFillColor(...primaryColor)
  doc.rect(0, 0, 210, 45, 'F')
  
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(24)
  doc.text('JOHN REX M. JALOTJOT', 15, 20)
  
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.text('GRADUATE COMPUTER ENGINEER | FULL-STACK DEVELOPER', 15, 28)
  
  doc.setFontSize(9)
  doc.text('Email: johnrexjalotjot@gmail.com', 15, 36)
  doc.text('Phone: 09703322984', 80, 36)
  doc.text('Location: Marinduque, Philippines', 135, 36)

  let y = 60

  // ── Professional Summary ────────────────────────────────────
  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('PROFESSIONAL SUMMARY', 15, y)
  y += 5
  doc.setDrawColor(...accentColor)
  doc.setLineWidth(0.5)
  doc.line(15, y, 195, y)
  y += 10
  
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  const summary = 'Graduate Computer Engineer specialized in full-stack web development and mobile applications. Proven track record in modernizing government operations through robust digital systems (Inventory and Personnel management). Passionate about creating efficient, scalable, and user-centric engineering solutions.'
  const splitSummary = doc.splitTextToSize(summary, 180)
  doc.text(splitSummary, 15, y)
  y += 20

  // ── Experience / OJT (2026) ─────────────────────────────────
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(14)
  doc.text('PROFESSIONAL EXPERIENCE (2026 OJT)', 15, y)
  y += 5
  doc.line(15, y, 195, y)
  y += 10

  const experiences = [
    {
      role: 'Full-Stack Developer (OJT)',
      place: 'Municipality of Boac, LGU',
      desc: 'Lead developer for the Inventory and Personnel (Plantilla) Management systems. Utilized Laravel and React to automate manual government workflows, resulting in high efficiency.'
    },
    {
      role: 'Mobile App Specialist (OJT)',
      place: 'Municipality of Boac, LGU',
      desc: 'Engineered a 3D Wayfinding system and an Expense Tracking app using React Native and Firebase cloud databases for public infrastructure.'
    },
    {
      role: 'Database & Technical Support (OJT)',
      place: 'Municipality of Boac, LGU',
      desc: 'Optimized internal LGU databases and developed the Printer Driver Portal to streamline technical operations for municipal offices.'
    }
  ]

  experiences.forEach((exp) => {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.text(exp.role, 15, y)
    doc.setFont('helvetica', 'italic')
    doc.setTextColor(100, 116, 139)
    doc.text(exp.place, 15, y + 5)
    
    doc.setTextColor(...primaryColor)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    const splitDesc = doc.splitTextToSize(exp.desc, 180)
    doc.text(splitDesc, 15, y + 10)
    y += 25
  })

  y += 5

  // ── Education ───────────────────────────────────────────────
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(14)
  doc.text('EDUCATION', 15, y)
  y += 5
  doc.line(15, y, 195, y)
  y += 10

  const eduItems = [
    ['Bachelor of Science in Computer Engineering', 'Marinduque State University', '2022 – 2026'],
    ['Senior High School (With Honors)', 'Marinduque National High School', '2020 – 2022'],
    ['Junior High School (With Honors)', 'Ilaya National High School', '2016 – 2020'],
    ['Elementary School (With Honors)', 'Balimbing Elementary School', '2011 – 2016']
  ]

  autoTable(doc, {
    startY: y,
    head: [['Degree / Level', 'Institution', 'Year']],
    body: eduItems,
    theme: 'grid',
    headStyles: { fillColor: primaryColor },
    margin: { left: 15, right: 15 }
  })

  y = doc.lastAutoTable.finalY + 15

  // ── Technical Skills ────────────────────────────────────────
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(14)
  doc.text('TECHNICAL SKILLS', 15, y)
  y += 5
  doc.line(15, y, 195, y)
  y += 10

  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text('Frontend:', 15, y)
  doc.setFont('helvetica', 'normal')
  doc.text('React.js, Vue.js, Next.js, Tailwind CSS, JavaScript (ES6+)', 45, y)
  y += 6

  doc.setFont('helvetica', 'bold')
  doc.text('Backend:', 15, y)
  doc.setFont('helvetica', 'normal')
  doc.text('Laravel, PHP, Python, MySQL, Firebase Firestore', 45, y)
  y += 6

  doc.setFont('helvetica', 'bold')
  doc.text('Tools:', 15, y)
  doc.setFont('helvetica', 'normal')
  doc.text('Git, GitHub, Vite, Expo, Mobile Development (React Native)', 45, y)

  // ── Footer ──────────────────────────────────────────────────
  doc.setFontSize(8)
  doc.setTextColor(150, 150, 150)
  doc.text('Generated via my dynamic dev-portfolio | 2026', 105, 285, { align: 'center' })

  // Save the PDF
  doc.save('John_Rex_Jalotjot_CV.pdf')
}
