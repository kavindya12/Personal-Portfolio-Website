export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  featured: boolean
  image: string
  gallery?: string[]
  imageTheme?: 'light' | 'dark'
  liveUrl: string
  githubUrl: string
  stack: string[]
  features: string[]
  overview: string
  problem: string
  solution: string
  architecture: string
  contribution: string
  challenges: string
  learned: string
}

export const projects: Project[] = [
  {
    slug: 'orbito',
    title: 'Orbito',
    tagline: 'AI Collaborative Project Management',
    description:
      'A collaborative project management platform designed to help teams plan, organize and track work through Kanban boards, analytics and AI-powered assistance.',
    featured: true,
    image: '/projects/orbito-hero.png',
    gallery: [
      '/projects/orbito-hero.png',
      '/projects/orbito-dashboard.png',
      '/projects/orbito-board.png',
    ],
    liveUrl: 'https://kavindya12.github.io/Orbito/',
    githubUrl: '',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Prisma', 'Socket.IO'],
    features: [
      'Kanban boards',
      'Drag & drop',
      'Real-time updates',
      'Role-based permissions',
      'Analytics',
      'AI assistant',
      'Notifications',
      'Global search',
    ],
    overview:
      'Orbito is a collaborative workspace for teams that need more than a static task list. It combines Kanban planning, live board updates, project analytics and an AI assistant so people can organize work without switching between disconnected tools.',
    problem:
      'Small teams often plan in one place, chat in another, and lose visibility as work moves. Status gets stale, permissions are inconsistent, and there is no quick way to understand progress or next actions.',
    solution:
      'Orbito centralizes planning on real-time Kanban boards, with role-based access, searchable work items, notifications and analytics. An AI assistant helps summarize boards and suggest next steps without leaving the workspace.',
    architecture:
      'The frontend is a React and TypeScript app built with Vite. A Node.js API persists data with Prisma, while Socket.IO keeps boards in sync across clients. Role checks sit on both the client and the API so permissions stay consistent as the board updates.',
    contribution:
      'I focused on the frontend experience: Kanban interactions, responsive layouts, real-time UI updates, and the surfaces that connect analytics, search, notifications and the AI assistant to the rest of the product.',
    challenges:
      'The hardest parts were keeping drag-and-drop state in sync with live updates, and making role-based views feel instant without leaking actions users should not see. Performance on busy boards also needed careful list rendering and payload size control.',
    learned:
      'I learned how real-time UI, permissions and collaboration features have to be designed together. Shipping Orbito strengthened my React, TypeScript and API-integration skills on a product that has to stay reliable as multiple people work at once.',
  },
  {
    slug: 'voyra',
    title: 'Voyra',
    tagline: 'Travel Inquiry Platform',
    description:
      'A modern travel platform for discovering curated tours and submitting trip inquiries through a clean, responsive interface.',
    featured: false,
    image: '/projects/voyra-hero.jpg',
    gallery: ['/projects/voyra-hero.jpg'],
    liveUrl: 'https://kavindya12.github.io/VOYRA/',
    githubUrl: '',
    stack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion'],
    features: [
      'Tour discovery',
      'Search & filters',
      'Destination pages',
      'Image galleries',
      'Inquiry forms',
      'Admin dashboard',
      'Responsive design',
    ],
    overview:
      'Voyra is a travel discovery product for browsing curated tours, exploring destinations and sending trip inquiries. The interface is designed to feel editorial and fast, with a clear path from inspiration to inquiry.',
    problem:
      'Many travel inquiry flows bury the trip details behind cluttered pages or generic forms. Users struggle to compare tours, and operators receive incomplete requests that need extra back-and-forth.',
    solution:
      'Voyra presents tours through searchable listings, destination pages and image galleries, then captures structured inquiries. An admin dashboard helps operators review and follow up on requests from one place.',
    architecture:
      'Voyra is a React SPA built with Vite, Tailwind CSS and React Router. Framer Motion is used sparingly for page and gallery transitions. Inquiry data is collected through validated forms and surfaced in a lightweight admin view.',
    contribution:
      'I built the public browsing experience and the inquiry flow, including search, filters, destination layouts, galleries and the responsive UI that carries through to the admin dashboard.',
    challenges:
      'The main challenge was keeping destination pages visually rich without slowing the experience, and making filters feel immediate on smaller screens. The inquiry form also needed to collect enough detail without becoming a long, intimidating process.',
    learned:
      'Voyra reinforced how layout, motion and form design affect conversion. It was a chance to practice component-driven UI with Tailwind and to ship a polished, mobile-first product around a real user journey.',
  },
  {
    slug: 'mediease',
    title: 'MediEase',
    tagline: 'AI-Enhanced Electronic Health Record System',
    description:
      'An AI-enhanced healthcare management system developed as a final-year project to centralize patient records and support healthcare professionals with AI-powered clinical summaries and QR-based e-prescriptions.',
    featured: false,
    image: '/projects/mediease-home.png',
    gallery: [
      '/projects/mediease-home.png',
      '/projects/mediease-login.png',
    ],
    imageTheme: 'light',
    liveUrl: '',
    githubUrl: '',
    stack: ['React', 'Node.js', 'MongoDB', 'FHIR', 'Gemini API', 'JWT'],
    features: [
      'Patient management',
      'Role-based access',
      'AI clinical summaries',
      'QR e-prescriptions',
      'FHIR integration',
    ],
    overview:
      'MediEase is a final-year healthcare system for managing patient records in one place. It supports clinicians with AI-generated summaries and QR-based e-prescriptions, while using FHIR-oriented data structures for interoperability.',
    problem:
      'Patient information is often split across paper notes, disconnected systems and informal handovers. That makes it harder to get a reliable clinical picture, share prescriptions, or keep access limited to the right roles.',
    solution:
      'MediEase centralizes records behind role-based access, generates AI clinical summaries to speed up review, and issues QR e-prescriptions that can be verified at the point of care. FHIR-inspired modeling keeps the data closer to healthcare interoperability standards.',
    architecture:
      'A React frontend talks to a Node.js API with JWT authentication. Patient data is stored in MongoDB using FHIR-informed resource shapes. The Gemini API produces clinical summaries, and QR payloads carry e-prescription details for verification.',
    contribution:
      'I worked across the product as a final-year project: patient management screens, role-aware navigation, summary generation flows, and the e-prescription experience that ties records to a scannable QR output.',
    challenges:
      'Healthcare data needs careful access control, so role-based routes and API checks had to stay aligned. Another challenge was turning model output into summaries clinicians could actually use, and keeping FHIR-inspired records structured enough to query.',
    learned:
      'MediEase taught me how serious domains change frontend work: permissions, data modeling and trust matter as much as visual polish. It also showed how AI features need product constraints, not just an API call.',
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
