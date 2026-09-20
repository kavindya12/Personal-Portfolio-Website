export type EducationItem = {
  school: string
  credential: string
  period: string
  summary: string
}

export const education: EducationItem[] = [
  {
    school: 'Sri Lanka Technological Campus (SLTC)',
    credential: 'Bachelor of Science, Software Engineering',
    period: 'Jun 2022 - 2026',
    summary:
      'Focused on software engineering, web development, databases, software architecture and application development.',
  },
  {
    school: 'ESOFT Metro Campus',
    credential: 'Diploma of Education, Information Technology',
    period: 'Oct 2019 - Feb 2020',
    summary:
      'A comprehensive program covering core IT domains including software engineering, computer hardware, networking, Python and C# programming, SQL databases, web design and multimedia - building a strong foundation for roles in the tech industry.',
  },
  {
    school: 'ESOFT Metro Campus',
    credential: 'Diploma of Education, English',
    period: 'Oct 2019 - Feb 2020',
    summary:
      'Developed listening, speaking, reading and writing skills through interactive sessions and the Communicative Approach, with a focus on communicating confidently in professional and social environments.',
  },
]
