import {
  frontend,
  backend,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  graphql,
  asterdio,
  beyondid,
  infodevelopers,
  okta,
  auth0,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "okta",
    icon: okta,
  },
  {
    name: "auth0",
    icon: auth0,
  },
];

const experiences = [
  {
    title: "Asociate Software Engineer",
    company_name: "BeyondID",
    icon: beyondid,
    iconBg: "#f2fcfc",
    date: "Feb 2022 - Present",
  },
  {
    title: "Java Developer (Internship)",
    company_name: "InfoDeveloper Pvt Ltd",
    icon: infodevelopers,
    iconBg: "#f2fcfc",
    date: "Dec 2021 - Feb 2022",
  },
  {
    title: "Front-End Developer(Internship)",
    company_name: "Asterdio Inc",
    icon: asterdio,
    iconBg: "#f2fcfc",
    date: "Nov 2020- Jan 2021",
  },
];

const projects = [
  {
    id: "project-1",
    name: "KomiKult",
    description: "A comic characters list app that displays Marvel characters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: "project-2",
    name: "Leaderboard",
    description:
      "A leaderboard list app that displays scores submitted by different players.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: "project-3",
    name: "Math Magicians",
    description: "This is a single-page calculator app built with React",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: "project-4",
    name: "Movie Metro",
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: "project-5",
    name: "Nyeusi Fest Site",
    description:
      "This is a demo concert website for a music festival called Nyeusi.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
  },
];

export { services, technologies, experiences, projects };
