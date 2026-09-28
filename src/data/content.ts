import {
  PersonalDetails,
  Project,
  Experience,
  CPStat,
  Achievement,
  Certification,
  SkillCategory,
  CurrentlyLearning,
  ContactInfo,
} from '../types';

export const personalDetails: PersonalDetails = {
  name: 'Guru Prasath C',
  roles: [
    'MERN Stack Developer',
    'Competitive Programmer',
    'Agentic AI Explorer',
  ],
  tagline:
    'Crafting high-performance web applications, solving algorithmic challenges, and engineering next-gen Agentic AI systems.',
  about:
    'Dedicated Computer Science Engineering student at KalaignarKarunanidhi Institute of Technology, Coimbatore with an 8.60 CGPA. Combining deep expertise in full-stack MERN development with competitive problem-solving rigor. Passionate about architecting scalable web applications, integrating LLM-driven agentic workflows, and competing in national hackathons.',
  education: {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'KalaignarKarunanidhi Institute of Technology (KIT)',
    location: 'Kannampalayam, Coimbatore, Tamil Nadu',
    period: '2024 – 2028',
    cgpa: '8.60 / 10.0',
  },
};

export const contactInfo: ContactInfo = {
  email: 'guru630172@gmail.com',
  phone: '9944903445',
  location: 'Hosur, Tamil Nadu',
  githubUrl: 'https://github.com/GuruprasathGP07',
  linkedinUrl: 'https://www.linkedin.com/in/guru-prasath-c',
  codolioUrl: 'https://codolio.com/profile/mzeOtIXk',
  resumeUrl: 'https://drive.google.com/file/d/1XWf29mzmRWr0MwKutmLmSlik9lcu_J9B/view?usp=sharing',
};

export const projectsData: Project[] = [
  {
    id: 'votemithra',
    title: 'VoteMithra – Intelligent Election Assistant',
    subtitle: 'AI-Powered Civic-Tech Platform',
    category: 'AI Civic-Tech',
    description:
      'AI-powered civic-tech platform deployed on Google Cloud Run using React, Firebase, and Gemini API. Integrated Google Gemini 2.5 Flash with a 3-model fallback chain powering a multilingual AI Voter Coach (6 Indian languages), Fake News Detector with credibility scoring, and an interactive EVM & VVPAT Simulator.',
    longDescription:
      'VoteMithra is an AI-powered civic-tech platform built to empower voters across India. Deployed on Google Cloud Run using React, Firebase, and Gemini API. It features a multilingual AI Voter Coach fluent in 6 Indian languages, backed by Google Gemini 2.5 Flash API with a robust 3-model fallback chain. It incorporates an automated Fake News Detector with credibility scoring to combat electoral misinformation, along with an interactive visual EVM & VVPAT simulator for first-time voter awareness.',
    techStack: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Firebase',
      'Google Gemini 2.5 Flash API',
      'Google Cloud Run',
    ],
    liveUrl: 'https://vote-mithra-intelligent-election-as.vercel.app',
    githubUrl: 'https://github.com/GuruprasathGP07',
    featured: true,
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1200&auto=format&fit=crop',
    keyFeatures: [
      'Multilingual AI Voter Coach supporting 6 Indian languages',
      'Google Gemini 2.5 Flash API with custom 3-model fallback chain',
      'Fake News Detector with credibility scoring',
      'Interactive EVM & VVPAT Simulator',
      'Deployed on Google Cloud Run & Firebase',
    ],
  },
  {
    id: 'digital-bookstore',
    title: 'Digital Platform for Browsing & Purchasing Books',
    subtitle: 'Full-Stack E-Commerce',
    category: 'Full-Stack Web App',
    description:
      'Developed a full-stack web application enabling users to browse, search, and purchase books online. Built a responsive React.js frontend with a clean UI using HTML, CSS, and JavaScript with Node.js and MongoDB.',
    longDescription:
      'A full-featured digital bookstore web application built on the MERN stack. Developed a full-stack web application enabling users to browse, search, and purchase books online. Built a responsive React.js frontend with a clean UI using HTML, CSS, JavaScript, Node.js, and MongoDB backend.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/GuruprasathGP07',
    featured: true,
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop',
    keyFeatures: [
      'Full-stack e-commerce architecture enabling browsing, searching, and purchasing books',
      'Responsive React.js frontend with clean, intuitive UI design',
      'RESTful backend API built with Node.js and MongoDB database',
      'Seamless user workflows for catalog browsing and cart management',
    ],
  },
];

