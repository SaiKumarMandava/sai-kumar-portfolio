import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Web1 from '../../assets/website-img-1.jpg'
import Web2 from '../../assets/website-img-2.webp'
import Web3 from '../../assets/website-img-3.jpg'
import Web4 from '../../assets/website-img-4.jpg'


const projects = [
  {
    name: "Modular Homes Estimation & 3D Visualization",
    year: "May2023",
    align: "right",
    image: Web1,
    link: "#",
  },
  {
    name: "Learning Minds",
    year: "Nov2023",
    align: "left",
    image: Web2,

    link: "#",
  },
  {
    name: "Total Connect",
    year: "Jan2024",
    align: "right",
    image: Web3,
    link: "#",
  },
  {
    name: "Resume Selling",
    year: "July2024",
    align: "left",
    image: Web4,
    link: "#",
  },
  {
    name: "Coders Fashion",
    year: "October2024",
    align: "right",
     image: Web4,
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
