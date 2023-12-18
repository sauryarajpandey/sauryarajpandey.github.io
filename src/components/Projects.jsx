import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";

const projectsDone = [
  {
    title: "GymFit",
    description:
      "A website that lets users create and join challenges for different activities, view leaderboards, get notifications, and compete with other members in different challenges.",
    tech: "Tech: NodeJS, ReactJS, MongoDB.",
  },
  {
    title: "E-Commerce Website",
    description: "Shopping cart built with MERN stack.",
    tech: "Tech: NodeJS, ReactJS, MongoDB, Redux.",
  },
  {
    title: "Blog Website",
    description:
      "I worked on an application where you can connect different email accounts and view them all on one page.",
    tech: "Tech: NodeJS, ReactJS, MongoDB, Redux.",
  },
  {
    title: "Real-time application For Email Client",
    description:
      "A blog page where the user can post a blog and edit the blog that the user has written.",
    tech: "Tech: Java, JavaFX, CSS, Java Mail.",
  },
  {
    title: "COVID-19 Tracker",
    description:
      "I worked on a COVID-19 live data tracking project on a map, which provides the total number of infections in different regions.",
    tech: "Tech: NodeJS, ReactJS, MongoDB",
  },
  {
    title: "Weapon detection using machine learning",
    description:
      "Developed an application that detects weapons using algorithms like RCNN, CNN, FRCNN.",
    tech: "Tech:Machine learning, Python",
  },
];

const renderProjects = () => {
  return projectsDone.map((project, index) => (
    // <div key={index} className="bg-white max-w-xs p-8 rounded shadow">
    <div
      key={index}
      className="bg-white max-w-xs p-8 rounded shadow"
      style={{ borderRadius: "70px", backgroundColor: "#C5C5C5" }}
    >
      <h1 className="text-xl font-bold text-black mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-2">{project.description}</p>
      <p className="text-sm font-bold text-black mb-2">{project.tech}</p>
    </div>
  ));
};

const Projects = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <div className="mt-8 flex flex-wrap gap-8">{renderProjects()}</div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
