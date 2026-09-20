export type ExperienceItem = {
  company: string
  role: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'VastFactor',
    role: 'Software Engineer Intern',
    period: 'Jan 2026 - Present',
    bullets: [
      'Develop frontend features using React and TypeScript',
      'Build responsive web interfaces',
      'Work with APIs and backend services',
      'Improve application performance',
      'Collaborate through Git and pull requests',
      'Contribute to React Native applications',
    ],
  },
  {
    company: '11th Street Travel UK',
    role: 'Junior Administrator - Admin & Support',
    period: 'Mar 2026 - Present',
    bullets: [
      'Manage travel-related operational tasks',
      'Coordinate booking and payment information',
      'Communicate with international clients and suppliers',
      'Work with time-sensitive operational processes',
      'Develop strong organizational and communication skills',
    ],
  },
]
