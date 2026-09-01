import { jsPDF } from 'jspdf'

export const generateResume = () => {
  const doc = new jsPDF()
  const marginX = 18
  const rightX = 192
  const contentWidth = 170

  const sectionHeading = (title, yPos) => {
    doc.setFont('times', 'bold')
    doc.setFontSize(11.5)
    doc.text(title, marginX, yPos)
    doc.setDrawColor(0)
    doc.setLineWidth(0.25)
    doc.line(marginX, yPos + 2, rightX, yPos + 2)
    return yPos + 8
  }

  const addBulletList = (items, startY) => {
    let currentY = startY
    items.forEach((item) => {
      const wrapped = doc.splitTextToSize('• ' + item, contentWidth)
      doc.setFont('times', 'normal')
      doc.setFontSize(9.5)
      doc.text(wrapped, marginX + 5, currentY)
      currentY += wrapped.length * 4.2
    })
    return currentY + 2
  }

  let y = 15

  doc.setFont('times', 'bold')
  doc.setFontSize(18)
  doc.text('JOHN REX M. JALOTJOT', 105, y, { align: 'center' })

  y += 6
  doc.setFont('times', 'normal')
  doc.setFontSize(9.5)
  doc.text('johnrexjalotjot@gmail.com | 09703322984 | Sampaloc, Manila, Philippines', 105, y, { align: 'center' })
  y += 5
  doc.text('Portfolio: portfolio-jalotjot-gu1c.vercel.app | GitHub: jalotjotjohnrex-dot | LinkedIn: john-rex-jalotjot-a52275404', 105, y, { align: 'center' })

  y += 10

  y = sectionHeading('PROFESSIONAL SUMMARY', y)
  doc.setFont('times', 'normal')
  doc.setFontSize(9.5)
  const summary = doc.splitTextToSize(
    'Computer Engineering Fresh Graduate with hands-on experience building, deploying, and optimizing full-stack applications and IoT systems. Proven track record of automating workflows and managing relational databases using React, Tailwind CSS, Python, and MySQL. Strong technical foundation in software engineering, mobile app development, and hardware-software integration, seeking to bring problem-solving agility and production-ready coding skills to a high-performing engineering team.',
    contentWidth
  )
  doc.text(summary, marginX + 5, y)
  y += summary.length * 4.2 + 4

  y = sectionHeading('EDUCATION', y)
  doc.setFont('times', 'bold')
  doc.setFontSize(9.5)
  doc.text('Marinduque State University', marginX, y)
  doc.setFont('times', 'bold')
  doc.text('Marinduque, PH', rightX, y, { align: 'right' })
  y += 5
  doc.setFont('times', 'italic')
  doc.text('Bachelor of Science in Computer Engineering', marginX, y)
  doc.setFont('times', 'normal')
  doc.text('2022 – 2026', rightX, y, { align: 'right' })
  y += 5
  doc.text('Relevant Coursework: Web Development, Database Management, Mobile App Development, Software Engineering', marginX + 5, y)
  y += 9

  y = sectionHeading('TECHNICAL EXPERIENCE', y)
  doc.setFont('times', 'bold')
  doc.setFontSize(9.5)
  doc.text('Municipality of Boac (Local Government Unit)', marginX, y)
  doc.setFont('times', 'bold')
  doc.text('Boac, PH', rightX, y, { align: 'right' })
  y += 5
  doc.setFont('times', 'italic')
  doc.text('System Developer Intern', marginX, y)
  doc.setFont('times', 'normal')
  doc.text('Jan 2026 – Apr 2026', rightX, y, { align: 'right' })
  y += 6

  y = addBulletList([
    'Developed and deployed the Inventory Management and Personnel (Plantilla) portals using Laravel and React, automating previously manual office workflows.',
    'Engineered an Expense Tracking mobile application to digitize budget and expenditure recording for the ICTS Office.',
    'Designed a Printer Driver Portal to streamline driver distribution across LGU departments, improving technical support efficiency.',
    'Optimized complex MySQL database structures for local government databases, ensuring high performance and data integrity.',
    'Assisted in configuring and deploying CCTV systems across municipal offices, managing IP assignments, fiber optic networking, and system troubleshooting.'
  ], y)

  doc.setFont('times', 'bold')
  doc.setFontSize(9.5)
  doc.text('Marinduque State University – Capstone / Thesis', marginX, y)
  doc.setFont('times', 'bold')
  doc.text('Marinduque, PH', rightX, y, { align: 'right' })
  y += 5
  doc.setFont('times', 'italic')
  doc.text('Thesis Researcher & Lead Developer', marginX, y)
  doc.setFont('times', 'normal')
  doc.text('Feb 2025 – Dec 2025', rightX, y, { align: 'right' })
  y += 6

  y = addBulletList([
    'Designed and developed a full-stack web application for real-time monitoring and remote control of the Smart Clothesline System hardware prototype.',
    'Integrated IoT sensors (rain, light, and smoke) to automate gown protection, triggering an automated retraction mechanism when environmental hazards were detected.',
    'Implemented PTC heater fans as the primary drying mechanism, optimizing drying efficiency and energy safety for delicate garments.',
    'Thesis Title: "Smart Clothesline System: An AI-Driven Solution for Efficient Drying and Ironing of Gowns."'
  ], y)

  y = sectionHeading('NOTABLE PROJECTS', y)
  doc.setFont('times', 'bold')
  doc.setFontSize(9.5)
  doc.text('Dynamic Developer Portfolio | React.js, Vite, jsPDF', marginX, y)
  y += 5
  doc.setFont('times', 'normal')
  const projectText = doc.splitTextToSize(
    'Engineered a fully responsive personal portfolio with real-time PDF generation capabilities for resumes, CVs, and certificates directly in the browser.',
    contentWidth
  )
  doc.text(projectText, marginX + 5, y)
  y += projectText.length * 4.2 + 4

  y = sectionHeading('SKILLS & TRAITS', y)
  doc.setFont('times', 'bold')
  doc.setFontSize(9.5)
  doc.text('Languages: ', marginX, y)
  doc.setFont('times', 'normal')
  doc.text('JavaScript (ES6+), PHP, Python, SQL, HTML5, CSS3', marginX + 28, y)
  y += 5

  doc.setFont('times', 'bold')
  doc.text('Frameworks: ', marginX, y)
  doc.setFont('times', 'normal')
  doc.text('React.js, Laravel, React Native, Next.js, Vue.js, Tailwind CSS', marginX + 28, y)
  y += 5

  doc.setFont('times', 'bold')
  doc.text('Tools & Cloud: ', marginX, y)
  doc.setFont('times', 'normal')
  doc.text('Git, GitHub, Firebase, MySQL, Vite, Android SDK', marginX + 28, y)
  y += 5

  doc.setFont('times', 'bold')
  doc.text('Soft Skills: ', marginX, y)
  doc.setFont('times', 'normal')
  doc.text('Detail-Oriented, Technical Writing, Collaborative Teamwork, Problem-Solving', marginX + 28, y)
  y += 9

  y = sectionHeading('CERTIFICATIONS & ACHIEVEMENTS', y)
  y = addBulletList([
    'Civil Service Certificate (Professional Eligibility) - Recognized for excellence in public service qualification.',
    'Cyber Security Certification - Specialized in technical security protocols and digital safety.',
    'CpE Challenge Participant - Competed in program-level computer engineering and coding competitions.'
  ], y)

  doc.save('John_Rex_Jalotjot_Resume_.pdf')
}
