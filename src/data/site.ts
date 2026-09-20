export const site = {
  firstName: 'Kavindya',
  lastName: 'Wickramarachchi',
  displayName: 'Kavindya Wickramarachchi',
  shortName: 'KAVINDYA',
  role: 'Frontend Developer | React & React Native',
  headline: 'I build modern web experiences with React.',
  summary:
    'Frontend Developer focused on building responsive, user-friendly applications with React, TypeScript and modern web technologies.',
  availability: 'Available for frontend opportunities',
  location: 'Sri Lanka',
  // Add real contact URLs to show Email / LinkedIn / GitHub buttons.
  email: '',
  linkedin: '',
  github: '',
  resumePath: '/resume.pdf',
  resumeFileName: 'Kavindya-Wickramarachchi-CV.pdf',
  profileImage: '/profile-portrait.jpg',
  // Optional LinkedIn certifications URL. The "View all" link hides until this is set.
  certificationsUrl: '',
  heroStack: ['React', 'TypeScript', 'JavaScript', 'React Native'],
  about: [
    "I'm a Software Engineering graduate with a strong interest in frontend development.",
    'I enjoy turning ideas and designs into responsive, intuitive web applications. My main focus is React and TypeScript, while I also have experience with React Native and full-stack development.',
    "Currently, I'm working as a Software Engineer Intern at VastFactor, where I work on real-world web and mobile applications.",
  ],
  aboutStats: [
    { value: '01+', label: 'Years building software' },
    { value: '05+', label: 'Major projects' },
    { value: 'React', label: 'Primary frontend stack' },
    { value: 'Sri Lanka', label: 'Based in' },
  ],
  contactHeading: "Let's build something together.",
  contactBody:
    "I'm currently open to frontend and software development opportunities. If you're working on an interesting product or would like to discuss an opportunity, feel free to get in touch.",
  footerTagline: 'React · TypeScript · Frontend Development',
} as const

export const services = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive and maintainable interfaces with React, TypeScript and modern CSS.',
  },
  {
    title: 'Web Applications',
    description:
      'Developing real-world applications with API integration, authentication, dashboards and complex user flows.',
  },
  {
    title: 'Mobile Development',
    description:
      'Building cross-platform mobile experiences using React Native.',
  },
  {
    title: 'UI Implementation',
    description:
      'Turning Figma designs into responsive and reusable interfaces.',
  },
] as const
