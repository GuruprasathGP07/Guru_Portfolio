# Guru Prasath C — Personal Portfolio Web Application

A production-grade, high-performance personal portfolio web application built with **React 18**, **Vite**, **TypeScript** (strict mode), **Tailwind CSS**, **Framer Motion**, **Recharts**, and **Zod**.

Designed for **Guru Prasath C**, MERN Stack Developer & Competitive Programmer.

---

## 🌟 Key Features

- **Single Source of Truth**: ALL portfolio content is typed and organized strictly inside `src/data/content.ts`. Zero text is hardcoded inside JSX components.
- **Dynamic Theme Engine**: Light and Dark mode with CSS variable design tokens (`--color-bg-primary`, `--color-brand-500`, etc.), persisted via `localStorage` with zero flash on hydration.
- **Interactive Component Architecture**:
  - **Hero**: Dynamic role switcher ("MERN Stack Developer", "Competitive Programmer", "Agentic AI Explorer"), particle/mesh SVG background, dual CTAs.
  - **ScrollSpy Navbar**: Fixed glassmorphism background with real-time active section indicator and mobile drawer menu.
  - **Projects**: Filterable grid layout with VoteMithra featured card, live demo links, and architectural details modal.
  - **Competitive Programming (CP) Stats**: Animated count-up stat cards for Codeforces, LeetCode, and CodeChef plus interactive Recharts Radar and Bar comparison charts.
  - **Skills**: Categorized skill pills with Framer Motion staggered entry.
  - **Experience & Achievements**: Chronological timeline of internships at Appin Technologies and Titan Company Ltd, alongside hackathon finalist badges.
  - **Contact Form**: Form validation powered by `react-hook-form` + `zod` schema validation with interactive feedback states.

---

## 🚀 Tech Stack & Tooling

| Technology | Purpose |
| :--- | :--- |
| **React 18 + Vite** | Fast rendering and instant HMR dev experience |
| **TypeScript** | Strict type-safety across content data model and props |
| **Tailwind CSS 3** | Utility-first styling with custom CSS theme variables |
| **Framer Motion** | Micro-interactions, stagger entries, and modal transitions |
| **Recharts** | Interactive Radar and Bar charts for CP skill visualizations |
| **React Hook Form + Zod** | Declarative form handling with schema validation |
| **Lucide React** | Modern vector icon system |

---

## 🛠️ Project Structure

```text
src/
├── assets/             # Media and document resources
├── components/
│   ├── layout/         # Navbar, Footer, ThemeToggle, ScrollProgress
│   ├── ui/             # Button, Card, Badge, SectionHeading, AnimatedCounter, ProjectCard, StatCard, Timeline, ProjectModal
│   └── sections/       # Hero, About, Currently, Experience, Projects, CPStats, Skills, Achievements, Certifications, Contact
├── data/
│   └── content.ts      # Typed single source of truth for all portfolio data
├── hooks/              # useTheme, useScrollSpy, useReducedMotion
├── lib/                # utils.ts (cn helper), animations.ts (framer-motion variants)
├── types/              # index.ts (TypeScript interface models)
├── App.tsx             # Main page container
├── main.tsx            # React DOM root entry
└── index.css           # Tailwind directives & CSS variable tokens
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have Node.js (v18.0 or higher) installed.

### Installation

1. Install all dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`.

### Production Build

To verify and create a static production bundle:
```bash
npm run build
```

---

## 📝 Content Editing Guide

To update any content on your portfolio:
1. Open `src/data/content.ts`.
2. Edit the corresponding typed object (`personalDetails`, `projectsData`, `cpStatsData`, `skillsCategories`, `achievementsData`, `certificationsData`, `currentlyData`, `contactInfo`).
3. Save the file. Vite will hot-reload your changes automatically!
