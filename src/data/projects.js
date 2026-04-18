// All 4 projects with real screenshots from the CV folder
export const projects = [
  {
    id: 1,
    title: 'OptimaTrack — Inventory System',
    category: 'Web System',
    tags: ['Laravel', 'PHP', 'MySQL', 'React'],
    description:
      'A full-scale inventory management system built for the Municipal Government of Boac. Features real-time tracking of items across all departments, admin dashboard, transaction history, defective item monitoring, and multi-office account management.',
    screens: [
      { src: '/images/inventory-system/login_page.png',           caption: 'Login Page' },
      { src: '/images/inventory-system/main_admin_dashboard.png', caption: 'Admin Dashboard' },
      { src: '/images/inventory-system/items.png',                caption: 'Items Management' },
      { src: '/images/inventory-system/items_modal.png',          caption: 'Item Detail Modal' },
      { src: '/images/inventory-system/inventory_base.png',       caption: 'Inventory Base' },
      { src: '/images/inventory-system/office_account_dashboard.png', caption: 'Office Dashboard' },
      { src: '/images/inventory-system/office_base.png',          caption: 'Office Base View' },
    ],
    color: '#6c63ff',
    featured: true,
  },
  {
    id: 2,
    title: 'Plantilla of Personnel 2026',
    category: 'Web System',
    tags: ['PHP', 'MySQL', 'Laravel', 'FullCalendar'],
    description:
      "A government personnel management system for the Municipality of Boac's HR department. Manages employee records, employment types (Permanent, Elective, Co-Term), job orders, and notifications with a live Local Government Calendar.",
    screens: [
      { src: '/images/plantilla-system/login.png',               caption: 'Login Page' },
      { src: '/images/plantilla-system/dashboard_plantilla.png', caption: 'Personnel Dashboard' },
      { src: '/images/plantilla-system/employees.png',           caption: 'Employee Records' },
      { src: '/images/plantilla-system/add_delete.png',          caption: 'Add / Delete Module' },
      { src: '/images/plantilla-system/notifications.png',       caption: 'Notifications' },
    ],
    color: '#22c55e',
    featured: true,
  },
  {
    id: 3,
    title: 'Municipality Epson Driver Portal',
    category: 'Web Tool',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    description:
      'An internal LAN-hosted web portal providing Epson printer driver downloads for all municipal offices. Organizes drivers by series and supports multiple Windows versions (Win 7 / 10 / 11) with 32-bit and 64-bit installers.',
    screens: [
      { src: '/images/epson-driver/front.png',   caption: 'Portal Home' },
      { src: '/images/epson-driver/drivers.png', caption: 'Driver Listings' },
    ],
    color: '#00e5ff',
    featured: false,
  },
  {
    id: 4,
    title: 'ExpenseTracker Mobile App',
    category: 'Mobile App',
    tags: ['React Native', 'Firebase', 'Expo'],
    description:
      'A cross-platform mobile expense tracking application built with React Native and Firebase Firestore. Features spending overview, category-based pie charts, recent transaction history, and real-time cloud sync across devices.',
    screens: [
      { src: '/images/mobile-app/login.jfif',   caption: 'Login Screen' },
      { src: '/images/mobile-app/front_.jfif',  caption: 'Dashboard Overview' },
      { src: '/images/mobile-app/add.jfif',     caption: 'Add Expense' },
    ],
    color: '#f6c90e',
    featured: false,
  },
]
