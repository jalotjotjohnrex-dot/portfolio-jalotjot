import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

export const generateCV = () => {
  const doc = new jsPDF()
  
  // To ensure the plugin is available on the instance
  // (autoTable will automatically attach to doc if imported)
  
  const primaryColor = [15, 23, 42]

  doc.setFillColor(...primaryColor)
  doc.rect(0, 0, 210, 40, 'F')

  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(21)
  doc.text('JOHN REX M. JALOTJOT', 15, 18)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.8)
  doc.text('GRADUATE COMPUTER ENGINEER', 15, 27)

  doc.setFontSize(8)
  doc.text('Email: johnrexjalotjot@gmail.com', 15, 34)
  doc.text('Phone: 09703322984', 82, 34)
  doc.text('Location: Sampaloc, Manila', 136, 34)
  doc.text('GitHub: jalotjotjohnrex-dot | LinkedIn: john-rex-jalotjot-a52275404 | Portfolio: portfolio-jalotjot-gu1c.vercel.app', 15, 40)

  let y = 52

  doc.setTextColor(...primaryColor)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.text('PROFESSIONAL SUMMARY', 15, y)
  doc.setDrawColor(100, 116, 139)
  doc.setLineWidth(0.35)
  doc.line(15, y + 3, 195, y + 3)
  y += 8

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9.5)
  const summary = 'Computer Engineering graduate with hands-on experience in building, deploying, and optimizing applications and IoT systems for public offices. Skilled in React, Laravel, PHP, Python, and MySQL, with strong experience in workflow automation, database optimization, and user-centered software design.'
  const splitSummary = doc.splitTextToSize(summary, 180)
  doc.text(splitSummary, 15, y)
  y += splitSummary.length * 5 + 7

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.text('PROFESSIONAL EXPERIENCE', 15, y)
  doc.line(15, y + 3, 195, y + 3)
  y += 8

  const experiences = [
    {
      role: 'System Developer Intern',
      place: 'Municipality of Boac, LGU | Jan 2026 – Apr 2026',
      desc: 'Developed and deployed the Inventory Management and Personnel (Plantilla) portals using Laravel and React, automating previously manual office workflows.'
    },
    {
      role: 'Mobile App Specialist',
      place: 'Municipality of Boac, LGU | Jan 2026 – Apr 2026',
      desc: 'Engineered an Expense Tracking mobile app to digitize budget and expenditure recording for the ICTS Office.'
    },
    {
      role: 'Database & Technical Support',
      place: 'Municipality of Boac, LGU | Jan 2026 – Apr 2026',
      desc: 'Optimized local government databases and developed a Printer Driver Portal to streamline technical operations across departments.'
    },
    {
      role: 'IT Support & Network Technician',
      place: 'Municipality of Boac, LGU | Jan 2026 – Apr 2026',
      desc: 'Assisted in configuring and deploying CCTV systems, including fiber optic networking, IP assignment, and technical troubleshooting.'
    },
    {
      role: 'Thesis Researcher & Lead Developer',
      place: 'Marinduque State University | Feb 2025 – Dec 2025',
      desc: 'Led the Smart Clothesline System project, building a full-stack web app for real-time monitoring and remote control of the hardware prototype and integrating IoT sensors for automated protection and drying.'
    }
  ]

  experiences.forEach((exp) => {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9.5)
    doc.text(exp.role, 15, y)
    doc.setFont('helvetica', 'italic')
    doc.setTextColor(100, 116, 139)
    doc.text(exp.place, 15, y + 4.5)

    doc.setTextColor(...primaryColor)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.8)
    const descLines = doc.splitTextToSize(exp.desc, 180)
    doc.text(descLines, 15, y + 10)
    y += 10 + descLines.length * 4.6 + 3
  })

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.text('EDUCATION', 15, y)
  doc.line(15, y + 3, 195, y + 3)
  y += 8

  const eduRows = [
    'Bachelor of Science in Computer Engineering | Marinduque State University | 2022 – 2026',
    'Senior High School (With Honors) | Marinduque National High School | 2020 – 2022',
    'Junior High School (With Honors) | Ilaya National High School | 2016 – 2020',
    'Elementary School (With Honors) | Balimbing Elementary School | 2011 – 2016'
  ]

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.8)
  eduRows.forEach((row) => {
    doc.text(row, 15, y)
    y += 6
  })

  y += 5

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.text('SKILLS & TRAITS', 15, y)
  doc.line(15, y + 3, 195, y + 3)
  y += 8

  const skillRows = [
    ['Frontend:', 'React.js, Vue.js, Next.js, Tailwind CSS, JavaScript (ES6+)'],
    ['Backend:', 'Laravel, PHP, Python, MySQL, Firebase Firestore'],
    ['Tools:', 'Git, GitHub, Vite, Expo, React Native'],
    ['Soft Skills:', 'Detail-Oriented, Technical Writing, Collaborative Teamwork, Problem-Solving']
  ]

  doc.setFontSize(9)
  skillRows.forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold')
    doc.text(label, 15, y)
    doc.setFont('helvetica', 'normal')
    const wrappedValue = doc.splitTextToSize(value, 135)
    doc.text(wrappedValue, 48, y)
    y += Math.max(wrappedValue.length, 1) * 4.7 + 3
  })

  doc.save('John_Rex_Jalotjot_CV.pdf')
}
