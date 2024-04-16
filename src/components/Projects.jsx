import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";

const projectsDone = [
  {
    title: "Service Management",
    description:
      "The web application is used from project scoping to service allocation on the product, enabling swift and effective generation of accurate management.",
    tech: "Tech: NodeJS, ReactJS, MYSQL.",
  },
  {
    title: "Hey!Sruthi",
    description:
      "The web application manages the bonus calculation of the employees in a company quarterly and yearly. It also facilitates chatting within the application for individual users, allowing them to add comments to their bonuses",
    tech: "Tech: NestJS, ReactJS, Prisma(ORM), MYSQL.",
  },
  {
    title: "Chat Room",
    description:
      "A chat room where users could log into the application using Google, ensuring encrypted communication. It also includes a video calling feature with screen sharing capabilities, along with the ability to share documents within the chat",
    tech: "Tech: NodeJS, ReactJS, MongoDB.",
  },
  {
    title: "Real-time application For Email Client",
    description:
      "Worked on an application where you can connect different email accounts and view them all on one page.",
    tech: "Tech: Java, JavaFX, Java Mail.",
  },
  {
    title: "InkedScribe",
    description:
      "A web application where you can view the contents of various articles on different topics that can be added by different users once they are logged in. It also includes a comment and like feature",
    tech: "Tech: NodeJS, ReactJS, MYSQL",
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
