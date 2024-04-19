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
  consulting,
  thirdParty,
  webApplicationDevelopment,
  projectManagement,
  mobileApplication,
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
    title: "Web Applicaiton Development",
    icon: webApplicationDevelopment,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

  {
    title: "Mobile Application Development",
    icon: mobileApplication,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
  {
    title: "Third-Party Intregration",
    icon: thirdParty,
  },
  {
    title: "Consulting",
    icon: consulting,
  },
  {
    title: "Project Management",
    icon: projectManagement,
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
    title: "Software Engineer",
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
const educations = [
  {
    title: " Bachelor's in Computer Science and Engineering",
    schoolname: "Vellore Institute of Technology",
    icon: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/800px-Vellore_Institute_of_Technology_seal_2017.svg.png",
    iconBg: "#f2fcfc",
    date: "2018 - 2022",
  },
];

export { services, technologies, experiences, educations };
