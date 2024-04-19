import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
// import SchoolIcon from "@mui/icons-material/School";
import Typography from "@mui/material/Typography";
import Education from "./Education";
import { Box, LinearProgress, Tooltip, Grid, Paper } from "@mui/material";
const Tech = () => {
  const technologiesadded = [
    { name: "JAVASCRIPT", percentage: 85 },
    { name: "TYPESCRIPT", percentage: 85 },
    { name: "CSS", percentage: 70 },
    { name: "HTML", percentage: 85 },
    { name: "REACTJS", percentage: 85 },
    { name: "NODE JS", percentage: 80 },
    { name: "MONGODB", percentage: 70 },
    { name: "DOCKER", percentage: 65 },
    { name: "PostgreSQL", percentage: 70 },
  ];
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="bg-experience bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[150px]">
          <div className="bg-experienceLight bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[150px]">
            <Education />
          </div>
        </div>
        <br />
        <br />
      </motion.div>
      <Typography className={styles.sectionSubTextLight}>My skills</Typography>
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <Box className="bg-white bg-opacity-10 p-4 rounded shadow-lg mt-10">
        {/* <Typography className={styles.sectionSubTextLight}> */}
        <Typography
          className={`${styles.sectionSubTextLight} text-white-100 font-bold}`}
        >
          Technology Proficiency
        </Typography>
        <Grid container spacing={2}>
          {technologiesadded.map((technology) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={technology.name}
              backgroundColor="transparant"
            >
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  borderColor: "white",
                  borderWidth: 2,
                  backgroundColor: "transparent",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Tooltip title={technology.name} placement="top">
                    <Typography
                      variant="subtitle1"
                      className={`${styles.sectionSubTextLight} text-white-100 font-bold}`}
                    >
                      {technology.name}
                    </Typography>
                  </Tooltip>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    className={`${styles.sectionSubTextLight} text-white-100 font-bold}`}
                  >
                    {technology.percentage}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={technology.percentage}
                  sx={{
                    height: 8,
                    borderRadius: 10,
                    backgroundColor: "pink",

                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "green",
                    },
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default SectionWrapper(Tech, "");