export const experienceData: Experience[] = [
  {
    role: 'MERN Stack Development Intern',
    company: 'Appin Technologies',
    period: 'June 2026',
    location: 'Coimbatore, TN',
    bullets: [
      'Built web applications using MongoDB, Express.js, React.js, and Node.js.',
      'Learned to create RESTful APIs and connect them with a React frontend.',
      'Practiced Git and GitHub for version control and collaboration.',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Git', 'GitHub'],
  },
  {
    role: 'SAP Systems Intern',
    company: 'Titan Company Ltd.',
    period: 'May 2026',
    location: 'Hosur, TN',
    bullets: [
      'Assisted in SAP-based business process workflows.',
      'Worked with enterprise resource planning modules.',
      'Collaborated with engineers to understand manufacturing operations.',
    ],
    tech: ['SAP', 'ERP', 'Process Workflows'],
  },
];

export const cpStatsData: CPStat[] = [
  {
    platform: 'LeetCode',
    handle: 'guru_2007-GP',
    rating: 1505,
    maxLabel: '5 Badges',
    solved: 650,
    extra: '650+ Solved | 5 Badges | Max Rating: 1505',
    profileUrl: 'https://leetcode.com/u/guru_2007-GP',
    iconName: 'Code',
    chartData: [
      { subject: 'Data Structures', score: 92, fullMark: 100 },
      { subject: 'Math & Logic', score: 88, fullMark: 100 },
      { subject: 'Implementation', score: 95, fullMark: 100 },
      { subject: 'Greedy', score: 85, fullMark: 100 },
      { subject: 'Dynamic Prog', score: 78, fullMark: 100 },
    ],
  },
  {
    platform: 'CodeChef',
    handle: 'kit28csa049',
    rating: 1337,
    maxLabel: '1 ★ Star Coder',
    solved: 1000,
    extra: '1000+ Solved | 57+ Contests Attended',
    profileUrl: 'https://www.codechef.com/users/kit28csa049',
    iconName: 'Award',
    chartData: [
      { subject: 'Data Structures', score: 88, fullMark: 100 },
      { subject: 'Math & Logic', score: 90, fullMark: 100 },
      { subject: 'Implementation', score: 92, fullMark: 100 },
      { subject: 'Greedy', score: 84, fullMark: 100 },
      { subject: 'Dynamic Prog', score: 72, fullMark: 100 },
    ],
  },
  {
    platform: 'Codeforces',
    handle: 'GURUX',
    rating: 920,
    maxLabel: 'Newbie',
    solved: 50,
    extra: '50+ Solved | Max Rating: 920',
    profileUrl: 'https://codeforces.com/profile/GURUX',
    iconName: 'Code2',
    chartData: [
      { subject: 'Data Structures', score: 75, fullMark: 100 },
      { subject: 'Math & Logic', score: 80, fullMark: 100 },
      { subject: 'Implementation', score: 85, fullMark: 100 },
      { subject: 'Greedy', score: 70, fullMark: 100 },
      { subject: 'Dynamic Prog', score: 60, fullMark: 100 },
    ],
  },
];

export const skillsCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
  },
  {
    category: 'Frontend Development',
    skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL'],
  },
  {
    category: 'Core Concepts & Tools',
    skills: ['DSA', 'Git', 'GitHub'],
  },
];

