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
  doc.rect(0, 0, 210, 50, 'F')
  
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
  doc.text('Links: GitHub: jalotjotjohnrex-dot | LinkedIn: john-rex-jalotjot-a52275404 | Portfolio: portfolio-jalotjot-gu1c.vercel.app', 15, 43)

  let y = 65

  // ── Professional Summary ────────────────────────────────────
  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('PROFESSIONAL SUMMARY', 15, y)
  y += 5
  doc.setDrawColor(...accentColor)
  doc.setLineWidth(0.5)
  doc.line(15, y, 195, y)
  y += 8
  
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  const summary = 'A 22 years old Full-Stack Developer & Computer Engineering graduate with a proven track record in modernizing government operations through robust digital systems. Passionate about creating efficient, scalable, and user-centric engineering solutions. As a values-driven, God-loving professional, I prioritize integrity and trust in my daily work. I am highly punctual, detail-oriented, and accountable, ensuring deadlines are met with high-quality code.'
  const splitSummary = doc.splitTextToSize(summary, 180)
  doc.text(splitSummary, 15, y)
  y += (splitSummary.length * 5) + 5

  // ── Experience / OJT (2026) ─────────────────────────────────
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(14)
  doc.text('PROFESSIONAL EXPERIENCE', 15, y)
  y += 5
  doc.line(15, y, 195, y)
  y += 8

  const experiences = [
    {
      role: 'Full-Stack Developer (OJT)',
      place: 'Municipality of Boac, LGU | 2026 – Present',
      desc: 'Lead developer for the Inventory and Personnel (Plantilla) Management systems. Utilized Laravel and React to automate manual government workflows, resulting in high efficiency.'
    },

    {
      role: 'Database & Technical Support (OJT)',
      place: 'Municipality of Boac, LGU | 2026 – Present',
      desc: 'Optimized internal LGU databases and developed the Printer Driver Portal to streamline technical operations for municipal offices.'
    },
    {
      role: 'IT Support & Network Technician (OJT)',
      place: 'Municipality of Boac, LGU | 2026 – Present',
      desc: 'Assisted in the configuration and deployment of CCTV systems, including fiber optic lining and IP management.'
    },
    {
      role: 'Thesis Researcher & Lead Developer',
      place: 'Marinduque State University | 2025 – 2026',
      desc: 'Led design and development of the "Smart Clothesline System: An AI-Driven Solution for Efficient Drying and Ironing of Gowns." Built a full-stack web app for real-time monitoring and remote control of the hardware prototype. Integrated IoT sensors (rain, light, smoke) with an automated retraction mechanism and PTC heater fans for efficient, safe gown drying.'
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
    y += (splitDesc.length * 5) + 12
  })

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
  doc.text('SKILLS & TRAITS', 15, y)
  y += 5
  doc.line(15, y, 195, y)
  y += 8

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
  y += 6

  doc.setFont('helvetica', 'bold')
  doc.text('Traits:', 15, y)
  doc.setFont('helvetica', 'normal')
  doc.text('Highly Punctual, God-loving, Detail-Oriented, Collaborative Teamwork', 45, y)

  // ── Footer ──────────────────────────────────────────────────
  doc.setFontSize(8)
  doc.setTextColor(150, 150, 150)
  doc.text('Generated via my dynamic dev-portfolio | 2026', 105, 285, { align: 'center' })

  // Save the PDF
  doc.save('John_Rex_Jalotjot_CV.pdf')
}
