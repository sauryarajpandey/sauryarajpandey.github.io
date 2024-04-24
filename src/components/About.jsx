// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { services } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { SectionWrapper } from "../hoc";

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <motion.div
//       variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//       className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
//     >
//       <div
//         options={{ max: 45, scale: 1, speed: 450 }}
//         className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//       >
//         <img src={icon} alt={title} className="w-30 h-30 object-contain" />
//         <h3 className="text-taupe text-[18px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   );
// };
// const About = () => {
//   return (
//     <div className="-mt-[6rem]">
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className="mt-6 text-taupe text-[18px] max-w-3xl leading-[30px] inline"
//       >
//         As an experienced Full Stack Developer, I&apos;ve successfully delivered
//         <b> 10+ complex web applications</b> that have driven tangible business
//         impact. Proficient in{" "}
//         <b>React.js, TypeScript, Node.js, Nest.js, MongoDB, and PostgreSQL,</b>{" "}
//         I take pride in my ability to own the entire development lifecycle, from
//         design to post-release support. Leveraging my strong technical skills
//         and problem-solving mindset, I&apos;ve tackled a wide range of
//         challenges, such as optimizing a legacy codebase to improve page load
//         times by 30% and designing a fault-tolerant data pipeline that increased
//         data reliability by 90%. I &apos;m a collaborative team player who
//         thrives in fast-paced, agile environments, and I consistently seek
//         opportunities to learn and grow. Explore my portfolio to see some of my
//         work, and feel free to reach out if you have any questions or would like
//         to discuss potential collaborations. I&apos;m excited to contribute my
//         expertise to innovative projects that push the boundaries of what&apos;s
//         possible in Full Stack Development.
//       </motion.p>

//       <div className="mt-20 flex flex-wrap gap-10 ">
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(About, "about");
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full sm:w-[250px] card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{ max: 45, scale: 1, speed: 45 }}
        className="bg-jetLight rounded-[20px] py-5 px-4 sm:px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 sm:w-30 sm:h-30 object-contain"
        />
        <h3 className="text-taupe text-base sm:text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 0.1)}
        className="mt-6 text-taupe text-[18px] max-w-3xl leading-[30px] inline"
      >
        As an experienced Full Stack Developer, I&apos;ve successfully delivered{" "}
        <b>10+ complex web applications</b> that have driven tangible business
        impact. Proficient in{" "}
        <b>React.js, TypeScript, Node.js, Nest.js, MongoDB, and PostgreSQL,</b>{" "}
        I take pride in my ability to own the entire development lifecycle, from
        design to post-release support. Leveraging my strong technical skills
        and problem-solving mindset, I&apos;ve tackled a wide range of
        challenges, such as optimizing a legacy codebase to improve page load
        times by 30% and designing a fault-tolerant data pipeline that increased
        data reliability by 90%. I &apos;m a collaborative team player who
        thrives in fast-paced, agile environments, and I consistently seek
        opportunities to learn and grow. Explore my portfolio to see some of my
        work, and feel free to reach out if you have any questions or would like
        to discuss potential collaborations. I&apos;m excited to contribute my
        expertise to innovative projects that push the boundaries of what&apos;s
        possible in Full Stack Development.
      </motion.p>
      <div className="mt-10 sm:mt-20 flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