export const achievementsData: Achievement[] = [
  {
    title: 'Top 10 Finalist – AI for All Challenge',
    description:
      'National AI Hackathon organized by Factly × Meta × IndiaAI (2026) for innovative civic tech solutions.',
    year: '2026',
    badge: 'Top 10 Finalist',
    highlight: true,
  },
  {
    title: '7th Place – CCET HACKFEST 2025',
    description: 'Participated in CCET HACKFEST 2025 and secured 7th place.',
    year: '2025',
    badge: '7th Place',
    highlight: true,
  },
  {
    title: 'Rank 2 – NerdsAI Technical Quiz',
    description: 'Achieved rank 2 in a technical quiz conducted by NerdsAI.',
    year: '2025',
    badge: 'Rank 2',
  },
  {
    title: '2nd Prize – "NutriQuest" @ Yugam 2026',
    description: 'Secured 2nd Prize in "NutriQuest" at Yugam 2026 Technical Fest, KCT.',
    year: '2026',
    badge: '2nd Prize',
    highlight: true,
  },
  {
    title: 'Top 15 – CodeXtreme 2024/25',
    description: 'Ranked in Top 15 of CodeXtreme 2024/25, a competitive programming contest organized by my college showcasing my skills.',
    year: '2024–2025',
    badge: 'Top 15',
  },
  {
    title: '"College Topper" Badge on Code360',
    description: 'Earned the “College Topper” badge on Code360 (Coding Ninjas).',
    year: '2025',
    badge: 'College Topper',
    highlight: true,
  },
  {
    title: '20+ Coding Platform Badges',
    description: 'Earned 20+ badges across coding platforms.',
    year: '2024–2026',
    badge: '20+ Badges',
  },
];

export const certificationsData: Certification[] = [
  {
    name: 'Microsoft Azure AI Apps & Agents Associate',
    issuer: 'Microsoft',
    year: '2026',
    url: 'https://drive.google.com/file/d/1vopP8zI6R23FElm0U3ZPu752QBWu-_T4/view',
  },
  {
    name: 'CISCO Introduction to Modern AI',
    issuer: 'CISCO',
    year: '2026',
    url: 'https://drive.google.com/file/d/1FpYe4RjhcCZmfQt3jVO7i5xaqpjOKlav/view',
  },
  {
    name: 'NPTEL Programming in Java',
    issuer: 'NPTEL',
    year: '2026',
    url: 'https://lnkd.in/p/gkFH4WkP',
  },
  {
    name: 'Infosys Springboard - Artificial Intelligence',
    issuer: 'Infosys Springboard',
    year: '2025',
    url: 'https://www.linkedin.com/posts/guru-prasath-c_artificialintelligence-ai-activity-7264307765022470146-97KZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKc4AkBZENqDxtlY_RtGO9_dcaGH_4O-i0',
  },
  {
    name: 'Coursera - Web development',
    issuer: 'Coursera',
    year: '2025',
    url: 'https://drive.google.com/file/d/1iY0xsjQkAniRfyA32jJl6RpzW5tSsrTc/view',
  },
  {
    name: 'Coursera - Crash Course on Python',
    issuer: 'Coursera',
    year: '2025',
    url: 'https://drive.google.com/file/d/17BKL0b50__SfSSmS1Hw9pNxKGRmYp1BM/view',
  },
];

export const currentlyData: CurrentlyLearning = {
  topics: [
    'Agentic AI Architectures & Autonomous Multi-Agent Workflows',
    'Google Gemini 2.5 Flash API integration & model fallback chains',
    'Advanced Data Structures, Algorithms & Competitive Programming',
    'Full-Stack MERN Architecture & Web Performance Optimization',
  ],
  targetInternships:
    'Actively seeking Summer 2026 Software Development & AI Engineering Internships focused on MERN Stack + AI integrations.',
  upcomingHackathons: [
    'Yuva Yodha Tech Hackathon 2026',
    'Tech Horizon 2.0',
    'iQOO Battle 01 National Hackathon',
  ],
};

