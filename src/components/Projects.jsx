import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github, pineapple, pineappleHover } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
    >
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"
      ></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20"
          >
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20"
          >
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(repo, "_blank")}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]"
            >
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]"
            >
              {description}
            </p>
            <button
              className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() => window.open(demo, "_blank")}
              onMouseOver={() => {
                document
                  .querySelector(".btn-icon")
                  .setAttribute("src", pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector(".btn-icon")
                  .setAttribute("src", pineapple);
              }}
            >
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain"
              />
              LIVE DEMO
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

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
    tech: "Tech: Java, JavaFX, CSS, Java Mail.",
  },
  {
    title: "Real-time application For Email Client",
    description:
      "A blog page where the user can post a blog and edit the blog that the user has written.",
    tech: "Tech: NodeJS, ReactJS, MongoDB, Redux.",
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
